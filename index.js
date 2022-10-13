require('dotenv').config();
var cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use(cors())

app.listen(3000, () => {
    console.log(`Server Started at ${PORT}`)
})

const routes = require('./routes/routes');

app.use('/api', routes)