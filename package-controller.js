var Pack = require('./models/package');//need to check this path

export function createPack(req,res){
var newpackage = new Pack(req.body);
newpackage.save(function (err, package){
    if(err){
        res.status (400).json(err);
    }
    res.json(package);
});

}

export function getPacks(req,res){
    find({}, function(err,packs){
        if(err){
            res.status(400).json(err);
        }
    res.json(packs);
});
}
