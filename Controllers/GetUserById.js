const express = require('express');
const router = express.Router();
const User = require('../models/User');

const checkToken = require('../Middlewares/checkToken');

// Private rote
router.get('/:id', checkToken, async (req, res) => {
    const id = req.params.id;
    // consulta sem a senha
    const user = await User.findById(id, '-password');

    if (!user){
        return res.status(404).json({msg: "Usuário não encontrado"});
    }

    return res.status(200).json({user});

});

module.exports = router;