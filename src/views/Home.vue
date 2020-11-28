<template>
  <div class="home">
		<Quote :text="text" />
		<Author :author="author" :genre="genre" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Quote from '@/components/Quote.vue';
import Author from '@/components/Author.vue';
import { getRandomQuote } from '@/scripts/apiRequests';
import mitt from '@/mitt';

export default defineComponent({
	name: 'Home',
	components: {
		Quote,
		Author
	},
	data () {
		return {
			author: 'loading...',
			text: 'loading...',
			genre: 'loading...'
		}
	},
	methods: {
		async loadRandomQuote () {
			await getRandomQuote().then((response) => {
				const { quoteAuthor, quoteText, quoteGenre } = response.quote;

				this.$data.author = quoteAuthor;
				this.$data.text = quoteText;
				this.$data.genre = quoteGenre;
			})

		}
	},
	created () {
		this.loadRandomQuote();

		mitt.on('loadRandomQuote', this.loadRandomQuote);
	},
	beforeUnmount () {
		mitt.off('loadRandomQuote', this.loadRandomQuote);
	}
});
</script>

<style lang="scss" scoped>

.home {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 110px;
	width: 100%;

	padding: 196px 0 0 0;
}

</style>