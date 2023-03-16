<script setup lang="ts">

</script>

<template>
    <div class="container-homePage">
        <div class="preview">

        </div>
        <div class="bottom-content">
            <div class="teaching-content">

            </div>
            <div class="progress-content">

            </div>
        </div>
    </div>
</template>

<style scoped>
    .container-homePage{
        height: 85vh;
        width: 100%;
        padding: 20px;
        background-color: aqua;
        display: flex;
        flex-direction: column;
    }

    .preview{
        flex: 1;
        padding: 10px;
        background-color: blueviolet;
    }

    .bottom-content{
        display: flex;
        background-color: brown;
        height: auto;
        flex: 2;
        margin-top: 20px;
    }

    .teaching-content{
        flex: 1;
        background-color: blue;
    }

    .progress-content{
        flex: 1;
        background-color: aquamarine;
    }


   
</style>
