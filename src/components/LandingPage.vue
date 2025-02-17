<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="landing_wrapper col-11 col-lg-8 p-3">
        <div class="top_wrapper flex align-items-center">
          <div class="headers w-100 flex text-content">
            <h1>Franklin Tech Blog</h1>
            <h2>A student driven learning platform.</h2>
          </div>
          <div class="middle-text "> 
            <h3>Developed, designed, and ran by students</h3>
          </div>
        </div>
        <!-- Search Button Div-->
        <div class="container mt-4">
          <h4>Search for an author or topic</h4>
        <div class="row justify-content-center">
          <div class="col-10 ">
            <div class="search-container">
              <input type="text" class="form-control search-input" placeholder="Search...">
              <i class="fas fa-search search-icon"></i>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div class="col-11 col-lg-4 bg-warning text-white p-3">
        <h2>Sidebar</h2>
        <p>This section takes up 1/3 of the screen on larger devices and moves below on smaller screens.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style scoped>
.container {
  margin-top: 90px;
}
.landing_wrapper {
  margin-top: 30px;
  height: 55vh;
}

.top_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 30vh;
  padding: 20px;
  background-color: #f7f1dc;
  border-radius: 15px; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  padding-top: 2rem;
}

.text-content {
  text-align: left;
}

.middle-text {
  width: 100%;
  text-align: center; 
  margin-top: 3rem;     /* vertical space between headers*/
  padding: 10px; 
  font-size: large;  
  
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
  font-size: 1rem;
  color: rgb(255, 255, 255);
  padding: 5px;
  background-color: rgb(207, 198, 182);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); 

}

h4 {
  font-style: italic;
}


/* Search Bar Styling */
.search-container {
    position: relative;
}

.search-input {
    height: 50px;
    border-radius: 30px;
    padding-left: 35px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.search-icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #888;
}

/* Responsive Screen Code */
@media (min-width: 576px) {
 .top_wrapper {
  height: 35vh;
 }
}

@media (min-width: 768px) {
 
}

@media (min-width: 992px) {
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
