// Install ExpressJS by follwing command
// npm install --save express

const express = require('express');

const app = express();

app.use('/students', (req, res, next) => {
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
    ];

    res.status(200).json({
        message: "Data get successfully",
        students: student
    });
});

module.exports = app;