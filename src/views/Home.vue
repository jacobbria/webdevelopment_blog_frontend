<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '../components/Nav/Navbar.vue'
import LandingPage from '../components/Home/LandingPage.vue'
import SearchBar from '../components/Home/SearchBar.vue'
import BlogsPostedCard from '../components/Home/BlogsPostedCard.vue'
import BlogCard from '../components/Home/BlogCard.vue'
import TheFooter from '../components/Nav/TheFooter.vue'
import SeeMoreButton from '../components/Home/SeeMoreButton.vue'
import LoginModal from '../views/LoginModal.vue';
import ArticleModal from '../components/Home/ArticleModal.vue';
import axios from 'axios'; // axios make HTTP request simpler

const count = ref(5); // Tracks number of cards shown
const wordCount = ref(0); // Holds words counted
const posts = ref([]); // Holds the fetched blog posts
const loading = ref(false); // Tracks if a request is in progress
const hasMore = ref(true); // Indicates if more posts are available
const skip = ref(0); // Tracks the offset for pagination

// Article Modal Related Controls
const articleModal = ref(false); // controls if article modal is open
const selectedPost = ref(null); // Track which post was clicked

const toggleArticleModal = (post) => {
  selectedPost.value = post;
  articleModal.value = !articleModal.value;
  //console.log('Article modal toggled:', articleModal.value);
}

// Login Modal Related Controls
const loginModal = ref(false); // controls if login modal is open
const toggleLoginModal = () => {
  loginModal.value = !loginModal.value;
  //console.log(loginModal.value);
}

// Function to fetch blog posts from Contentful
const fetchPosts = async () => {
  if (loading.value || !hasMore.value) return; // Prevent duplicate requests

  loading.value = true;
  try {
    const response = await axios.get(
      'https://cdn.contentful.com/spaces/2zynx1qhiyas/entries',
      {
        params: {
          access_token: 'ThGs2LPiO9dDkaeckwrgv27eLelE3SZr4cP-cl6066g',
          content_type: 'studentBlogs',
          limit: 5, // Fetch only 5 posts at a time
          skip: skip.value, // Start from the last fetched index
        },
      }
    );

    if (response.data.items.length > 0) {
      console.log('Number of blog posts fetched:', response.data.items.length);

      /* Update word count */
      response.data.items.forEach((post) => {
        const blogContent = post.fields.blogContent || "";
        const wordCountForPost = blogContent.split(/\s+/).filter(Boolean).length;
        post.wordCount = wordCountForPost;
        wordCount.value += wordCountForPost;
      });

      posts.value = [...posts.value, ...response.data.items]; // Append new posts
      skip.value += response.data.items.length; // Increase offset for next batch of posts

      console.log('Total number of blog posts:', posts.value.length);
    } else {
      hasMore.value = false; // No more posts to load
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  } finally {
    loading.value = false;
  }
};
onMounted(async () => {
  await fetchPosts(); // Wait until posts are fetched
  //posts.value.forEach((post, index) => { // print all posts for debug
  //  console.log(`Post ${index + 1}:`, post);
  //});
});
</script>

<template>
<Navbar @toggleLoginModal="toggleLoginModal" /> <!-- Emits toggleLoginModal event to Navbar -->
<LandingPage />

<!-- Login Modal -->
<div v-if="loginModal">
  <LoginModal @close="toggleLoginModal" />
</div>

<BlogsPostedCard :allPosts="posts.length > 0 ? posts.length : 0" :allWords="wordCount"/>
<SearchBar />

<!-- Article Modal - moved outside the loop -->
<div v-if="articleModal">
  <ArticleModal 
    :post="selectedPost" 
    @toggleArticleModal="toggleArticleModal" 
  />
</div>

<!-- Temp for loop to give mock API feel -->
<div v-if="posts.length > 0">
  <div v-for="post in posts" :key="post.sys.id" class="box">
    <BlogCard :post="post" @toggleArticleModal="toggleArticleModal(post)" />
  </div>
</div>
<!-- If no more blogs are available, hide see more btn -->
<SeeMoreButton v-if="hasMore" @increase="fetchPosts" />
  
<TheFooter />
</template>
<style>
/* Sets font style for whole app */
* {
  font-family: 'Teachers Pro', sans-serif;
}

</style>
