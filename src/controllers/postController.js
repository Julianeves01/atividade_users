const Post = require("../models/Post");
const PostList = require("../models/PostList");
const lista = new PostList();

// Adicionando posts iniciais
lista.addPost(new Post("", 532, "Primeiro comentário", 100, ["imagem1.jpg"]));

lista.addPost(new Post("", 1000, "Segundo comentário", 200, ["imagem2.jpg", "imagem3.jpg"]));

lista.addPost(new Post("", 2000, "Terceiro comentário", 300, ["imagem4.jpg", "imagem5.jpg", "imagem6.jpg"]));

lista.addPost(new Post("", 3000, "Quarto comentário", 400, ["imagem7.jpg", "imagem8.jpg", "imagem9.jpg", "imagem10.jpg"]));

const router = {
    getAllPosts: (req, res) => {
        res.json(lista.getAllPosts());
    },

    getPostById: (req, res) => {
        try {
            res.json(lista.getPostById(parseInt(req.params.id)));
        } catch (error) {
            res.status(404).json({ message: "Esse post não foi encontrado", error: error.message });
        }
    },

    addPost: (req, res) => {
        try {
            const { idUser, curtida, comentarios, compartilhamentos, imagens } = req.body;
            if (!idUser || !curtida || !comentarios || !compartilhamentos || !imagens) {
                throw new Error("Campos obrigatórios não preenchidos");
            }
            const newPost = new Post("", idUser, curtida, comentarios, imagens);
            lista.addPost(newPost);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(400).json({ message: "Erro ao adicionar o post", error: error.message });
        }
    },

    updatePost: (req, res) => {
        try {
            res.json(lista.updatePost(req.params.id), req.body);
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o post", error: error.message });
        }
    },

    deletePost: (req, res) => {
            const id = parseInt(req.params.id);
            lista.deletePost(id);
            res.status(200).json({ message: "Post deletado com sucesso", IdDeletado: id });
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar o post", error: error.message });
        }
    }

module.exports = router;