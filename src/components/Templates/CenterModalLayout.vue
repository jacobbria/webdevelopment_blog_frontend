<template>
  <div class="body-wrapper">
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup>
// No logic needed for base layout
</script>

<style scoped>
.body-wrapper {
  padding-top: 85px;
  min-height: 100vh;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
}
.content-wrapper {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: var(--color-white);
  width: 60%;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.571), 0 1.5px 4px rgba(247, 1, 1, 0.08);
}
</style>