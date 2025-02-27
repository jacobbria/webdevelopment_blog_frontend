<template>
    <div class="modal"> 
        <div class="modal-content">
            <span class="close" @click="emit('close')">&times;</span>
            <h1>Sign in</h1>  
            <hr>
            <div class="form-group-top d-flex flex-column justify-content-center align-items-center">
              <div class="label d-flex col-9 col-md- col-lg-8 "> <label for="username"><h2>Username</h2></label> </div>
              <input type="text" id="username" name="username" placeholder="Enter your username" class="col-9 col-md- col-lg-8">
            </div>
            <div class="form-group-top d-flex flex-column justify-content-center align-items-center mt-5">
              <div class="label d-flex col-9 col-md- col-lg-8"> <label for="pasword"><h2>Password</h2></label> </div>
              <input type="text" id="username" name="username" placeholder="Enter your password" class="col-9 col-md- col-lg-8">
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['close'])
</script>

<style scoped>
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
  padding: 20px;
  border: 1px solid #888;
  width: 90%; /* Size of modal itself */
  height: 600px;
}

hr {
  width: 100%;
  height: 7px;
  background-color: white;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
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
    width: 30%;
  }
}
</style>