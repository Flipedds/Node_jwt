const mongoose = require('mongoose');
require('dotenv').config();

class Mongo {
    constructor(dbUser, dbPassword){
        this.dbUser = dbUser;
        this.dbPassword = dbPassword;
    }

    connect() {
    mongoose.connect(
    `mongodb+srv://${this.dbUser}:${this.dbPassword}@cluster0.6emua71.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("conectou ao banco!");
    })
    .catch((err) => console.log(err));
    }
}

module.exports = Mongo;
