const express = require('express'),
router = express.Router();

//create and set the variables
var userCtrl = require('./user-controller');

router.post('/packages', userCtrl.createUser);
router.get('/packages', userCtrl.getUsers);
//read one package
router.get('/packages/:id', userCtrl.getUser);
//update or delete a package
router.put('/packages/:id', userCtrl.updateUser);
router.delete('/packages/:id', userCtrl.deleteUser);

//all files will be uploads
module.exports.UPLOAD_PATH = "uploads";
//define multer
var multer = require("multer");
//create instance of multer
var upload = multer({dest: module.exports.UPLOAD_PATH});
//define image controler
var imageCtrl = require('./image-controller');
module.exports = router;