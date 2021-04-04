var User = require('./models/package');

//create packages
exports.createUser = function(req, res) { 
    var newuser = new User(req.body);
    newuser.save(function (err, user) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(user); 
});
};

//read packages
exports.getUsers = function(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

//read just one package
exports.getUser = function(req, res) {
  User.findOne({_id: req.params.id}, function (err, user) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(user);
  }); 
};

//update a package
exports.updateUser = function(req, res) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, user) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(user);
  }); 
};

//delete one package
exports.deleteUser = function(req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function (err, user) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(user);
  }); 
};