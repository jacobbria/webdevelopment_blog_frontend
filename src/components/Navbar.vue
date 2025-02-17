<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom-navbar">
    <div class="container-fluid justify-content-around">
      <a class="nav-link icon-container" href="#">
        <span class="fa-stack fa-lg icon">
          <i class="fa fa-circle fa-stack-2x text-white"></i>
          <i class="fa fa-home fa-stack-1x fa-inverse text-dark"></i>
        </span>
        <span class="overlay-text text-white bg-dark">Home</span>
      </a>
      <a class="nav-link icon-container" href="#">
        <span class="fa-stack fa-lg icon">
          <i class="fa fa-circle fa-stack-2x text-white"></i>
          <i class="fa fa-book fa-stack-1x fa-inverse text-dark"></i>
        </span>
        <span class="overlay-text text-white bg-dark">About</span>
      </a>
      <a class="nav-link icon-container" href="#">
        <span class="fa-stack fa-lg icon">
          <i class="fa fa-circle fa-stack-2x text-white"></i>
          <i class="fa fa-user fa-stack-1x fa-inverse text-dark"></i>
        </span>
        <span class="overlay-text text-white bg-dark">Login</span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.fa-circle{
  margin-top: 1px;
}
.custom-navbar {
  height: 60px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.icon-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 80px;
  height: 60px;
}

.overlay-text {
  position: absolute;
  width: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out; 
  opacity: 0;
  
}

.icon-container:hover .overlay-text {
  transform: translateY(0); 
  opacity: 1;
}
</style>
