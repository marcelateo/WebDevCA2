var User = require('./models/packages');

//create packages
exports.createPack = function(req, res) { 
    var newpackage = new Pack(req.body);
    newpackage.save(function (err, package) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(packages); 
});
};

//read packages
exports.getPack = function(req, res) {
  Pack.find({}, function (err, packages) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(pakages);
  }); 
};