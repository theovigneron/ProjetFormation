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
        display: flex;
        flex-direction: column;
    }

    .preview{
        flex: 1;
        margin: 10px;
        border-radius: 20px;
        border: 2px blueviolet solid;
    }

    .bottom-content{
        display: flex;
        height: auto;
        flex: 2;
        margin-top: 20px;
    }

    .teaching-content, .progress-content{
        margin: 10px 10px 0;
        flex: 1;
        background-color: #222222;
        border-radius: 20px;
    }

</style>
