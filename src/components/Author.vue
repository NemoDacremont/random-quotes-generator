<template>
	<router-link :to="`/author/${author}`">
		<div class="quote-details">
			<div class="quote-details__details">
				<span class="quote-details__author">{{ author }}</span> 
				<span class="quote-details__genre">{{ genre }}</span>
			</div>
			<div class="quote-details__arrow">
				<span class="material-icons">
					arrow_right_alt
				</span>
			</div>
		</div>
	</router-link>
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

<style lang="scss" scoped>

a {
	text-decoration: none;
	width: 100%;
}

.quote-details {
	width: 100%;
	position: relative;
	display: flex;
	justify-content: space-between;
	transition: background-color .25s;
	padding: 50px 40px 50px 29px;

	&:hover {
		background-color: var(--gray-3);
		cursor: pointer;

		.quote-details__author {
			color: var(--reverse-gray-1);
		}

		.quote-details__arrow span {
			color: var(--reverse-gray-1);
		}
	}

	.quote-details__details {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
		text-align: left;
	}

	.quote-details__author {
		color: var(--gray-1);
		font-size: 24px;
		font-weight: 700;
		line-height: 28px;
	}

	.quote-details__author,
	.quote-details__arrow span {
		transition: color .25s;
	}

	.quote-details__genre {
		color: var(--gray-2);
		font-size: 14px;
		font-weight: 500;
		line-height: 16px;
	}

	.quote-details__arrow {
		display: flex;
		align-items: center;
		span {
			color: var(--background-color);
			display: inline-flex;
			align-items: center;
			width: 25px;
			height: 13px;
		}
	}
}

</style>