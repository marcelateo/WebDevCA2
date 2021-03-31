const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

const server = http.server(app);

app.use(bodyParser.json())
app.use(logger('tiny'));
app.use(require('./routes'));

const dbURI = "mongodb+srv://test:<password>@cluster0.8t6tj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));


server.Listen(port, function(err){
console.log('Listening on port:' + port);


});
