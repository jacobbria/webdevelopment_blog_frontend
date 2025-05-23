<template>
  <Navbar />
  <div class="container d-flex justify-content-center align-items-center">
    <div class="row col-12 col-md-8 col-lg-6">
      <div class="modal-content">
        <h1 class="mt-3">Sign up</h1>  
        <h2>Create an account to get started</h2>
        <hr>
        <div class="input-section ">
          <h2>Name</h2>
          <input v-model="nameInput" type="text" id="nameInput" name="nameInput" placeholder="Enter your name" class="label">
        </div>
        <div class="error-container d-flex justify-content-center">
          <div class="error-section" id="name-error">
            <p>Must be between 5 and 30 characters</p>
          </div>
        </div>
        <div class="input-section" >
          <h2>Email</h2>
          <input v-model="email" type="text" id="email" name="email" placeholder="Enter your email" class="label">
        </div>
        <div class="error-container d-flex justify-content-center">
          <div class="error-section " id="email-error">
            <p>Requires @franklin.edu & valid characters</p>
          </div>
        </div>
        <div class="input-section" >
          <h2>Phone</h2>
          <input v-model="phone" type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter your phone number" class="label">
        </div>
        <div class="error-container d-flex justify-content-center">
          <div class="error-section " id="phone-error">
            <p>Must be 10 digits</p>
          </div>
        </div>
        <div  class="input-section">
          <h2> Password</h2>
          <input v-model="password" type="password" id="password" name="password" placeholder="Enter your password" class="label">
        </div>
        <div class="error-container d-flex justify-content-center">
          <div class="error-section " id="password-error">
            <p>Must be between 8 and 20 characters</p>
          </div>
        </div>
        <div  class="input-section">
          <h2>Re-enter Password</h2>
          <input v-model="passwordRentry" type="password" id="passwordRentry" name="password" placeholder="Re-enter your password" class="label">
         </div>   
         <div class="error-container d-flex justify-content-center">
          <div class="error-section " id="reenterpassword-error">
            <p>Passwords must match</p>
          </div>
        </div>
        <button class="btn btn-primary mt-3" @click="signup">Sign up</button>
        </div>
      </div>
    </div>
  <TheFooter />
</template>

<script setup>
// Imports
import { useRouter } from 'vue-router';
import Navbar from '../components/Nav/Navbar.vue';
import TheFooter from '../components/Nav/TheFooter.vue';
import { ref } from "vue";
import { useAuthStore } from '../stores/auth' // testing cookie storing user information

// Define reactive variables for form fields
const nameInput = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const passwordRentry = ref("");

// Initialize auth store
const authStore = useAuthStore();

const router = useRouter();

// function to send a POST request w/ entered values
const signup = async () => { 
  console.log(nameInput.value + " " + email.value + " " + password.value);
  try {
    const response = await fetch("http://127.0.0.1:8081/api/users/register", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput.value,
        email: email.value, 
        password: password.value,
        mobileNumber: phone.value,
      }),
    });


    // console.log(password.value + " " + passwordRentry.value);
    console.log(phone.value);
    if (password.value !== passwordRentry.value) {
      let element =  document.getElementById("reenterpassword-error");
      element.style.visibility = "visible";
      password.value = ""
      passwordRentry.value = "";
      console.log("passwords dont match")
      return;
    } else {
      let element =  document.getElementById("reenterpassword-error");
      element.style.visibility = "hidden";
    }

    const result = await response.json();
    
    if (!response.ok) {
      console.log("Error - failed");
      console.log("Status Code:", result.statusCode);
      console.log("Error Message:", result.statusMsg);
      displayError(result);
      return;
    } else {
      console.log("Success!");
      // Store the email in Pinia before navigation
      authStore.setUser(nameInput.value);
      authStore.setEmail(email.value);
      router.push({ 
        name: 'Signupvalidation'
      });
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }

};

// In the event of an error try and present helpful information to user
const displayError = (result) => {
  let element = null;
    if (result.statusMsg.includes("name")){
      element = document.getElementById("name-error");
      element.style.visibility = "visible";

      nameInput.value = "";
      element = document.getElementById("nameInput");
      element.style.outline = "2px solid red";
    } else {
      element = document.getElementById("name-error");
      element.style.visibility = "hidden";
      element = document.getElementById("nameInput");
      element.style.outline = "none";
    }

    if (result.statusMsg.includes("mobileNumber")){
      element = document.getElementById("phone-error");
      element.style.visibility = "visible";

      phone.value = "";
      element = document.getElementById("mobileNumber");
      element.style.outline = "2px solid red";
    } else {
      element = document.getElementById("phone-error");
      element.style.visibility = "hidden";
      element = document.getElementById("mobileNumber");
      element.style.outline = "none";
    }


    if (result.statusMsg.includes("email")){
      element = document.getElementById("email-error");
      element.style.visibility = "visible";

      email.value = "";
      element = document.getElementById("email");
      element.style.outline = "2px solid red";
    } else {
      element = document.getElementById("email-error");
      element.style.visibility = "hidden";
      element = document.getElementById("email");
      element.style.outline = "none";
    }

    if (result.statusMsg.includes("password")){
      element = document.getElementById("password-error");
      element.style.visibility = "visible";

      password.value = "";
      element = document.getElementById("password");
      element.style.outline = "2px solid red";
      element = document.getElementById("passwordRentry");
      element.style.outline = "2px solid red";
    } else {
      element = document.getElementById("password-error");
      element.style.visibility = "hidden";
      
      element = document.getElementById("password");
      element.style.outline = "none";
      element = document.getElementById("passwordRentry");
      element.style.outline = "none";
    }

}
</script>

<style scoped>
.container {
  margin-top: 7vh;
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
  z-index: 10;
}
.input-section h2 {
  text-align: start;
}
iframe {
  pointer-events: none; /* Prevent iframe from being clickable but allows above elements to be clickable*/
  background: transparent !important;
  aspect-ratio: 1 / 1;
}
.error-section {
  visibility: hidden;
  background-color:rgb(255, 94, 94);
  margin-top: -20px;
  z-index: 1;
  width: 95%;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;

}
.error-section p {
  font-size: small;
}
</style>

<style  >
body {
  background-color: var(--color-primary);
}
</style>
