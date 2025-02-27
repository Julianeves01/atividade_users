class PostList {
    constructor() {
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }

    getAllPosts() {
        return this.posts;
    }

    getPostById(id) {
        const post = this.posts.find(post => post.id === id);
        if (!post) {
            throw new Error("Post não encontrado");
        }
        return post;
    }

    updatePost(id, updatedData) {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex === -1) {
            throw new Error("Post não encontrado");
        }
        const post = this.posts[postIndex];
        this.posts[postIndex] = { ...post, ...updatedData };
        return this.posts[postIndex];
    }

    deletePost(id) {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex === -1) {
            throw new Error("Post não encontrado");
        }
        this.posts.splice(postIndex, 1);
    }
}

module.exports = PostList;