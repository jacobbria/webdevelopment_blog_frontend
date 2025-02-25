<script setup>
import { ref } from "vue";
import Navbar from './components/Navbar.vue'
import LandingPage from './components/LandingPage.vue'
import SearchBar from './components/SearchBar.vue'
import BlogsPostedCard from './components/BlogsPostedCard.vue'
import BlogCard from './components/BlogCard.vue'
import TheFooter from './components/TheFooter.vue'
import SeeMoreButton from './components/SeeMoreButton.vue'
const count = ref(5); // tracks number of cards shown
</script>

<template>
<Navbar />
<LandingPage />
<BlogsPostedCard />
<SearchBar />
  <!-- Temp for loop to give mock API feel -->
  <div v-for="n in count" :key="n" class="box">
      <BlogCard />
  </div>
<SeeMoreButton @increase="count += 5" />
<TheFooter />
</template>
<style>
/* Sets font style for whole app */
* {
  font-family: 'Teachers Pro', sans-serif;
}

</style>
