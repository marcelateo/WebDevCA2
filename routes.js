const express = require('express'),
router = express.Router();

var itemCtrl = require('./icontroller'),
packagesCtrl = require('./pcontroller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

router.post('/packages', packagesCtrl.createPackages);
router.get('/packages', packagesCtrl.getPackages);

module.exports = router;