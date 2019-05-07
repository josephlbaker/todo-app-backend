var
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./models/todoListModel'), //created model loading here
  bodyParser = require('body-parser'),
  cors = require('cors')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Tododb");


app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


var todoRoutes = require('./routes/todoListRoutes');
var userRoutes = require('./routes/userRoutes');
todoRoutes(app);
userRoutes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});
