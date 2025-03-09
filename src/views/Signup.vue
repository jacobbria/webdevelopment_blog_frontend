<template>
  <Navbar />
  <div class="container">
    <h1>Sign Up</h1>
    <h2>Create an account to get started</h2>
    <p>Already have an account? <a href="/login">Login</a></p>
  </div>
  <TheFooter />
</template>

<script setup>
// Imports
import Navbar from '../components/Nav/Navbar.vue';
import SearchBar from '../components/Home/SearchBar.vue';
import TheFooter from '../components/Nav/TheFooter.vue';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Signup page mounted');
})
</script>

<style scoped>
.container {
  margin-top: 100px;
  height: 100vh;
}
</style>