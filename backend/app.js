// Install ExpressJS by follwing command
// npm install --save express
// GxOkVaJrCBEOw83t

const express = require('express');

const app = express();

// const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://imuserAtocim:GxOkVaJrCBEOw83t@cluster0-cqqj8.mongodb.net/test?retryWrites=true&w=majority')

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

app.use('/api/students', (req, res, next) => {
    const student = [
        {
            id: "17bca068",
            name: "Harshil Sureja",
            class: "TYBCA",
            city: "Ahmedabad"
        },
        {
            id: "17bca140",
            name: "Tarun Patel",
            class: "TYBCA",
            city: "Ahmedabad"
        },
        {
            id: "17bca140",
            name: "Aakash Bhavsar",
            class: "TYBCA",
            city: "Ghandhinagar"
        },
        {
            id: "17bca105",
            name: "Shubh Bhatt",
            class: "TYBCA",
            city: "Ahmedabad"
        }
    ];

    res.status(200).json({
        message: "Data get successfully",
        students: student
    });
});

module.exports = app;