<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="landing_wrapper col-11 col-lg-8 p-3">
        <div class="top_wrapper flex align-items-center">
          <div class=" headers w-100 flex text-content ">
            <h1 class="text-title-lg">Franklin Tech Blog</h1>
            <h2>A student driven learning platform.</h2>
          </div>
        </div>
        <div class="middle-text "> 
            <h3>Student developed, designed, and produced</h3>
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
/* Component-specific styles */
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
  background-color: var(--color-secondary);
  border-radius: 15px; 
  box-shadow: var(--shadow-2); 
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
  transition: all 0.3s ease;  
}
/* Hover over effect on text box */
.middle-text:hover {
  transform: translateY(-6px)
}

/* Header styling for text */


h2 {
  font-size: 1.3rem;
  font-style: italic;
}

h3 {
  font-size: var(--font-size-xl);
  color: var(--color-white);
  padding: 5px;
  background-color: var(--color-primary);
  text-shadow: var(--textShadow-1); 
}

h4 {
  font-style: italic;
}

/* Animation Styling */
iframe {
  width: 100%; /* With of Animation  */
  max-width: 500px;
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
    font-size: var(--font-size-7xl);
  }
  h2 {
    font-size: var(--font-size-3xl);
  }
  h3 {
    font-size: var(--font-size-xl);
  }
}
</style>

<style>

/* Add a transition class */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* You can add other global styles here */
</style>
