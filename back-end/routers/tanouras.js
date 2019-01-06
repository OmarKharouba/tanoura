var express = require('express');
var router = express.Router();
var Tanoura = require('../models/tanoura');

router.get('/all', (req, res) => {
    Tanoura.find((err, tanouras) => {
        if (err) {
            res.status(5000).json({
                message: 'Error while retrieving tanouras'
            });
        } else {
            res.status(200).json({
                tanouras: tanouras
            })
        }
    });
});

router.post('/new', (req, res) => {
    var newTanoura = new Tanoura(req.body.tanoura);
    newTanoura.save((err, tanoura) => {
        if (err) {
            res.status(5000).json({
                message: 'Error while adding tanoura'
            });
        } else {
            res.status(200).json({
                tanoura: tanoura
            })
        }
    });
});

module.exports = router;