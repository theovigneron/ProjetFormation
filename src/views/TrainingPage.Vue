<script lang="ts">
    import TrainingCard from "../components/TrainingCard.vue"
    import PulseLoader from "../components/PulseLoader.vue"
    export interface Training {
        Id?: string
        Nom?: string
        Type?: string
        Description?: string
        Photo?: string
    }
    export default {
        name: "get-request",
        data() {
            return {
                listItems: [],
                loaded: false,
                test: 1,
            };
        },
        async created() {
            // Simple GET request using fetch
            const response = await fetch("http://localhost:8080/test");
            const data = await response.json();
            this.listItems = data;
            this.loaded = true
            this.test = 2
        }
    };
</script>

<template>
    <div class="containerCards" v-if="loaded">
        <TrainingCard  v-for="(menuItem, index) in listItems" :key="index" :Nom="menuItem.Nom" :Description="menuItem.Description" :Type="menuItem.Type"/>
    </div>
    <div class="Loader" v-else>
        <PulseLoader />
    </div>
</template>
<style scoped>
    .containerCards{
        overflow: hidden;
        height: 100%;
        width: 90vw;
        margin: auto;
    }

    .Loader{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>

