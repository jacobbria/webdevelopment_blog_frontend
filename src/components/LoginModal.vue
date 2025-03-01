<template>
    <div class="modal"> 
        <div class="modal-content d-flex flex-column">
            <!-- Top Section -->
            <div class="modal-content-top">
                <span class="close" @click="emit('close')">&times;</span>
                <h1 class="mt-4">Sign in</h1>  
                <hr>
                <div class="form-group-top d-flex flex-column justify-content-center align-items-center mt-3">
                    <div class="label d-flex "> <label for="username"><h2>Username</h2></label> </div>
                    <input type="text" id="username" name="username" placeholder="Enter your password" class="label">
                </div>
                <div class="form-group-top d-flex flex-column justify-content-center align-items-center mt-3">
                    <div class="label d-flex "> <label for="pasword"><h2>Password</h2></label> </div>
                    <input type="text" id="username" name="username" placeholder="Enter your password" class="label">
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
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
const emit = defineEmits(['close'])
</script>

<style scoped>
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
  background-color: rgb(70, 186, 176);
  color: white;
  margin: 15% auto;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #888;
  width: 90%; 
  height: 600px; 
  position: relative;
  overflow: hidden;  
}

.modal-content-top {
  flex: 1;  
  overflow-y: auto; 

}

.modal-content-bottom {
  height: 250px; 
  width: 100%; 
  padding-bottom: 20px;
}

.modal-header {
  padding-top: 10px;
  border-bottom: none;
}

hr {
  width: 100%;
  height: 4px;
  background-color: white;
  opacity: 1;
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
  color: rgb(255, 255, 255);
  text-decoration: none;
  cursor: pointer;
}

/* Animation Styling */
iframe {
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