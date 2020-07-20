const User = require('../models/user')
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandler.js');
require('dotenv').config();

exports.signup = (req, res) => {
    console.log('req.body', req.body)
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.signin = (req, res) => {
    //Find the admin based on email
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                err: 'user with that email does not exist. Please signup'
            });
        }
        //if user is found make sure the email and password match
        //create auth method in user model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and password dont match"
            });
        }
        //generate a signed token with id and secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        //persist the token as 't' in cookie with expiry date
        //res.cookie('t', token, { expire: new Date() + 60*60*1000 },{httpOnly:true});
        //return response with user and token to frontend client
        const { _id, name, email } = user;
        return res.json({ token, user: { _id, email, name } });
    });
};

exports.signout = (req, res) => {
    res.clearCookie('t');
    res.json({ message: 'Signout success' });
};

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth",
    algorithms: ['HS256']
});

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: 'Access denied'
        });
    }
    next();
};