<template>
  <Navbar />
  <div class="container d-flex justify-content-center align-items-center">
    <div class="row col-12 col-md-6 col-lg-4">
      <div class="modal-content">
        <h1 class="mt-3">Sign in</h1>  
        <h2>Create an account to get started</h2>
        <hr>
        <div class="input-section ">
          <h2>Email</h2>
          <input v-model="email" type="text" id="email" name="email" placeholder="Enter your email" class="label">
        </div>
        <div  class="input-section">
          <h2> Password</h2>
          <input v-model="password" type="password" id="password" name="password" placeholder="Enter your password" class="label">
        </div>
        <div  class="input-section">
          <h2>Re-enter Password</h2>
          <input type="password" id="passwordRentry" name="password" placeholder="Re-enter your password" class="label">
         </div>   
        <button class="btn btn-primary mt-3" @click="signup">Sign up</button>
        </div>
      </div>
    </div>
  <TheFooter />
</template>

<script setup>
// Imports
import Navbar from '../components/Nav/Navbar.vue';
import TheFooter from '../components/Nav/TheFooter.vue';
import { ref } from "vue";

// Define reactive variables for form fields
const email = ref("");
const password = ref("");

// Login function to send a POST request
const signup = async () => {
  console.log(email.value + " " + password.value);
  try {
    const response = await fetch("api-goes here", { // TO DO -- input API
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,  // VALUE == data
        password: password.value,
      }),
    });

    if (!response.ok) {
      console.log("Error -  failed");
      return;
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error logging in:", error);
  }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  height: 95vh;
}
.modal-content {
  background-color: #d2d2d2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.6);
}
hr {
  width: 100%;
  height: 4px;
  background-color: rgb(0, 0, 0);
  opacity: 1;
}
.input-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-content: start;
  justify-content: center;
}
.input-section h2 {
  text-align: start;
}
iframe {
  pointer-events: none; /* Prevent iframe from being clickable but allows above elements to be clickable*/
  background: transparent !important;
  aspect-ratio: 1 / 1;
}
</style>