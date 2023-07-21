const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    post: async (req, res) =>{

        // facilita a organização se o identificador existir no body do json enviado.
        const {name, email, password, confirmpassword} = req.body;
    
        // validations
        if(!name){
            return res.status(422).json({msg: "O nome é obrigatório"});
        }
    
        if(!email){
            return res.status(422).json({msg: "O email é obrigatório"});
        }
    
        if(!password){
            return res.status(422).json({msg: "A senha é obrigatório"});
        }
    
        if(password !== confirmpassword){
            return res.status(422).json({msg: "As senhas não conferem"})
        }
    
        // check if user exists
        const userExists = await User.findOne({email: email })
    
        if(userExists){
            return res.status(422).json({msg: "Por favor. utilize outro email"})
        }
    
        // create password
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);
    
        // create user
        const user = new User({
            name,
            email,
            password:passwordHash
        });
    
        try {
            await user.save();
            res.status(201).json({msg: 'Usuário criado com sucesso!'});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Aconteceu um erro no servidor, tente novamente mais tarde !'}); 
        };
    
    }
};