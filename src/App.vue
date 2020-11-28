<template>
	<header>
		<nav id="nav">
			<router-link to="/" @click.prevent="random">Random</router-link>
		</nav>
	</header>
  <router-view/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
