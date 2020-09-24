const app = require('../app')
const User = require('../src/models/user')
const request = require('supertest')
const {
    userOne,
    userTwo,
    setupDatabase
} = require('./fixtures/db')

beforeEach(setupDatabase)
afterAll(async () => {
	await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});
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
        .send(userTwo)
        .set('Accept', 'application/json')
        .expect(200)
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()
    expect(response.body).toMatchObject({
        user: {
            name: 'Jess',
            email: 'jess@example.com'
        }
    })
    expect(user.password).not.toBeDefined()
    expect(user.hashed_password).toBeDefined()
    expect(user.hashed_password).not.toBe('t123456')
})

test('Should signin a user', async () => {
    const response=await request(app).post('/api/signin')
        .send({
            email: userOne.email,
            password: userOne.password
        })
        .set('Accept', 'application/json')
        .expect(200)
        expect(response.body).toBeTruthy()
})
test('Should not signin with wrong password', async () => {
    await request(app).post('/api/signin')
    .send({
        email: userOne.email,
        password: 'thisisnotmypass'
    }).expect(401)
})
