<template>

  <footer class="footer text-center text-white w-100">
    <!-- Copyright -->
    <div class="text-center  d-flex align-items-center justify-content-center">
      <div>
        <a class="text-white" href="https://www.franklin.edu/current-students/student-services/student-life/student-organizations-activities" target="_blank">
          <img src="../../assets/img/web_dev_logo_nobg.png" alt="Web Dev Logo"> 
        </a>
      </div>
    </div>
  </footer>

</template>

<script>
export default {
    name: "TheFooter"
}
</script>

<style>
.footer {
  margin-top: auto; /* This helps push the footer to the bottom */
  padding: 1rem 0;
  background-color: var(--color-grey);
}

img {
  width: 70px;
}
</style>