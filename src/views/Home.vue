<template>
  <div class="home">
		<Quote />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Quote from '@/components/Quote.vue';

export default defineComponent({
	name: 'Home',
	components: {
		Quote
	}
});
</script>
