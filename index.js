const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion'; // connecting to the db from the app

const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected to the mongoDb server");

    var newDish = Dishes({   // creates a new Dish in the dishes db
        name: "Paratha",
        description: "aloo type"
    });

    newDish.save()
        .then((dish) => {
            console.log("Dishes created: ",dish);

            return Dishes.find({}).exec(); // find all the dishes from the db
        })
        .then((dishes) => {
            console.log("Dishes found: ",dishes);
            return Dishes.remove({}); // remove all the dishes from the db
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log("Error: ",err);
        });
});