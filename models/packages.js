const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema

const PackagesSchema = new Schema({

 name: {type: String,
        enum: ['Single', 'Couple', 'Family', 'Friends']},
 places: String,
 package: String,
 price: Number

});
const Packages = mongoose.model('packages', PackagesSchema);
module.exports = Packages;