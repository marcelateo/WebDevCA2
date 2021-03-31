var mongoose = require('mongoose');

var packagesSchema = new mongoose.Schema({ 
    name: { 
        type: String,
        enum: ['For Singles', 'For Family', 'For Couples', 'For Friends']

    },
    place: String,
    item: String,
    price: Number    
       
   
});

module.exports = mongoose.model('User', packagesSchema);