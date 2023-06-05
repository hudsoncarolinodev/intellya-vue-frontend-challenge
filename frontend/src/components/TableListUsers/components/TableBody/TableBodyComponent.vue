<script setup lang="ts">
	import { defineProps } from 'vue';
	import {type IuserProps } from './../../../../interface/user';
	import TableRowComponent from './TableRowComponent.vue';

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
			<TableRowComponent v-for="user in usersList" :key="user.id.toString()" :user="user" />
		</ul>

		<div class="validation-error-empyt" v-else>Nenhum usuário encontrado.</div>
	</div>
</template>