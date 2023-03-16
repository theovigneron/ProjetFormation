<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import HeaderPage from './components/HeaderPage.vue'
</script>

<template>
  <div class="container">
    <NavBar />
    <div class="contentPage">
      <HeaderPage/>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  .container{
    height: 100vh;
    width: 100vw;
    background-color: #1A1A1A;
    display: flex;
  }

  .contentPage{
    height: 100%;
    width: 100%;
  }
</style>
