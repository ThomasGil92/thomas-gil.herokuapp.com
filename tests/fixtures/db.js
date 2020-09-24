const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Site = require('../../src/models/site')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Mike',
    email: 'mike@example.com',
    password: 't123456',
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Jess',
    email: 'jess@example.com',
    password: 't123456',
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
}

const siteOne = {
    _id:  new mongoose.Types.ObjectId(),
    title: "Site test",
    description: "Site description",
    skills: "html,css",
    imgCollection: ['tests/fixtures/alsace-661302_1920.jpg'],
    url: "google.com",
    publicationDate: "2020-09-16T08:28:00.853Z"
}



const setupDatabase = async () => {
    await User.deleteMany()
    await Site.deleteMany()
    await new User(userOne).save()
    await new Site(siteOne).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    siteOne,
    setupDatabase
}