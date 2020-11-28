<template>
  <div class="home">
		<Quote :author="author" :text="text" :genre="genre" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Quote from '@/components/Quote.vue';
import { getRandomQuote } from '@/scripts/apiRequests';
import mitt from '@/mitt';

export default defineComponent({
	name: 'Home',
	components: {
		Quote
	},
	data () {
		return {
			author: 'loading',
			text: 'loading',
			genre: 'loading'
		}
	},
	methods: {
		async loadRandomQuote () {
			await getRandomQuote().then((response) => {
				const { quoteAuthor, quoteText, quoteGenre } = response.quote;

				this.$data.author = quoteAuthor;
				this.$data.text = quoteText;
				this.$data.genre = quoteGenre;

				console.log('loaded');
			})

		}
	},
	created () {
		this.loadRandomQuote();

		mitt.on('loadRandomQuote', () => {
			console.log('loadRandomQuote');
			this.loadRandomQuote();
		});
	},
	/*beforeUnmount () {
		mitt.off('loadRandomQuote', this.loadRandomQuote);
	}*/
});
</script>

<style lang="scss" scoped>

</style>