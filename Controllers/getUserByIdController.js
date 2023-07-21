const User = require('../models/User');

module.exports = {
    get : async (req, res) => {
        
        const id = req.params.id;
        // consulta sem a senha
        const user = await User.findById(id, '-password');
    
        if (!user){
            return res.status(404).json({msg: "Usuário não encontrado"});
        }
    
        return res.status(200).json({user});
    
    }
};