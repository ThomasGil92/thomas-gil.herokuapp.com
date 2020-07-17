const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uuid } = require('uuidv4');
const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuid() + '-' + fileName)
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
    list,
    siteById,
    read,
    update
    /*remove,
    , */
} = require('../controllers/site.js');
const {
    requireSignin,
    isAuth
} = require('../controllers/auth');
const {
    userById
} = require('../controllers/user');



router.post("/siteAdd/:userId", requireSignin, isAuth, upload.array('imgCollection', 6), create);
router.get('/siteList', list);
 router.get('/site/:siteId', read);
 router.patch('/site/:siteId/:userId', requireSignin, isAuth, upload.array('imgCollection', 6), update);
/*router.delete('/xp/:xpId/:adminId', requireSignin, isAuth, remove);


router.get('/xp/photo/:xpId',photo); 
*/
router.param("siteId", siteById);
router.param("userId", userById);



module.exports = router;