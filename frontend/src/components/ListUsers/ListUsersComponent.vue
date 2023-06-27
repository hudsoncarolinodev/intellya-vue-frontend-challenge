
<script lang="ts">

   import ListHeaderComponent from './components/ListHeader/ListHeaderComponent.vue';
   import ListBodyComponent from './components/ListBody/ListBodyComponent.vue';
   import {IuserProps} from './../../interface/user'
   export default {
      name:'ListUsersComponent',
      components: {
         ListHeaderComponent,
         ListBodyComponent,
      },
      props:{
            usersList: {
            type: Array as () => IuserProps[],
            required: true,
		   },
      },
   }
</script>

<style scoped>
@import url("./style.css");
</style>
<template>
   <section class="tableUser">
      <ListHeaderComponent/>
      <ListBodyComponent :usersList="usersList"/>
   </section>
</template>

