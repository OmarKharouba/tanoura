var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tanouraSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: [0, 'Price must be positive'],
        required: true
    },
    iamges: [String]
});

var Tanoura = mongoose.model('Tanoura', tanouraSchema);

module.exports = Tanoura;
