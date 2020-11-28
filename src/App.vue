<template>
	<header>
		<nav id="nav">
			<router-link to="/" @click.prevent="random">
				Random
				<span class="material-icons">autorenew</span>
			</router-link>
		</nav>
	</header>

	<main>
		<router-view/>
	</main>

	<footer>
		<p>Nemo D'acremont | <a href="https://github.com/odasta">https://github.com/odasta</a> </p>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import mitt from '@/mitt';

export default defineComponent({
	name: 'App',
	methods: {
		random () {
			if (this.$route.name !== 'Home') this.$router.push('/');
			else {
				mitt.emit('loadRandomQuote');
			}
		}
	}
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway:wght@500;700&display=swap');

:root {
	--font-color: #000;
	--background-color: #FFF;

	--gray-1: #4F4F4F;
	--reverse-gray-1: #F2F2F2;
	--gray-2: #828282;

	--gray-3: #333333;
	--gray-4: #A9A9A9;

	--orange: #F7DF94;
}

*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	overflow-x: hidden;
}

#app {
  font-family: Raleway, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color);
	font-weight: 500;

	width: 100vw;
	min-height: 100vh;
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
}

header {
	width: 100%;

	#nav {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 30px 96px;

		a {
			display: inline-flex;
			align-items: center;
			gap: 11px;

			text-decoration: none;
			font-size: 18px;
			line-height: 22px;
			color: var(--gray-3);
		}
	}
}

main {
	flex-grow: auto;
	width: 674px;

	display: flex;
	flex-direction: column;
	align-items: center;

	// Padding-bottom for footer if content height > 100vh
	padding-bottom: 55px;
}

footer {
	position: absolute;
	bottom: 0;
	width: 100vw;
	padding: 19px;

	text-align: center;
	font-weight: 600;
	font-family: montserrat, sans-serif;
	color: var(--gray-4);
	font-size: 14px;
	line-height: 17px;

	a {
		color: var(--gray-4);
	}
}
</style>
