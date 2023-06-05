<script setup lang="ts">
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
    <nav>
        <RouterLink 
            v-for="item in itens" 
            :to="item.path" 
            :key="item.path">{{item.name}}</RouterLink>
    </nav>
</template>

