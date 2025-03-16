<template>
    <Navbar />
        <div class="content">
            <h1> {{ post?.fields?.title }}  </h1>
            <p> Test </p>
        </div>
    <TheFooter />
  </template>
  
  <script setup="js">
import Navbar from '../components/Nav/Navbar.vue';
import TheFooter from '../components/Nav/TheFooter.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const post = route.state?.post; // Get the passed object

console.log(post?.fields?.title) ; // Debugging
  
const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })

    // Format date to be more readable
    const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  </script>
  
  <style scoped>
    .content {
        margin-top: 100px;
        height: 100vh;
    }
  </style>