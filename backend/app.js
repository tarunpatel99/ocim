// Install ExpressJS by follwing command
// npm install --save express
// GxOkVaJrCBEOw83t

// imuseratocim -> fCC0azNhJMzjSGkX

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const db = 'mongodb+srv://imuseratocim:fCC0azNhJMzjSGkX@cluster0-cqqj8.mongodb.net/ocim?retryWrites=true&w=majority'
const studentsRoutes = require('./routes/students.route')
const ownerRoutes = require('./routes/owner.route')


// connect to db
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, socketTimeoutMS: 0 })
    .then(() => {
        console.log('Database connected successfully!')
    })
    .catch(err => {
        console.log(err.message)
    });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use(bodyParser.json())

app.get('/', function(req, res) {
	res.send('It works');
});

app.use('/api', studentsRoutes);
app.use('/api', ownerRoutes);



module.exports = app;
