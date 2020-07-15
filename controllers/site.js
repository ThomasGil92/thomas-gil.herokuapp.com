const Site = require("../models/site.js");
const mongoose = require('mongoose')


exports.create = (req, res) => {
    console.log(req.body.title)
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/' + req.files[i].filename)
    }


    const newSite = new Site({
        _id: new mongoose.Types.ObjectId(),
        imgCollection: reqFiles,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        publicationDate: req.body.publicationDate,
        skills: Array.isArray(req.body.skills)
            ? req.body.skills
            : req.body.skills.split(',').map(skill => skill.trim())
    });

    newSite.save().then(result => {
        res.status(201).json(result)

    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
}

exports.list = (req, res, next) => {
    Site.find().sort( { from: -1 } ).then(data => {
        res.status(200).json(data);

    });

};