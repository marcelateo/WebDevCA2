//declare modules required
const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');
mongoose = require('mongoose'),
dotenv=require("dotenv");

//instances
var app = express();
var port = process.env.PORT ||8000;
dotenv.config();

app.use(bodyParser.json())
app.use(logger('tiny'));
app.use(require('./routes'));
app.use(express.static('view'));

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = process.env.DB_URL;

//mongoose is used to connect the app to the mongodb
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
.then((result) => console.log('Connected to DB'))
.catch((err) => console.log(err));
