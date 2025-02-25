<template>
    <div class="container my-3">
        <div class="row d-flex justify-content-center
         align-items-center mx-3">
            <div class="row">
                <div class="top_wrapper col-12 col-lg-5">
                   <img src="../assets/img/blog_image.jpg" >
                   <div class="user_Icon">
                        <i class="fa-solid fa-circle"></i>
                        <img src="../assets/img/userIcon.png" class="user-image">
                        <h1> John Smith</h1>
                    </div> 
                </div>
                <div class="col-12 col-lg-7 d-flex flex-column 
                    justify-content-center align-items-center">
                    <h2>Climbing the Technology Mountain</h2>

                    <p> Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only...</p>
                    
                    
                    <button class="expand-btn" role="button">Read More</button>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

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
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}
.top_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
img {
    border: solid;
    border-width: 2px;
    width: 400px;
    border-radius: 20px;
}
/* User Icon under Picture */
.user_Icon {
    background-color: rgb(48, 48, 48);
    margin-top: 5px;
    margin-bottom: 17px;
    width: 400px;
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
    transform: translateY(-6px);
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

</style>