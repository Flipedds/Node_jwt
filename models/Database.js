require('dotenv').config();
const Mongo = require('./Connection');

// Credencials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const Connection = new Mongo(dbUser, dbPassword).connect();

module.exports = Connection;
