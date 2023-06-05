<script setup lang="ts">
	import { computed, onBeforeMount, ref, watch } from 'vue';
	import { useStore } from 'vuex';
	import {type IuserProps } from '../../interface/user';
	import TableListUsersComponent from './../../components/TableListUsers/TableListUsersComponent.vue';

	const store = useStore();
	const usersList = ref<IuserProps[]>([]);

	onBeforeMount(() => {
		store.dispatch('fetchUsers');
	});

	watch(() => store.getters.getUsers, (newUsers) => {
		const users = computed(() => newUsers);
		usersList.value = users.value;
	});
</script>

<template>
	<main>
		<section class="container">
			<header class="header-page">
				<h1 class="t1">Listagem de Usuário</h1>
				<p>Visualize os usuários que acessam sua plataforma.</p>
			</header>

			<TableListUsersComponent :usersList="usersList" />
		</section>
	</main>
</template>