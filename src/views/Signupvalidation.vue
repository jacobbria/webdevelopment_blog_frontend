<template>
  <Navbar />
  <div class="background d-flex justify-content-center align-items-center"> 
     <div class="content_body top">
        <iframe src="https://lottie.host/embed/d864c402-85e4-4b80-93ea-5975d2f577d0/6qZkIyIO7a.lottie"></iframe>
        <h1> Verification sent to {{ authStore.getEmail }}</h1>
        <h2> Get verified to start posting! </h2>
<br>
        <div class="button_section d-flex justify-content-center align-items-center gap-3">
          <div class="home button">
            <h1> Home </h1>
          </div>
          <div class="account button">
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

const authStore = useAuthStore()
</script>

<style>
.background {
  margin-top: 80px;
  height: 95vh;
  background-color: yellowgreen;
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
  background-color: yellowgreen;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 150px;
  padding: 10px;
  transition: background-color .4s ease, transform 0.3s ease;
}

.button:hover {
  cursor: pointer;
  background-color: rgb(254, 195, 83);
  transform:  translateX(10px);
}

</style>