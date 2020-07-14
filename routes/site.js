const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

const {
    create,
    /* xpById,
    read,
    remove,
    update,
    list */
} = require('../controllers/site.js');
/* const {
    create,
    list
} = require('../controllers/xp2.js'); 
const {
    requireSignin,
    isAuth
} = require('../controllers/auth');
const {
    adminById
} = require('../controllers/admin');*/



router.post("/siteAdd", /* requireSignin, isAuth, */ upload.array('imgCollection', 6), create);
/* router.get('/xp/:xpId', read);
router.delete('/xp/:xpId/:adminId', requireSignin, isAuth, remove);
router.put('/xp/:xpId/:adminId', requireSignin, isAuth, upload.array('imgCollection', 6), update);
router.get('/xps', list);
router.get('/xp/photo/:xpId',photo); 


router.param("adminId", adminById);
router.param("xpId", xpById);*/


module.exports = router;