<script setup lang="ts">
  import SearchComponent from './../Search/SearchComponent.vue'
  import MenuComponent from './../Menu/MenuComponent.vue'
  import LogoComponent from './../Logo/LogoComponent.vue'
  
  interface IuserProps {
    name: Number,
    path: string,
  }

  defineProps<{
    itens:IuserProps[],
    
  }>()

</script>
<style scoped>
  @import url("./style.css");
</style>
<template>
  <header>
    <div class="container">
      <div class="header__logo">
        <LogoComponent />
      </div>
      <div class="header__menu">
        <MenuComponent :itens="itens" />
      </div>
      <div class="header__search">
        <SearchComponent />
      </div>
    </div>
  </header>
</template>

