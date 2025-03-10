<template>
    <div class="modal"> 
      <div class="modal-content d-flex flex-column">
            <!-- Top Section -->
            <div class="modal-content-top">
                <span class="close" @click="emit('close')">&times;</span>
                <h1 class="mt-3">Sign in</h1>  
                <hr>
                <div class="form-group-top d-flex flex-column justify-content-center align-items-center">
                    <div class="label d-flex "> <label for="email"><h2>Email</h2></label> </div>
                    <input type="text" id="email" name="email" placeholder="Enter your email" class="label">
                </div>
                <div class="form-group-top d-flex flex-column justify-content-center align-items-center mt-2">
                    <div class="label d-flex "> <label for="pasword"><h2>Password</h2></label> </div>
                    <input type="text" id="username" name="username" placeholder="Enter your password" class="label">
                </div>
                <div class="form-group-top  d-flex flex-column justify-content-start align-items-center mt-2">
                    <button class="btn btn-dark">Login</button>
                    <div class="account-options d-flex justify-content-between align-items-center">
                      <a href="">Forgot Password</a>
                      <router-link to="/signup">Sign Up</router-link>
                    </div>
                </div>
                
            </div>

            <!-- Bottom Section with Animation -->
            <div class="modal-content-bottom  d-flex justify-content-center align-items-center">
                <iframe src="https://lottie.host/embed/cc74741f-8da8-4189-bd75-9f0e2842d4c8/7WuBEDQBMI.lottie"></iframe>
            </div>
        </div>
    </div>

</template>

<script setup>
// Imports
import { useRouter } from 'vue-router';
const router = useRouter();
//
const goToSignUp = () => {
  router.push('/signup');
  emit('close');
}
// Emits
const emit = defineEmits(['close'])
</script>
<style scoped>

input {
    background-color: rgb(220, 220, 220) !important;  
    color: black !important; 
    -webkit-appearance: none;  
    border: 1px solid #ced4da;  
}
.label {
  width: 80%;
}
.modal {

  display: block; 
  position: fixed; 
  z-index: 10000; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.5); 
}

/* Modal Content Box */
.modal-content {

  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  margin: 15% auto;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #888;
  width: 90%; 
  height: 600px; 
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border-width: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.9); 
}

.modal-content-top {
  flex: 1;  
  overflow-y: auto; 

}

.modal-content-bottom {
  background: transparent !important; 
  height: 250px; 
  width: 100%; 
  padding-bottom: 20px;
}
.btn {
  width: 80%;
}
.modal-header {
  padding-top: 10px;
  border-bottom: none;
}
h1 {
  font-weight: 900;
  font-size: 2.2rem;
  line-height: .8;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6); 
}

hr {
  width: 100%;
  height: 4px;
  background-color: rgb(0, 0, 0);
  opacity: 1;
}

/* Login Options */
.account-options {
  width: 80%;
  margin-top: 10px;
  gap: 10px;
}


/* The Close Button */
.close {
  position: absolute;
  right: 0;
  left: 80%;
  top: 0;
  bottom: 1.1;
  margin: auto;
  color: #ff0000;
  float: right;
  font-size: 2.5rem;
  font-weight: bold;
  height: 50px;
}

.close:hover,
.close:focus {
  color: rgb(0, 0, 0);
  text-decoration: none;
  cursor: pointer;
}

/* Animation Styling */
iframe {
  pointer-events: none; /* Prevent iframe from being clickable but allows above elements to be clickable*/
  background: transparent !important;
  aspect-ratio: 1 / 1;
}

/* Responsive Styling */
/* Small devices (phones, 576px and up) */
@media (min-width: 576px) { 
    .modal-content {
        width: 80%;
    }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
    .modal-content {
        width: 70%;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    .modal-content {
        width: 50%;
    }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
    .modal-content {
        width: 30%;
    }
}
</style>