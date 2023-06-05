<script setup lang="ts">
	import { computed } from 'vue';
	import TableHeaderComponent from './components/TableHeader/TableHeaderComponent.vue';
	import TableBodyComponent from './components/TableBody/TableBodyComponent.vue';
	import { useStore } from 'vuex';

	const store = useStore();
	const usersComputed = computed(() => store.getters.getUsers);
</script>

<style scoped>
	@import url("./style.css");
</style>

<template>
	<section class="tableUser">
		<TableHeaderComponent />
		<TableBodyComponent :usersList="usersComputed" />
	</section>
</template>