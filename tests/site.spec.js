const app = require('../src/app')
const Site = require('../src/models/site')
const User = require('../src/models/user')
const request = require('supertest')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const siteTestId = new mongoose.Types.ObjectId()
const siteTest = {
    _id: siteTestId,
    title: "Site test",
    description: "Site description",
    skills: ["html,css"],
    imgCollection: ['tests/fixtures/alsace-661302_1920.jpg'],
    url: "google.fr",
    publicationDate: "2020-09-16T08:28:00.853Z"
}

const userTestId = new mongoose.Types.ObjectId()
const userTest = {
    _id: userTestId,
    name: 'Mike',
    email: 'mike@example.com',
    password: '56what!!',
    token: jwt.sign({ _id: userTestId }, process.env.JWT_SECRET)
}

beforeAll(async () => {
    await User.deleteMany()
    await Site.deleteMany()
    await new User(userTest).save()
    await new Site(siteTest).save()
})

test('Should get site list', async () => {
    const response = await request(app)
        .get('/api/siteList')
        .expect(200)
    const site = await Site.find()
    expect(site).not.toBeNull()
    expect(site.length).toBeGreaterThan(0)
})

test('Should get site item by ID', async () => {
    const response = await request(app)
        .get(`/api/site/${siteTest._id}`)
        .expect(200)
    const site = await Site.findById(response.body._id)
    expect(response.body).toMatchObject({
        skills: ['html,css'],
        title: 'Site test',
        description: 'Site description',
        url: 'google.fr'
    })
})

test('Should create site without error', async () => {
    const response = await request(app)
        .post(`/api/siteAdd/${userTest._id}`)
        .set('Authorization', `Bearer ${userTest.token}`)
        .set('Accept', 'application/json')
        .send({
            title: "Site test 2",
            description: "Site description 2",
            skills: ["html,css"],
            url: "google.com",
            publicationDate: "2020-09-16T08:28:00.853Z"
        })
        .expect(201)
    const site = await Site.findById(response.body._id)
    expect(site).not.toBeNull()
    expect(site).toMatchObject({
        title: "Site test 2",
        url: "google.com"
    })
    expect(site.imgCollection).toEqual(expect.any(Array))
})

test('Should get a site by id', async () => {
    const response = await request(app)
        .get(`/api/site/${siteTestId}`)
        .expect(200)
})

test('Should delete a site by ID', async () => {
    const response = await request(app)
        .delete(`/api/site/${siteTest._id}/${userTest._id}`)
        .set('Authorization', `Bearer ${userTest.token}`)
        .set('Accept', 'application/json')
        .expect(200)
    expect(Site.findById(response.body._id).status).not.toBeDefined()
})