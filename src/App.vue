<script setup>
import Navbar from './components/Navbar.vue'
import LandingPage from './components/LandingPage.vue'
import SearchBar from './components/SearchBar.vue'
import BlogsPostedCard from './components/BlogsPostedCard.vue'
import BlogCard from './components/BlogCard.vue'
import TheFooter from './components/TheFooter.vue'
import SeeMoreButton from './components/SeeMoreButton.vue'
</script>

<template>
<Navbar />
<LandingPage />
<BlogsPostedCard />
<SearchBar />
<BlogCard />
<SeeMoreButton />
<TheFooter />
</template>
<style>
/* Sets font style for whole app */
* {
  font-family: 'Teachers Pro', sans-serif;
}

</style>
