<script setup lang="ts">
   import TableListUsersComponent from './../../components/TableListUsers/TableListUsersComponent.vue'
</script>

<template>
  <main>
    <section class="container"> 
       <header class="header-page">
        <h1 class="t1">Listagem de Usuário</h1>
        <p>Visualize os usuários que acessam sua plataforma.</p>
       </header>

       <TableListUsersComponent/>
    </section>
  </main>
</template>
