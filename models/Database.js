require('dotenv').config();
const mongoose = require('mongoose');

// Credencials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const Connection = mongoose
.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.6emua71.mongodb.net/?retryWrites=true&w=majority`
    )
.then(() => {
console.log("conectou ao banco!");
})
.catch((err) => console.log(err));

module.exports = Connection;
