const express = require('express');
const router = express.Router();
const base = '/students'
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

// get students list
router.get(base, (req, res, next) => {
    res.status(200).json({
        message: "Data get successfully",
        students: student
    });
});

// add new student
router.post(base, (req, res, next) => {
    console.log(req.body);
    res.send({
        student: req.body
    })
    // res.send({type: 'POST'});
});

// update new student
router.put(base + '/:id', (req, res, next) => {
    res.send({type: 'POST'});
});

// delete a student
router.delete(base + '/:id', (req, res, next) => {
    res.send({type: 'DELETE'});
})

router.get('/student', (req, res, next) => {
    

    res.status(200).json({
        message: "Data get successfully",
        students: student
    });
});

module.exports = router;