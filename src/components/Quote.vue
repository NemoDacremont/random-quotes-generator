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

.quote {
	position: relative;
	width: 615px;

	&::before {
		content: '';

		display: block;
		position: absolute;

		left: -100px;
		top: 0;

		width: 8px;
		height: 100%;

		background-color: var(--orange);
	}

	.quote__text {
		font-size: 36px;
		font-weight: 500;
		line-height: 43px;
		text-align: left;

		&::before {
			content: '“';
		}

		&::after {
			content: '”';
		}
	}
}

</style>