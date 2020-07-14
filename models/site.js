const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imgCollection: {
        type: Array
    },
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    description: {
        type: Object,
        required: true
    },
    skills: {
        type: Array,
        defaults: [],
        required:true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
    

},
    {
        timestamps: true,
        collection: 'sites'
    }
);


module.exports = mongoose.model("Site", siteSchema);