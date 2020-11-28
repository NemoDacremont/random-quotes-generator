<template>
	<div class="author">
		{{ author }}

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

import { Quote as QuoteInterface } from '@/scripts/apiRequests/randomQuote';
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
			console.log(response);
		}
	},
	created () {
		this.loadAuthorQuotes();
	}
});
</script>

<style lang="scss" scoped>

</style>