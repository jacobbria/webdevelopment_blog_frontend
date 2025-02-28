<template>
    <div class="modal"> 
      
          <div class="modal-content">
            <span class="close" @click="emit('close')">&times;</span>
            <h1 class="mt-4">Sign in</h1>  
            <hr>
            <div class="form-group-top d-flex flex-column justify-content-center align-items-center">
              <div class="label d-flex "> <label for="username"><h2>Username</h2></label> </div>
              <input type="text" id="username" name="username" placeholder="Enter your username" class="label">
            </div>
            <div class="form-group-top d-flex flex-column justify-content-center align-items-center mt-3">
              <div class="label d-flex "> <label for="pasword"><h2>Password</h2></label> </div>
              <input type="text" id="username" name="username" placeholder="Enter your password" class="label">
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['close'])
</script>

<style scoped>
.label {
  width: 80%;
}
.modal {
  display: block; /* Force display of modal  */
  position: fixed; /* keep modal in place */
  z-index: 10000; 
  left: 0;
  top: 0;
  width: 100%; /* Size of background of modal*/
  height: 100%; 
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.5); /* opacity of external page */
}

/* Modal Content/Box */
.modal-content {
  background-color: rgb(70, 186, 176);
  color: white;
  margin: 15% auto;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #888;
  width: 90%; /* Size of modal itself */
  height: 600px;
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
  left: 0;
  top: 0;
  bottom: 1.1;
  margin: auto;


  color: #ff0000;
  float: right;
  font-size: 3rem;
  font-weight: bold;
  height: 50px;
}

.close:hover,
.close:focus {
  color: rgb(255, 255, 255);
  text-decoration: none;
  cursor: pointer;
}

/* Responsive Styling */

/* For medium devices */
@media (min-width: 992px) {
  .modal-content {
    width: 50%;
  }
}

/* For large devices */
@media (min-width: 1300px) {
  .modal-content {
    width: 25%;
  }
}
</style>