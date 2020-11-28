<template>
  <div class="home">
		<Quote :author="author" :text="text" :genre="genre" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Quote from '@/components/Quote.vue';
import { getRandomQuote } from '@/scripts/apiRequests';

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
	mounted () {
		this.loadRandomQuote();
	}
});
</script>

<style lang="scss" scoped>

</style>