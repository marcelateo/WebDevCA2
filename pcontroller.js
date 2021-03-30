var Pack = require('./models/packages');

//create packages
exports.createPackages = function(req, res) { 
    var newPackages = new Pack(req.body);
    newPackage.save(function (err, package) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(packages); 
});
};

//read packages
exports.getPackages = function(req, res) {
  Pack.find({}, function (err, packages) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(pakages);
  }); 
};