const express = require('express'),
router = express.Router();

var itemCtrl = require('./icontroller'),
userCtrl = require('./ucontroller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);

module.exports = router;