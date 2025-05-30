<template>
  <Navbar />
   <CenterModalLayout>
    <div v-if="post">
      <img src="../assets/img/blog_image.jpg">
      <div class="blog-content-container">
        <h1>{{ post.fields.title }}</h1>
        <h2>By {{ post.fields.name }}</h2>
        <h3>{{ formatDate(post.fields.datePosted) }}</h3>
        <p>{{ post.fields.blogContent }}</p>
      </div>
    </div>
  </CenterModalLayout>
  <TheFooter />
  </template>
  
  <script setup>
  import { usePostStore } from '../stores/postStore';  // Import the store
  import Navbar from '../components/Nav/Navbar.vue';
  import TheFooter from '../components/Nav/TheFooter.vue';
  import CenterModalLayout from '../components/Templates/CenterModalLayout.vue';


  const postStore = usePostStore();  // Access the Pinia store
  
  const post = postStore.post;  // Retrieve the post from the store

  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  }
  </script>
  
  <style scoped>
  
    .blog-content-container {
      max-width: 700px; 
      margin: 0 auto;   
      padding: 0 16px;  
    }
    img {
      width: 600px;
    }

    h1 {
      font-size: var(--font-size-6xl);
    }
    h3 {
      font-style: italic;
      font-size: var(--spacing-md);
      color: var(--color-grey);
    }
  </style>
  