const { v4: uuid4 } = require('uuid');
class Post {
    constructor(curtidas, comentarios, compartilhamentos, imagens) {
        this.id = Date.now().toString();
        this.curtidas = curtidas;
        this.comentarios = comentarios;
        this.compartilhamentos = compartilhamentos;
        this.imagens = imagens;
    }
}

module.exports = Post;
