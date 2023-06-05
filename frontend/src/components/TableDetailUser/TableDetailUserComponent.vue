<script setup lang="ts">
	import {watch,ref } from 'vue';
	import { type IuserProps } from "../../interface/user";
	import { useStore } from 'vuex';
	import formatActive from './../../utils/formatActive'
	import formatDateTime from './../../utils/formatDateTime'
	import Dictionary from './../../utils/Dictionary'

	const user = ref<IuserProps>();
	const store = useStore();

	watch(
	() => store.getters.getUser,
		(newUser) => {
			user.value = newUser;
		},
		{ immediate: true }
	);
	
</script>

<style scoped>
@import url("./style.css");
</style>

<template>
	<section class="tableUser">
	<ul class="listUser">
		<div v-for="(value, key) in user" :key="key">
			<li class="listUser__item"  v-if="key !== 'id'">
				<div class="listUser__column">
					<h2>{{Dictionary[key]}}</h2>
				</div>
				<div class="listUser__column">
					<h3 v-if="key === 'created_at'">{{ formatDateTime(value) }}</h3>
					<h3 v-else-if="key === 'active'">{{ formatActive(value) }}</h3>
					<h3 v-else>{{ value }}</h3>
				</div>
			</li>
		</div>
	</ul>
	</section>
</template>