const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const siteRouter = require('./routes/site');
const userRouter = require('./routes/user');
require('dotenv').config();
const path = require('path');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

const app = express();
const PORT = process.env.PORT || 8000
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,/* 
  useCreateIndex: true, */
})
  .then(() => console.log('DB Connected'));


app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use('/api', siteRouter);
app.use('/api', userRouter);
app.use('/public', express.static('public'))
app.use(express.static('client/build'));

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
});

mongoose.connection.on('error', function (error) {
  console.log('Mongoose Connection Error : ' + error);
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});