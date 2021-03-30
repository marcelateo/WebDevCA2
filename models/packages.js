var mongoose = require('mongoose');

var packageSchema = new mongoose.Schema({ 
    id:{ type: Number, unique: true},
    user: { 
        type: String,
        enum: ['Single', 'Couple', 'Family', 'Friends'],
    places: String,
    package: String,
    price: Number
    }
});

module.exports = mongoose.model('packages', userSchema);