const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Branch = require('../models/branch.model')
const branchDoc = new Branch()

// get branch list
router.get('/branches', (req, res, next) => {
    Branch.find({})
        .then(result => {
            res.status(201).json({
                branches: result
            })
        })
        .catch(err => {
            res.send({
                error: err
            })
        })
});

// add a new branch
router.post('/branch', (req, res, next) => {
    const branch = new Branch({
        _id: new mongoose.Types.ObjectId(),
        branchManagerFirstName: req.body.firstName,
        branchManagerMiddleName: req.body.secondName,
        branchManagerLastName: req.body.lastName,
        branchManagerEmail: req.body.email,
        branchManagerPhone: req.body.phone,
        gender: req.body.gender,
        branchName: req.body.branchName,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        postalcode: req.body.postalCode,
        password: req.body.password
    });

    branch.save()
        .then(result => {
            res.status(201).json({
                message: 'Branch Added',
                data: result
            });
        })
        .catch(err => {
            res.status(501).json({
                error: err.message
            });
        });
});

module.exports = router;