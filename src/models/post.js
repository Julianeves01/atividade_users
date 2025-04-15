const { v4: uuid4 } = require('uuid');
class Post {
    constructor(idUser, curtidas, comentarios, compartilhamentos, url_imagem) {
        this.id = uuid4();
        this.idUser = idUser;
        this.curtidas = curtidas;
        this.comentarios = comentarios;
        this.compartilhamentos = compartilhamentos;
        this.url_imagem = url_imagem;
    }
}

module.exports = Post;
