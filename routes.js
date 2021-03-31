const express = require('express'),
router = express.Router();

var iCtrl= require('./item-controller'),
packageCtrl = require('./package-controller');


router.get('/hello', iCtrl.getWorld);

router.get('/hello/:foo/:bar', iCtrl.getWorldParams);

router.post('/hello', iCtrl.postWorld);

module.exports = router;