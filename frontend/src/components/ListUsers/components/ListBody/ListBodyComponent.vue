<script setup lang="ts">
	import { IuserProps } from './../../../../interface/user';
	import ListRowComponent from './ListRowComponent.vue';

	defineProps({
		usersList: {
			type: Array as () => IuserProps[],
			required: true,
		},
	});

</script>

<style scoped>
	@import url("./style.css");
</style>

<template>
	<div class="tableUser__body">
		<ul class="listUser" v-if="usersList.length">
			<ListRowComponent v-for="user in usersList" :key="user.id.toString()" :user="user" />
		</ul>

		<div class="validation-error-empyt" v-else>Nenhum usuário encontrado.</div>
	</div>
</template>