const Site = require("../models/site.js");
const mongoose = require('mongoose')

exports.siteById = (req, res, next, id) => {
    Site.findById(id)
        .exec((err, site) => {
            if (err || !site) {
                return res.status(400).json({
                    error: 'Site not found'
                });
            }
            req.site = site;
            next();
        });
};

exports.read = (req, res) => {
    return res.json(req.site);
}

exports.create = (req, res) => {
    


    const newSite = new Site({
        _id: new mongoose.Types.ObjectId(),
        imgCollection: req.file.filename,
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
            res.status(500).json({
                error: err
            });
    })
}

exports.list = (req, res, next) => {
    Site.find().sort({ from: -1 }).then(data => {
        res.status(200).json(data);

    });

};

/* exports.update = (req, res, next) => {
    Site.findOneAndUpdate({ _id: req.params.id },
        { $set: req.body },
        { new: true })
        .then(doc => res.status(200).json(doc))
        .catch(err =>
            res.status(400).json({ update: err }))
    next();
}; */
exports.update = (req, res) => {
   


    const newSite = new Site({
        imgCollection: req.file.filename,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        publicationDate: req.body.publicationDate,
        skills: Array.isArray(req.body.skills)
            ? req.body.skills
            : req.body.skills.split(',').map(skill => skill.trim())
    });
    Site.findOneAndUpdate({ _id: req.site.id }, newSite, { new: true }, (err, site) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error', 'error': err });
        }
        return res.status(201).json(site);
    })
}
exports.remove = (req, res) => {
    let site = req.site;
    site.remove((err, deletedSite) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: "Site project deleted successfully"
        });
    });
};