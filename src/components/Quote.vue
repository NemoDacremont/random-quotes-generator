<template>
	<div class="quote">
		<blockquote class="quote__text">
			{{ text }}
		</blockquote>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Quote',
	props: {
		text: {
			type: String
		}
	}
});
</script>

<style lang="scss">

</style>