<script  lang="ts">
	import { computed, onBeforeMount, ref, watch } from 'vue';
	import { useStore } from 'vuex';
	import TableListUsersComponent from './../../components/TableListUsers/TableListUsersComponent.vue';

	export default {
		name:'UsersList',
		components: {
			TableListUsersComponent,
      	},
		setup(){
			const store = useStore();
			const usersComputed = computed(() => store.getters.getUsers);

			onBeforeMount(() => {
				store.dispatch('fetchUsers');
			});

			return{
				usersComputed
			}
		}
	}
</script>

<template>
	<main>
		<section class="container">
			<header class="header-page">
				<h1 class="t1">Listagem de Usuário</h1>
				<p>Visualize os usuários que acessam sua plataforma.</p>
			</header>

			<TableListUsersComponent :usersList="usersComputed" />
		</section>
	</main>
</template>