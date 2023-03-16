<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const menuItems = ["home", "school", "chart-line", "calendar-badge", "message", "cog-outline"]
const menuSelected = reactive({
  id: 0,
  setId(i: number) {
    this.id = i
  }
})

</script>

<template>
  <nav class="navBar">
    <RouterLink v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem"><mdicon @click="menuSelected.setId(index)" :class="index==menuSelected.id?'active':'inactive'" :name="menuItem"/> </RouterLink>
  </nav>
</template>

<style scoped>
  ul {
    list-style-type: none;
  }
  .navBar{
    background-color: #2F2F2F;
    width: fit-content;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    justify-content: space-around;
    border-radius: 10px;
    color: white;
    align-items: center;
    padding: 10px;
  }

  .navBar>*{
    margin: 5px;
  }
  .active{
    color: white;
  }

  .inactive{
    color: grey;
  }
  .inactive:hover{
    color: white;
  }

</style>
