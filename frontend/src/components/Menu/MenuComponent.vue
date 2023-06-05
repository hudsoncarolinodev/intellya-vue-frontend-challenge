<script  lang="ts">
  export default {
    name:'MenuComponent',
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
    <nav>
        <RouterLink 
            v-for="item in itensMenu" 
            :to="item.path" 
            :key="item.path">{{item.name}}</RouterLink>
    </nav>
</template>

