var User = require('./models/packages');

//create packages
exports.createpackages = function(req, res) { 
    var newpackage = new package(req.body);
    newpackage.save(function (err, package) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(packages); 
});
};

//read packages
exports.getpackages = function(req, res) {
  User.find({}, function (err, packages) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(pakages);
  }); 
};