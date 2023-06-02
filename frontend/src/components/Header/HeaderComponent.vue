<script setup lang="ts">
  import SearchComponent from './../Search/SearchComponent.vue'
  
  interface IuserProps {
    name: Number,
    path: string,
  }

  defineProps<{
    itens:IuserProps[],
    
  }>()

</script>
<style>
  @import url("./style.css");
</style>
<template>
  <header>
    <div class="header__logo">
      <img src="./../../assets/logo.png" alt="">
    </div>
    <div class="header__menu">
        <nav>
            <RouterLink 
              v-for="item in itens" 
              :to="item.path" 
              :key="item.path">{{item.name}}</RouterLink>
        </nav>
    </div>
    <div class="header__search">
      <SearchComponent />
    </div>
  </header>
</template>

