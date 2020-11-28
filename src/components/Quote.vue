<template>
	<div class="quote">
		<blockquote class="quote__text">
			{{ text }}
		</blockquote>
		<cite>
			<span class="quote__author">{{ author }}</span> | 
			<span class="quote__genre">{{ genre }}</span>
		</cite>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Quote',
	props: {
		author: {
			type: String
		},
		genre: {
			type: String
		},
		text: {
			type: String
		}
	}
});
</script>

<style lang="scss">

</style>