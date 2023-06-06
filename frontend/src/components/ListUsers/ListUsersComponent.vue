
<script lang="ts">
   import { computed } from 'vue';
   import ListHeaderComponent from './components/ListHeader/ListHeaderComponent.vue';
   import ListBodyComponent from './components/ListBody/ListBodyComponent.vue';
   import { useStore} from 'vuex';
   
   export default {
      name:'ListUsersComponent',
      components: {
         ListHeaderComponent,
         ListBodyComponent,
      },

      setup() {
         const store = useStore();
         const usersComputed = computed(() => store.getters.getUsers);

         return {
            usersComputed,
         };
      },
   }
</script>
<style scoped>
@import url("./style.css");
</style>
<template>
   <section class="tableUser">
      <ListHeaderComponent/>
      <ListBodyComponent :usersList="usersComputed"/>
   </section>
</template>

