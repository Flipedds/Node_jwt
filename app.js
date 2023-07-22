const express = require('express');
const Auth = require('./Routes/Auth');
const Register = require('./Routes/Resgister');
const GetUserById = require('./Routes/GetUserById');
const Database = require('./Database/Mongo');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.app.listen(3000);
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.get('/', (req, res) =>{
        res.status(200).json({msg: "Bem vindo a nossa api"});
    });
    this.app.use('/user', GetUserById);
    this.app.use('/auth/register', Register);
    this.app.use('/auth/login', Auth);
  }
}

new App();