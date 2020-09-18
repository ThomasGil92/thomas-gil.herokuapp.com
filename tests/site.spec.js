const app = require('../app')
const Site = require('../src/models/site')
const request = require('supertest')
const {
    userOne,
    siteOne,
    userOneId,
    setupDatabase
} = require('./fixtures/db')



beforeAll(setupDatabase)

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
        .get(`/api/site/${siteOne._id}`)
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
    /* const data=new FormData() */
    const response = await request(app)
        .post(`/api/siteAdd/${userOne._id}`)
        .set('Authorization', `Bearer ${userOne.token}`)
        /* .set('Accept', 'application/json') */
        .field("title", "Site test 2")
        .field("description", "Site description 2")
        .field("skills", "html,css")
        .field("url", "google.com")
        .field("publicationDate", "2020-09-16T08:28:00.853Z")
        .attach("imgCollection", 'tests/fixtures/alsace-661302_1920.jpg')
        .expect(201)
    const site = await Site.findById(response.body._id)
    expect(site).not.toBeNull()
    expect(site).toMatchObject({
        title: "Site test 2",
        url: "google.com"
    })
    expect(site.imgCollection).toEqual(expect.any(Array))
})
test('Should update site without error', async () => {
    /* const data=new FormData() */
    const response = await request(app)
        .put(`/api/site/${siteOne._id}/${userOne._id}`)
        .set('Authorization', `Bearer ${userOne.token}`)
        /* .set('Accept', 'application/json') */
        .field("title", "Site test 4")
        .field("description", "Site description 4")
        .field("skills", "html,css")
        .field("url", "google.net")
        .field("publicationDate", "2020-09-16T08:28:00.853Z")
        .attach("imgCollection", 'tests/fixtures/alsace-661302_1920.jpg')
        .expect(201)
    const site = await Site.findById(response.body._id)
    expect(site).not.toBeNull()
    expect(site).toMatchObject({
        title: "Site test 4",
        url: "google.net"
    })
    expect(site.imgCollection).toEqual(expect.any(Array))
})

test('Shouldn\'t create site with bad img format (png)', async () => {
    /* const data=new FormData() */
    const response = await request(app)
        .post(`/api/siteAdd/${userOne._id}`)
        .set('Authorization', `Bearer ${userOne.token}`)
        /* .set('Accept', 'application/json') */
        .field("title", "Site test 3")
        .field("description", "Site description 3")
        .field("skills", "html,css")
        .field("url", "yahoo.com")
        .field("publicationDate", "2020-09-16T08:28:00.853Z")
        .attach("imgCollection", 'tests/fixtures/node1.png')
        .expect(500)
    expect(response.error.text).toMatch("Only .jpg and .jpeg format allowed!")
    expect(response.error).toBeTruthy()
})
test('Should get a site by id', async () => {
    const response = await request(app)
        .get(`/api/site/${siteOne._id}`)
        .expect(200)
})
test('Should send error when no site founded', async () => {
    const response = await request(app)
        .get('/api/site/123nositehere')
        .expect(400)
    expect(response.error).toBeTruthy()
    expect(response.error.text).toMatch("error", "Site not found")
})

test('Should delete a site by ID', async () => {
    const response = await request(app)
        .delete(`/api/site/${siteOne._id}/${userOne._id}`)
        .set('Authorization', `Bearer ${userOne.token}`)
        .set('Accept', 'application/json')
        .expect(200)
    expect(Site.findById(response.body._id).status).not.toBeDefined()
})
