<template>
	<div class="quote-details">
		<span class="quote-details__author">{{ author }}</span> | 
		<span class="quote-details__genre">{{ genre }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Author',
	props: {
		author: {
			type: String,
		},
		genre: {
			type: String,
		}
	}
});
</script>

<style lang="scss">

</style>