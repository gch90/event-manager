const express = require('express');
const app = express();
const events = require('./routes/events')
const connectDB = require('./db/connect')
require('dotenv').config()
var cors = require('cors')
const bodyParser = require('body-parser')


//middleware
app.use(express.json())
app.use(cors())
app.use('/api/v1/events',events)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8000;

const start = async () => {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening on ${port}...`));
  } catch(error) {
    console.log(error);
  }
}

start()
