class PostList {
    constructor() {
        this.posts = [];
    }
    addPost(post) {
        this.posts.push(post);
    }
    getAllPost() {
        return this.posts;
    }
    getPostById(id) {
        const post = this.posts[id];
        if (!post) {
            throw new Error(`Post não encontrado`);
        }
        return post;
    }
    updatePost(id, updateData) {
        const post = this.getPostById(id);
        Object.assign(post, updateData);
        return post;
    }
    deletePost(id) {
        const  post = this.getPostById(id);
        this.posts.splice(id, 1); //remove o post da lista
        return post; //retorna o post removido
    }
}

module.exports = PostList;