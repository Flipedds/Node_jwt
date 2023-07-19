require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Auth = require('./Controllers/Auth')
const Register = require('./Controllers/Resgister')

const app = express();

// Config JSON response
app.use(express.json());

// Models
const User = require('./models/User');

// Public route
app.get('/', (req, res) =>{
    res.status(200).json({msg: "Bem vindo a nossa api"});
});

const checkToken = require('./Middlewares/checkToken');

// Private rote
app.get('/user/:id', checkToken, async (req, res) => {
    const id = req.params.id;
    // consulta sem a senha
    const user = await User.findById(id, '-password');

    if (!user){
        return res.status(404).json({msg: "Usuário não encontrado"});
    }

    return res.status(200).json({user});

});

app.use('/auth/register', Register);
app.use('/auth/login', Auth);

const connection = require('./models/Database');

app.listen(3000);