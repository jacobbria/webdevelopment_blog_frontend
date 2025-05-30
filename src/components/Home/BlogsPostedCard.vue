<template>
    <div class="container my-5">
      <div class="row ">
        <div class="col-12 col-md-6 col-lg-4 p-3 d-flex justify-content-center align-items-center">
          <div class="total ">
            <h1> {{ animatedPosts }} </h1>
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
                <h1> {{ animatedWords }}+</h1>
                <h2>Words Written</h2>
          </div>
        </div>
      </div>
    </div>
</template>
  

<script setup>
import { ref, watch, onMounted } from 'vue';

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

// Animated counters
const animatedPosts = ref(0);
const animatedWords = ref(0);

function animateValue(refValue, target, duration = 1200) {
  const start = 0;
  const range = target - start;
  const minTimer = 20;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    refValue.value = Math.floor(progress * range + start);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      refValue.value = target;
    }
  }

  requestAnimationFrame(step);
}

onMounted(() => {
  animateValue(animatedPosts, props.allPosts, 1200);
  animateValue(animatedWords, props.allWords, 1200);
});

// If props change, re-animate
watch(() => props.allPosts, (newVal) => {
  animateValue(animatedPosts, newVal, 1200);
});
watch(() => props.allWords, (newVal) => {
  animateValue(animatedWords, newVal, 1200);
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