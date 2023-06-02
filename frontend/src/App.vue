<script  lang="ts">


</script>

<template>
  
  <HeaderComponent 
    :itens="[
    { name: 'Usuários', path: '/' }
    ]"
   
  />

</template>

<script lang="ts">
import HeaderComponent from './components/Header/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>
