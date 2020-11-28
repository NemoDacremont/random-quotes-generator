<template>
	<div class="author">
		<h2>{{ author }}</h2>

		<ul>
			<li v-for="(quote, index) in quotes" :key="index">
				<Quote :text="quote.quoteText" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAuthorQuotes } from '@/scripts/apiRequests';

import { Quote as QuoteInterface } from '@/scripts/apiRequests';
import Quote from '@/components/Quote.vue';

interface Data {
	author: string;
	quotes: QuoteInterface[];
}

export default defineComponent({
	name: 'Author',
	data (): Data {
		return {
			author: (Array.isArray(this.$route.params.id))
				? this.$route.params.id.join(' ')
				:this.$route.params.id,
			quotes: []
		}
	},
	components: {
		Quote
	},
	methods: {
		async loadAuthorQuotes () {
			const { author } = this.$data;
			const response = await getAuthorQuotes(author);

			this.$data.quotes = response.quotes;
		}
	},
	created () {
		this.loadAuthorQuotes();
	}
});
</script>

<style lang="scss" scoped>
.author {
	padding: 16px 0 232px;
	width: 100%;

	h2 {
		font-size: 36px;
		font-style: normal;
		font-weight: 700;
		line-height: 42px;
		text-align: left;
	}

	&,
	ul {
		display: flex;
		flex-direction: column;
		gap: 140px;
	}

	ul {
		list-style: none;
	}
}
</style>