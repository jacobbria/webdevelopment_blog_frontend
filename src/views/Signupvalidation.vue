<template>
  <Navbar />
  <div class="background d-flex justify-content-center align-items-center"> 
     <div class="content_body top">
        <iframe src="https://lottie.host/embed/d864c402-85e4-4b80-93ea-5975d2f577d0/6qZkIyIO7a.lottie"></iframe>
        <h1> Verification sent to {{ authStore.getEmail }}</h1>
        <h2> Get verified to start posting! </h2>
<br>
        <div class="button_section d-flex justify-content-center align-items-center gap-3">
          <a href="index.html" class="home button">
            <h1>Home</h1>
          </a>
          <div class="account button" @click="sendToAccount">
            <h1> Account </h1>
          </div>
        </div>
    </div>
  </div>
  <TheFooter />
</template>

<script setup>
import { useAuthStore } from '../stores/auth' // test cookies
import { useRouter } from 'vue-router';
import Navbar from '../components/Nav/Navbar.vue';
import TheFooter from '../components/Nav/TheFooter.vue';

const authStore = useAuthStore();
const router = useRouter();

const sendToAccount = () => {
  router.push('/UserProfile');
}
</script>

<style>
body, html {
  background-color: var(--color-primary);
}
a {
  text-decoration: none;
  color:rgba(0, 0, 0, 0.8)
}
.background {
  margin-top: 80px;
  margin-bottom: 0;
  min-height: 100vh;
}
.content_body {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.7);
  padding: 3rem;
  margin: 2rem;
}

.button {
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: var(--color-primary);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 170px;
  padding: 10px;
  transition: background-color .4s ease, transform 0.3s ease;
}

.button:hover {
  cursor: pointer;
  background-color: rgb(254, 195, 83);
  transform:  translateX(10px);
}

</style>