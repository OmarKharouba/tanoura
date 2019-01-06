var express = require('express');
var router = express.Router();
var Tanoura = require('../models/tanoura');

router.get('/', (req, res) => {
    Tanoura.find((err, tanouras) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                tanouras: tanouras
            })
        }
    });
});

router.post('/', (req, res) => {
    var newTanoura = new Tanoura(req.body.tanoura);
    newTanoura.save((err, tanoura) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                tanoura: tanoura
            })
        }
    });
});

router.put('/', (req, res) => {
    var id = req.body.tanoura._id;
    Tanoura.findOneAndUpdate({ _id: id }, req.body.tanoura, { new: true}, (err, tanoura) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                tanoura: tanoura
            })
        }
    });
});

router.delete('/', (req, res) => {
    var id = req.body.id;
    Tanoura.findOneAndDelete({ _id: id }, (err) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                message: 'Tanoura is deleted successfully'
            })
        }
    });
});

router.get('/:id', (req, res) => {
    var id = req.params.id;
    Tanoura.findById(id, (err, tanoura) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                tanoura: tanoura
            })
        }
    });
});

router.all('*', (req, res) => {
    res.status(404).json({
        message: "Page not found"
    });
});

module.exports = router;