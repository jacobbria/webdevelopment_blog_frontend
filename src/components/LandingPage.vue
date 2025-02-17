<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="landing_wrapper col-11 col-lg-8 p-3">
        <div class="top_wrapper flex align-items-center">
          <div class="headers w-100 flex text-content">
            <h1>Franklin Tech Blog</h1>
            <h2>A student driven learning platform.</h2>
          </div>
        </div>
        <div class="middle-text "> 
            <h3>Developed, designed, and ran by students</h3>
          </div>
      </div>
      <!-- Animation HTML -->
      <div class="col-11 col-lg-4  p-3 side_bar
        flex align-items-center justify-content-center">
        <iframe src="https://lottie.host/embed/c85a6243-f82d-4ff7-b934-4a22a6d1173a/5jeS6d42EZ.lottie"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
};

import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>

<style scoped>
.container {
  margin-top: 90px;
}
.landing_wrapper {
  margin-top: 30px;
  height: 35vh;
  
}

.top_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 20vh;
  padding: 20px;
  background-color: #f7f1dc;
  border-radius: 15px; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  padding-top: 2rem;
  overflow: visible;
  
}

.text-content {
  text-align: left;
}

.middle-text {
  width: 100%;
  text-align: center; 
  padding: 10px;     
}
.middle-text:hover {
  transform: translateY(-2px)
}

/* Header styling for text */
h1 {
  font-weight: 900;
  font-size: 2.2rem;
  line-height: .8;
  
}

h2 {
  font-size: 1.3rem;
  font-style: italic;
}

h3 {
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  padding: 5px;
  background-color: rgb(70, 186, 176);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); 

}

h4 {
  font-style: italic;
}

/* Animation Styling */
iframe {
  width: 100%; /* Adjust width */
  max-width: 500px; /* Set max width */
  aspect-ratio: 1 / 1; /* Keep it square */
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}




/* Responsive Screen Code */
@media (min-width: 576px) {
 .top_wrapper {
  height: 35vh;
 }

 .middle-text {
  margin-top: 1rem; 
 }
}

@media (min-width: 768px) {
 
}

@media (min-width: 992px) {
  .top_wrapper {
    width: 150%; /* Extend beyond the parent container */
    margin-right: -100px; 
    z-index: -1; 
    margin-bottom: 0;
  }
  .middle-text {
   margin-top: 0;
  }
  h1 {
    font-size: 4.2rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.2rem;
  }
}
</style>
