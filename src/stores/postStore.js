import { defineStore } from 'pinia';

export const usePostStore = defineStore('post', {
  state: () => ({
    post: null,  // Stores the article post
  }),
  actions: {
    setPost(post) {
      this.post = post;  // Sets the post object
    },
    clearPost() {
      this.post = null;  // Clear the post
    },
  },
});
