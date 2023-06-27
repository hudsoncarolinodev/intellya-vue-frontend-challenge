<script setup lang="ts">
  import { onBeforeMount, ref, watch } from 'vue';
  import TableDetailUserComponent from './../../components/TableDetailUser/TableDetailUserComponent.vue';
  import { useStore } from 'vuex';
  import {type IuserProps } from '../../interface/user';
  import { useRoute } from 'vue-router'

  const store = useStore();
  const route = useRoute();
  const currentUser = ref<IuserProps>();
  const id = ref<string | string[]>();
  
  onBeforeMount(() => {
    id.value = route.params.id;
    fetchUser();
  });

  const fetchUser = () => {
    store.dispatch('fetchCurrentUser', id.value);
  };

  watch(() => store.getters.getUser, (user) => {
    currentUser.value = user;
  });

</script>

<template>
  <main>
    <section class="container">
      <header class="header-page">
        <h1  class="t1">Usuário n˚{{id}}</h1>
        <p>Visualize as informações do usuário solicitado abaixo</p>
      </header>

      <TableDetailUserComponent v-if="currentUser" :user="currentUser"/>
      <div class="validation-error-empyt" v-else>Não foi possível carregar as informações do usuário</div>
    </section>
  </main>
</template>