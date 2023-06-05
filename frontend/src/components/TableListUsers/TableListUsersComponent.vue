<script setup lang="ts">

  import TableHeaderComponent from './components/TableHeader/TableHeaderComponent.vue';
  import TableBodyComponent from './components/TableBody/TableBodyComponent.vue';
  // interface IuserProps {
  //   name: Number,
  //   path: string,
  // }
  // defineProps<{
  //   itens:IuserProps[],
    
  // }>()
</script>
<style scoped>
@import url("./style.css");
</style>
<template>
   <section class="tableUser">
      <TableHeaderComponent/>
      <TableBodyComponent/>
   </section>
</template>

