const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const siteRouter = require('./routes/site');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express(); 
const PORT = process.env.PORT || 8000 

app.use(cors())
app.use(express.json());
app.use('/api', siteRouter); 

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true ,
    useCreateIndex:true
})
.then(() => console.log('DB Connected'));

mongoose.connection.on('error', function(error) {
  console.log('Mongoose Connection Error : ' + error);
});

app.listen(PORT, function() { 
  console.log(`Server listening on port ${PORT}.`);
});