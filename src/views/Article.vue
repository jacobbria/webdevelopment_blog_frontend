<template>
    <div v-if="post">
      <h1>{{ post.fields.title }}</h1>
      
      <p>{{ post.fields.blogContent }}</p>
    </div>
  </template>
  
  <script setup>
  import { usePostStore } from '../stores/postStore';  // Import the store
  
  const postStore = usePostStore();  // Access the Pinia store
  
  const post = postStore.post;  // Retrieve the post from the store
  </script>
  
  <style scoped>
    .content {
      margin-top: 100px;
      height: 100vh;
    }
  </style>
  