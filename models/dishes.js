const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Dishes = mongoose.model("Dish",dishSchema);

module.exports = Dishes;