exports.getWorld = function(req,res){
    res.json({result: 'Hello from Controller'});
}

exports.getWorldParams = function(req,res){
    res.json({message: 'Welcome to Where to Go Next', data: [
        req.params.foo,
        req.params.bar
    ]});
};

exports.postWorld = function(req,res){
    res.json({result: 'Post was sent', data: req.body});
};