<script setup lang="ts">

</script>

<template>
    <div class="headerPage">
        <p>Title Factice en attendant le Props driling</p>
        <div class="header-leftBox">
            <input type="text">
            <mdicon class="icon" name="bell-outline"/>
            <mdicon class="icon" name="account"/>
        </div>
    </div>
</template>

<style scoped>
    .headerPage{
        display: flex;
        padding: 20px 0px;
        justify-content: space-between;
    }

    .icon{
        background: #2C2C2C;
        border-radius: 20px;
        padding: 5px;
        display: flex;
    }

    .header-leftBox{
        width: 40%;
        display: flex;
        justify-content: space-around;
    }

    input{
        width: 50%;
        border-radius: 10px;
        border: none;
        background: #2C2C2C;
    }

    p{
        color: white;
    }
</style>
