<template>
    <div>
        <h1> Test Page for Components and Style </h1>

        <h2> Button </h2>
        <div class="d-flex flex-column justify-content-center align-items-center"> 
        <h2> Colors </h2>  
            <div class="box prim_color">
                <p>Primary color</p>
            </div>
            <div class="box sec_color">
                <p>secondary color</p>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
}
.prim_color {
  background-color: var(--color-primary);
}
.sec_color {
    background-color: var(--color-secondary);
}
</style>