<script setup>
import Navbar from './components/Navbar.vue'
import LandingPage from './components/LandingPage.vue'
import SearchBar from './components/SearchBar.vue'
import BlogsPostedCard from './components/BlogsPostedCard.vue'
import BlogCard from './components/BlogCard.vue'
</script>

<template>
<Navbar />
<LandingPage />
<BlogsPostedCard />
<SearchBar />
<BlogCard />
</template>

<style>
/* Sets font style for whole app */
* {
  font-family: 'Teachers Pro', sans-serif;
}

</style>
