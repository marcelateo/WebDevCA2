const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');
mongoose = require('mongoose');

var app = express();
var port = 8000;

app.use(bodyParser.json())
app.use(logger('tiny'));
app.use(require('./routes'));

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
.then((result) => console.log('Connected to DB'))
.catch((err) => console.log(err));
