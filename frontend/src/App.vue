<template>
  <div>
    <HeaderComponent 
      :itens="[
      { name: 'Usuários', path: '/' }
      ]"
    
    />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import HeaderComponent from './components/Header/HeaderComponent.vue'
  export default{
    name:'App',
    components:{
      HeaderComponent,
    },
    setup(){

    }
  }
</script>
