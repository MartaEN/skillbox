<template>
  <div class="container">
	  <h1 class="title is-1">Welcome to V-Tribe</h1>
			<div class="columns is-variable is-8">
				<div class="column is-three-quarters">
					<News />
				</div>
				<aside class="column is-one-quarter">
					<Technologies />
					<HallOfFame />
				</aside>
			</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HallOfFame from '@/components/home/HallOfFame.vue';
  import News from '@/components/home/News.vue';
  import Technologies from '@/components/skills/Technologies.vue';

  export default Vue.extend({
    components: {
      HallOfFame,
      News,
      Technologies
    }
  });

</script>

<style lang="scss" scoped>

	aside > div:not(:first-child) {
		margin-top: 36px;
	}
	
</style>