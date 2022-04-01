const express = require('express');
const app = express();
const events = require('./routes/events')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
// app.use(express.static('./event-manager-front/build'))
app.use(express.json())

app.use('/api/v1/events',events)

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
