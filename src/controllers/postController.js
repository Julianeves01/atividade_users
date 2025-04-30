const Post = require("../models/Post");
const PostList = require("../models/PostList");
const lista = new PostList();

// Adicionando posts iniciais
const post1 = new Post("https://i.pinimg.com/736x/1b/24/cd/1b24cd5df88bbc197d1724554f268f7a.jpg", 532, "Primeiro comentário", 100, 2, 3);
lista.addPost(post1);

const router = {
    getAllPost: (req, res) => {
        res.json(lista.getAllPost());
    },

    getPostById: (req, res) => {
        try {
            res.json(lista.getPostById (req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Esse post não foi encontrado", error});
        }
    },

    addPost: (req, res) => {
        try {
            const { imagem, likes, comentarios } = req.body;
            if (!imagem || !likes === undefined|| comentarios === undefined) {
                throw new Error("Campos obrigatórios não preenchidos");
            }
            const newPost = new Post( imagem, likes, comentarios);
            lista.addPost(newPost);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(400).json({ message: "Erro ao adicionar o post", error: error.message });
        }
    },

    updatePost: (req, res) => {
        try {
            res.status(200).json(lista.updatePost(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o post", error: error.message });
        }
    },

    deletePost: (req, res) => {
        lista.deletePost(req.params.id);
        res.status(200).json({ message: "Post deletado com sucesso", IdDeletado: req.params.id });
    }
};

module.exports = router;