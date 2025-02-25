const { v4: uuid4 } = require('uuid');
class Post {
    constructor(idUser, curtidas, comentarios, compartilhamentos, imagens) {
        this.id = uuid4();
        this.idUser = idUser;
        this.curtidas = curtidas;
        this.comentarios = comentarios;
        this.compartilhamentos = compartilhamentos;
        this.imagens = imagens;
    }
}

module.exports = Post;
