<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue'
import LandingPage from './components/LandingPage.vue'
import SearchBar from './components/SearchBar.vue'
import BlogsPostedCard from './components/BlogsPostedCard.vue'
import BlogCard from './components/BlogCard.vue'
import TheFooter from './components/TheFooter.vue'
import SeeMoreButton from './components/SeeMoreButton.vue'
import LoginModal from './components/LoginModal.vue';
import axios from 'axios'; // axios make HTTP request simpler

const count = ref(5); // tracks number of cards shown
const wordCount = ref(0); // holds words counted
const posts = ref([]);      // Holds the fetched blog posts
const loading = ref(false); // Tracks if a request is in progress to limit API calls and give loading bar
const hasMore = ref(true);  // Flag to indicate whether there are more posts to load to make See More Btn available or not

// Function to fetch blog posts from Contenful (temporary for testing)
const fetchPosts = async () => {
  if (loading.value || !hasMore.value) return; // return if already making an API request or empty


  loading.value = true;
  try {
    const response = await axios.get(
      'https://cdn.contentful.com/spaces/2zynx1qhiyas/entries',
      {
        params: {
          access_token: 'ThGs2LPiO9dDkaeckwrgv27eLelE3SZr4cP-cl6066g',
          content_type: 'resumeBlogPost',
        },
      }
    );

    /*
      response object -> entire Contentful obj
      response.data -> parsed JSON Contentful obj
      response.data.item -> actual blogs obj from contenful 
    */

    if (response.data.items.length > 0) { // Ensure there is content or blogs
      console.log('Number of blog posts:', response.data.items.length);

      wordCount.value = 0; // Clear word count before recalculating
     
      /* Get WordCount */
      response.data.items.forEach((post) => {
        const blogContent = post.fields.blogContent || "";
        const wordCountForPost = blogContent.split(/\s+/).filter(Boolean).length; // Word count logic
        post.wordCount = wordCountForPost; 
        wordCount.value += wordCountForPost; 
        console.log('Word Count', wordCount.value);
      });


      posts.value = [...posts.value, ...response.data.items]; // Append new posts
      console.log('Total number of blog posts in array:', posts.value.length);
    } else {
      hasMore.value = false; 
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  } finally {
    loading.value = false; // Reset loading state
  }
};

onMounted(async () => {
  await fetchPosts(); // Wait until posts are fetched
  posts.value.forEach((post, index) => { // print all posts for debug
    console.log(`Post ${index + 1}:`, post);
  });
});

</script>
<LoginModal />
<template>
<Navbar />
<LandingPage />
<BlogsPostedCard :allPosts="posts.length > 0 ? posts.length : 0" :allWords="wordCount"/>
<SearchBar />
  <!-- Temp for loop to give mock API feel -->
  <div v-if="posts.length > 0">
    <div v-for="post in posts" :key="post.sys.id" class="box">
      <BlogCard :post="post" />
    </div>
  </div>
  <!-- If no more blogs are available, hide see more btn -->
  <div v-if="!hasMore">
  <SeeMoreButton @increase="count += 5" />
</div>
<TheFooter />
</template>
<style>
/* Sets font style for whole app */
* {
  font-family: 'Teachers Pro', sans-serif;
}

</style>
