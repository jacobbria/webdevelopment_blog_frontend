<template>
    <Navbar />
    <div class="content_wrapper d-flex align-items-center justify-content-center">
        <div class="loginSection d-flex flex-column justify-content-center align-items-center">
            <img src="../assets/img/userIcon.png">
            <h1 id="greetingSection"><span id="nameTag">Hello, </span> {{ name }}</h1>

            <!-- Buttons -->
             <div class="d-flex flex-column gap-3 justify-content-center align-items-center">
                <div class="d-flex flex-column justify-content-center align-items-center button"> <img src="../assets/img/accountSettingIcon.png"> Account Settings </div>
                <div class="d-flex flex-column justify-content-center align-items-center button"> <img src="../assets/img/blogSettingsIcon.png"> Blog Management </div>
                <div class="d-flex flex-column justify-content-center align-items-center button" @click="signOutClicked">  <img src="../assets/img/signoutIcon.png">Sign Out </div>
             </div>
        </div>
    </div>
    <TheFooter />
</template>

<script setup>
import Navbar from '../components/Nav/Navbar.vue';
import TheFooter from '../components/Nav/TheFooter.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref(" John ");
const router = useRouter();

const signOutClicked = () => {
    console.log("Signout Clicked");
    router.push("/")
}

</script>

<style scoped>
body {
    background-color: var(--color-primary);
}

.content_wrapper {
    min-height: 100vh;
    padding: 10vh;
}
.loginSection {
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.9);

    width: 70%;
    min-height: 600px;
    border-radius: 10px;
}
button {
    background-color: var(--color-primary);
    color: white;
    width: 90%;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.9);
    transition: all 0.3s ease;
}

button:hover {
    cursor: pointer;
    background-color: rgb(254, 195, 83);
    transform: translateX(10px);
}

#greetingSection {
    margin-top: 1vh;
}
#nameTag {
    color: var(--color-primary);
}

</style>