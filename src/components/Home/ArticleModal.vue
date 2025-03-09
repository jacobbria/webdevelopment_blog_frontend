<template>
  <div class="modal">
    <div class="modal-content">
      <!-- Close Button -->
      <div class="close-button">
        <span class="close" @click="emit('toggleArticleModal')">&times;</span>
      </div>

      <!-- Article Header -->
      <header class="article-header ">
        <h1 class="article-title">{{ post?.fields?.title }}</h1>
        <div class="article-meta">
          <span class="article-author">By {{ post?.fields?.name }}</span>
          <span class="article-date">{{ formatDate(post?.fields?.datePosted) }}</span>
        </div>
      </header>

      <!-- Article Image -->
      <div class="article-image-container">
        <img src="../assets/img/blog_image.jpg" alt="Article Image" class="article-image">
      </div>

      <!-- Article Content -->
      <div class="article-body ">
        <div class="article-content">
          {{ post?.fields?.blogContent }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggleArticleModal'])
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

// Format date to be more readable
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  margin: 5% auto;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  border-radius: 8px;
}

img {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
}

/* Close Button Styles */
.close-button {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.close {
  color: #ff0000;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease;
}

.close:hover {
  color: #000;
}

/* Article Header Styles */
.article-header {
  margin-bottom: 2rem;
  text-align: center;
}

.article-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.2;
}

.article-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #666;
  font-size: 1.1rem;
}

/* Image Styles */
.article-image-container {
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.article-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border: none;
}

/* Article Content Styles */
.article-body {
  margin-top: 2rem;
}

.article-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  white-space: pre-wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .modal-content {
    margin: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  .article-title {
    font-size: 2rem;
  }

  .article-meta {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
}
</style>