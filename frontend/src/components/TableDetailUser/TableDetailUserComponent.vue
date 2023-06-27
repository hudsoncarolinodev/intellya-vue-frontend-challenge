<script  lang="ts">
	import { type IuserProps } from "../../interface/user";

	import formatActive from './../../utils/formatActive'
	import formatDateTime from './../../utils/formatDateTime'
	import Dictionary from './../../utils/Dictionary'

	export default {
      name:'TableDetailUserComponent',
      components: {
       
      },
      props:{
            user: {
            type: Object as () => IuserProps,
            required: true,
		   },
      },
	   
	  data(){
		return {
			Dictionary:Dictionary,
			formatDateTime:formatDateTime,
			formatActive:formatActive,
		}
	  }
   }
	
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