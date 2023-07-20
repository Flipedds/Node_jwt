require('dotenv').config();
const express = require('express');
const Auth = require('./Controllers/Auth');
const Register = require('./Controllers/Resgister');
const GetUserById = require('./Controllers/GetUserById');
const connection = require('./models/Database');

const app = express();

// Config JSON response
app.use(express.json());

// Public route
app.get('/', (req, res) =>{
    res.status(200).json({msg: "Bem vindo a nossa api"});
});

app.use('/user', GetUserById);
app.use('/auth/register', Register);
app.use('/auth/login', Auth);

app.listen(3000);