<template>
    <div class="container my-3" v-if="post">
      <div class="row d-flex justify-content-center align-items-center mx-3">
        <div class="top_wrapper col-12 col-lg-5">
          <img src="../assets/img/blog_image.jpg" alt="Blog Image">
          <div class="user_Icon">
            <i class="fa-solid fa-circle"></i>
            <img src="../assets/img/userIcon.png" class="user-image" alt="User Icon">
            <h1>{{ truncatedName }}</h1>
          </div>
        </div>
        <div class="col-12 col-lg-7 d-flex flex-column justify-content-center align-items-center">
          <h2>{{ post.fields.title }}</h2>
          <p>{{ truncatedContent }}</p>
          <button class="expand-btn" role="button" @click="emit('toggleArticleModal')">Read More</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  const emit = defineEmits(['toggleArticleModal'])
  
  // Define the props being passed from the parent component
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  });

  // Shorten Names for more readable cards
  const truncatedName = computed(() => {
  const name = props.post.fields.name.trim();
  const parts = name.split(" ");
  
  if (parts.length > 1) {
    return `${parts[0]} ${parts[1][0]}.`; 
  }
  
  return name; 
});

  // Shorten blog content for a more readable front page card
  const truncatedContent = computed(() => {
    const content = props.post.fields.blogContent;
    const maxLength = 300; // You can adjust this as needed
    return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
  });
  </script>
  
  

<style scoped>

.row {
    transition: transform 0.5s ease, box-shadow 0.3s ease;
    background-color: rgb(228, 228, 228);
    padding: 5px;
    padding-top: 7px;
    border-radius: 20px;
}
.row:hover {
   
    box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
    transform: scale(1.02);
}

.expand-btn {
    background-color: rgb(40, 40, 40);
}
.top_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
img {
    border: solid;
    border-width: 2px;
    width: 100%;
    max-width: 400px;
    border-radius: 20px;

}
/* User Icon under Picture */
.user_Icon {
    background-color: rgb(48, 48, 48);
    margin-top: 5px;
    margin-bottom: 17px;
    width: 100%;
    max-width: 400px;
    height: 53px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0px;
    position: relative;
    transition: all 0.3s ease; 
    box-shadow: 0 5px 10px rgba(0,0,0,0.6);
    cursor: pointer;
}
.user_Icon:hover {
    box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
    transform: scale(1.05);
}
.user_Icon:active {
    opacity: .7;
}
.fa-solid {
    font-size: 80px; 
    color: rgb(67, 67, 67);
    position: absolute;
}
.user-image {
    width: 70px; 
    height: 70px;
    border-radius: 50%;
    position: absolute;
    left: 5px; 
    top: 50%;
    transform: translateY(-50%);
    object-fit: cover;
}
/* Read More btn */
.see_more:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
      transform: scale(1.05);
}
.see_more:active {
    opacity: .7;
}
h1 {
    margin-top: 9px;
    margin-left: 85px;
    font-size: 3.6rem;
    font-weight: 500;
    color: white;
}
h2 {
    font-style: italic;
    text-decoration: underline;
}
p {
    font-style: normal;
}

@media  (min-width: 300px) {
    h1 {
        font-size: 1.8rem;
    }
}

@media  (min-width: 500px) {
    h1 {
        font-size: 2.1rem;
    }
}

@media  (min-width: 1300px) {
    h1 {
        font-size: 2.9rem;
    }
}


</style>