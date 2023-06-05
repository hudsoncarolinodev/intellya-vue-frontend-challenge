<script  lang="ts">
  import SearchComponent from './../Search/SearchComponent.vue'
  import MenuComponent from './../Menu/MenuComponent.vue'
  import LogoComponent from './../Logo/LogoComponent.vue'
  
  export default {
    name:'HeaderComponent',
    components:{
      SearchComponent,
      MenuComponent,
      LogoComponent
    },
    props: {
        itens: Array<{
        name: string,
        path: string,
      }>
    },
    setup(props) {
      return {
        itensMenu: props.itens
      }
    }
}
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
        <MenuComponent :itens="itensMenu" />
      </div>
      <div class="header__search">
        <SearchComponent />
      </div>
    </div>
  </header>
</template>

