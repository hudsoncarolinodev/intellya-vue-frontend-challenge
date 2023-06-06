<script setup lang="ts">
	import  {type IuserProps} from '../../../../interface/user';
	defineProps({
		user: {
			type: Object as () => IuserProps,
			required: true,
		},
	});
</script>

<style scoped>
	@import url("./style.css");
</style>

<template>
	<li class="listUser__item">
		<div class="listUser__column">
			<h3>{{ user.id }}</h3>
		</div>
		<div class="listUser__column">
			<h3>{{ user.name }}</h3>
		</div>
		<div class="listUser__column">
			<h3>{{ user.email }}</h3>
		</div>
		<div class="listUser__column">
			<h3>{{ user.role }}</h3>
		</div>
		<div class="listUser__column">
			<h3>
				<RouterLink :to="`/user-details/${user.id}`">Visualizar</RouterLink>
			</h3>
		</div>
	</li>
</template>