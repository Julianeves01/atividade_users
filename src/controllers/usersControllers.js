const User = require('../models/User');
const UserList = require('../models/UserList');

const lista = new UserList();

//opcional, adicionar usuários fixos

lista.addUser(new User('Julia', 'Julia.s.neves6@aluno.senai.br','17'));

const router = {
    getAllUsers: (req, res) => {
        res.json(lista.getAllUsers());
    }
};

module.exports = router;