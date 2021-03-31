const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema

const PackagesSchema = new Schema({

[
   {
      "@name": "FOR SINGLE",
      "place": [
         {
            "item": "Tenerife",
            "comment": "10 days Hot and Relaxing",
            "price": "1.500"
         },
         {
            "item": "Croatia",
            "comment": "7 days Adventure",
            "price": "1.780"
         },
         {
            "item": "Poland",
            "comment": "12 days Resort Ski",
            "price": "2.230"
         }
      ]
   },
   {
      "@name": "FOR COUPLE",
      "place": [
         {
            "item": "FuerteVentura",
            "comment": "10 days Romantic",
            "price": "3.670"
         },
         {
            "item": "Paris",
            "comment": "7 days Romantic",
            "price": "2.560"
         },
         {
            "item": "Greece Zakynthos",
            "comment": "12 days Resort",
            "price": "4.650"
         },
         {
            "item": "Portugal Algarve",
            "comment": "7 days Resort",
            "price": "2.650"
         },
         {
            "item": "Spain Mallorca",
            "comment": "10 days Night Life",
            "price": "2.850"
         }
      ]
   },
   {
      "@name": "FOR FAMILY",
      "place": [
         {
            "item": "France Disney",
            "comment": "7 days Fun",
            "price": "8.950"
         },
         {
            "item": "Arkansas",
            "comment": "5 days Adventure",
            "price": "3.780"
         },
         {
            "item": "Orlando WaltDisney",
            "comment": "4 days Resort",
            "price": "6.850"
         }
      ]
   },
   {
      "@name": "FOR FRIENDS",
      "place": [
         {
            "item": "Amsterdam",
            "comment": "7 days Night life",
            "price": "1.550"
         },
         {
            "item": "Spain Barcelona",
            "comment": "7 days City tour",
            "price": "1.890"
         },
         {
            "item": "L.A California",
            "comment": "10 days Resort",
            "price": "3.560"
         }
      ]
   }
]

});
const Packages = mongoose.model('packages', PackagesSchema);
module.exports = Packages;
