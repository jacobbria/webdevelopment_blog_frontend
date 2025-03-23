<template>
    <Navbar />
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <section class="col d-flex justify-content-center ">
                    <section class="inner_Wrapper d-flex flex-column align-items-center justify-content-center">
                        <!-- User Icon -->
                           <section class="user_Icon mb-2">
                            <img src="../assets/img/userIcon.png" class="user-image" alt="User Icon">
                           </section> 

                        <!-- Text Section -->
                           <section class="welcome_text mb-3">
                                <h1><span class="greeting">Hi, </span> User</h1>
                                <h3>Manage your account or report an issue</h3>
                           </section>
                        <!-- Management Buttons -->
                        <section class="management_btns d-flex flex-md-row flex-column justify-content-center align-items-center w-100 gap-2 mt-1 mb-1">
                                <section class="manage_btn blog col-md-4 col-12 text-center p-3">
                                    <h1>Blog Management</h1>
                                    <i class="fa-solid fa-file-lines fa-2x"></i>
                                </section>
                                
                                <section class="manage_btn account col-md-4 col-12 p-3">
                                    <h1>Account Management</h1>
                                    <i class="fa-solid fa-gear fa-2x"></i>
                                </section>
                           </section>
                        <!-- Outside Management Buttons -->
                           <section class="management_btns d-flex flex-md-row flex-column justify-content-center align-items-center w-100 gap-3 mt-0">
                                <section class="manage_btn bg-warning col-md-4 col-12 text-center p-3">
                                    <h1>Report Issue</h1>
                                    <i class="fa-solid fa-triangle-exclamation fa-2x"></i>
                                </section>  
                           </section>
                               
                    </section>
                </section>
            </div>
        </div>
    </div>
    <TheFooter />
</template>

<script setup>
import Navbar from '../components/Nav/Navbar.vue'
import TheFooter from '../components/Nav/TheFooter.vue'
</script>

<style scoped>
html, body {
    height: 100%; /* Ensure full height */
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}
h3 {
    font-size: 25px;
}
.wrapper {
    padding-top: 130px;
    background-color: rgb(70, 186, 176);
    width: 100%;
    min-height: 110vh;
    flex-direction: column;
    flex-grow: 1; /* Allows it to fill space */
    margin-bottom: 0; /* Ensure no extra space */
}
.inner_Wrapper {
    background-color: white;
    border-radius: 30px;
    width: 100%;
    min-height: 85vh;
    flex-grow: 1;
    box-shadow: 2px 6px 15px rgba(0, 0, 0, 0.7); 
    padding: 1rem;
    margin-bottom: 1rem;
}
.user_Icon {
    width: 100%;
    padding: 5px;
}
.userIcon {
    height: 200px;
    width: 200px;
    border-radius: 80%;
}
img {
    height: 100px;
    border-width: 2px;
    width: 100px;
    max-width: 400px;
}
.manage_btn {
    height: 200px;
    margin: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.5); 
    background-color: rgb(98, 155, 143);
    transition: transform 0.5s ease;
}
.blog {
    background-color: rgb(159, 255, 234);
}
.account {
    background-color: rgb(209, 209, 209);
}

.manage_btn:hover {
    transform: scale(1.08);
}
.fa-solid {
    size: 1rem;
}
.greeting {
    color: rgb(70, 186, 176);
}
</style>