const Post = require("../models/post");
const PostList = require("../models/PostList");
const lista = new PostList();

// Adicionando usuários iniciais
lista.addPost(new Post(76, "Primeiro comentário", 3, ["imagem1.jpg"]));

lista.addPost(new Post(21, "Segundo comentário", 12, ["imagem2.jpg"]));

lista.addPost(new Post(15, "Terceiro comentário", 51, ["imagem3.jpg"]));

lista.addPost(new Post(4, "Quarto comentário", 0, ["imagem4.jpg"]));

const router = {
    getAllPosts: (req, res) => {
        res.json(lista.getAllPosts());
    },

    getPostById: (req, res) => {
        try {
            res.json(lista.getPostById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Esse post não foi encontrado", error });
        }
    },

    addPost: (req, res) => {
        try {
            const { curtidas, comentarios, compartilhamentos, imagens } = req.body;
            if (curtidas === undefined || comentarios === undefined || compartilhamentos === undefined || !imagens) {
                throw new Error("Todos os campos são obrigatórios!");
            }
            const newPost = new Post(curtidas, comentarios, compartilhamentos, imagens);
            lista.addPost(newPost);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },

    updatePost: (req, res) => {
        try {
            res.json(lista.updatePost(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o post", error });
        }
    },

    deletePost: (req, res) => {
        lista.deletePost(req.params.id);
        res.status(200).json({ message: "Post deletado com sucesso", IdDeletado: req.params.id });
    }
};

module.exports = router;