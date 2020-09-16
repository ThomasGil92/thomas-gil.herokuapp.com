const app = require('../src/app')
const User = require('../src/models/user')
const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const userId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userId,
    name: "André",
    email: 'Andrew@example.fr',
    password: 't123456',
    token: jwt.sign({ _id: userId }, process.env.JWT_SECRET)
}

beforeAll(async () => {
    await User.deleteMany()/* 
    await new User(userOne).save() */
})
test('Should not signup user with bad credentials', async () => {
    const response = await request(app).post('/api/signup')
        .send({
            name: "Thomas",
            email: "tgil849@gmail.fr"
        })
        .expect(400)
    expect(response.body.error).not.toBeNull()

})
test('Should signup a new user', async () => {
    const response = await request(app).post('/api/signup')
        .send(userOne)
        .set('Accept', 'application/json')
        .expect(200)
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()
    expect(response.body).toMatchObject({
        user: {
            name: 'André',
            email: 'Andrew@example.fr'
        }
    })
    expect(user.password).not.toBeDefined()
    expect(user.hashed_password).toBeDefined()
    expect(user.hashed_password).not.toBe('t123456')
})

test('Should signin a new user', async () => {
    await request(app).post('/api/signin')
        .send({
            email: userOne.email,
            password: userOne.password
        })
        .set('Accept', 'application/json')
        .expect(200)
})
test('Should not signin nonexistent user', async () => {
    await request(app).post('/api/signin').send({
        email: userOne.email,
        password: 'thisisnotmypass'
    }).expect(401)
})