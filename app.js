const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const dotenv = require('dotenv');
const app = express();
const port = 8800; 


const noteRoutes = require('./routes/note');




dotenv.config();

// middleware 
app.use(express.json());
app.use(cors());

// endpoints 

app.use('/api.keeper/notes', noteRoutes);

mongoose.connect(process.env.MONGO_KEEPER_DB, () => {
  console.log('connection to keeper db established');
})








app.listen(port, () => {
  console.log(`backend is listenning on ${port}`);
});





