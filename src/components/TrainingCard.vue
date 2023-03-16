
<script setup lang="ts">
    export interface Props {
        Id?: string
        Nom?: string
        Type?: string
        Description?: string
        Photo?: string
    }
    const props = defineProps<Props>()
    console.log(props)
</script>

<template>
    <div class="trainingCard">
        <img :src="props.Photo"  class="trainingCard-photo">
        <div class="trainingCard-info">
            <div class="trainingCard-info_title">{{ props.Nom }}</div>
            <div class="trainingCard-info_description">{{ props.Description }}</div>
            <div class="trainingCard-info_type">{{ props.Type }}</div>
        </div>
    </div>
</template>
<style scoped>

    .trainingCard{
        background-color: #2F2F2F;
        display: flex;
        flex-direction: row;
        border-radius: 20px;
        margin: 10px 0px;
    }

    .trainingCard-photo{
        margin: 10px;
        border-radius: 20px;
        flex: 1;
        background-color: lightgray;
        border: solid 2px black;
    }

    .trainingCard-info{
        height: 100%;
        flex: 7;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .trainingCard-info_title{
        color: white;
        font-size: medium;
    }

    .trainingCard-info_description{
        color: lightgray;
        font-size:small;
    }

    .trainingCard-info_type{
        color: greenyellow;
        font-size: medium;
    }

</style>

