const User = require("../models/User");
const UserList = require("../models/UserList");
const UserModel =require('../models/UserModel');

const lista = new UserList();

//adicionando alguns usuários iniciais (teste)
lista.addUser(new User("Maria Clara", "mariaClara@example.com", 30));
lista.addUser(new User("Arthur Delben", "ArthurDelben@example.com", 25));

const router = {
    getAllUsers: (req, res) => {
        res.json(lista.getAllUsers());
    },

    getUserById: (req, res) => {
        try {
            res.json(lista.getUserById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Usuário não encontrado", error });
        }
    },

    addUser: (req, res) => {
        try {
            const { nome, email, senha } = req.body;
            if (!nome || !email || !senha === undefined) {
                throw new Error("Todos os campos são obrigatórios");
            }
            const newUser = new User(nome, email, senha);
            lista.addUser(newUser);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },

    updateUser: (req, res) => {
        try {
            res.status(200).json(lista.updateUser(req.params.id, req.body));
        } catch (error) {
            res.status(400).json({ message: "Erro ao atualizar o usuário" });
        }
    },

    deleteUser: (req, res) => {
        lista.deleteUser(req.params.id);
        res.status(200).json({ message: "Usuário deletado com sucesso", IdDeletado: req.params.id });
    },

    getPostByUserId: (req, res) => {
        try {
            const userId = req.params.id;
            res.status(200).json({ message: "Post encontrado com sucesso", IdDeletado: req.params.id });
        } catch (error) {
            res.status(404).json({ message: "Post não encontrado", error });
        }
    }
};

module.exports = router;
