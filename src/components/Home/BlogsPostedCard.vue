<template>
    <div class="container my-5">
      <div class="row ">
        <div class="col-12 col-md-6 col-lg-4 p-3 d-flex justify-content-center align-items-center">
          <div class="total ">
            <h1> {{ allPosts }} </h1>
            <h2>Blogs Posted</h2>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-3  d-flex justify-content-center align-items-center text-center">
            <div class="total ">
                <h1>X</h1>
                <h2>Student Accounts</h2>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-4 p-3  d-flex justify-content-center align-items-center text-center">
            <div class="total ">
                <h1> {{ allWords }}+</h1>
                <h2>Words Written</h2>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script setup>

const props = defineProps({
  allPosts: {
    type: Number,
    required: true
  },
  allWords: {
    type: Number,
    required: true
  }
});

</script>

<style>
.total {
    width: 300px;
    height: 150px;
    border: solid;
    border-width: 3px; 
    border-radius: 15px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

.total h1 {
    margin-top: 10px;
    font-size: 4rem;
    line-height: .9;
    font-weight: 600;
}
h2 {
    font-size: 1.2rem;
}

</style>