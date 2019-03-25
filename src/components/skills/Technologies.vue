<template>
  <div class="container">
    <h5 class="title is-3">Our crafts</h5>
    <ul>
      <router-link
		      v-for="technology in technologies"
		      :key="technology.id"
		      tag="li"
		      :to="{name: $routeNames.TechnologyProfile, params: {technologyId: technology.id}}">
        <a href="">{{ technology.name }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {ITechnologyShort} from '@/common/interfaces/ITechnologyShort';

  interface ITechnologies {
    technologies: ITechnologyShort[];
  }

  export default Vue.extend({
    data(): ITechnologies {
      return {
        technologies: []
      };
    },
	  created(): void {
      this.technologies = [{
        id: 'fight',
        name: 'Fight'
      },
        {
          id: 'feast',
          name: 'Feast'
        },
        {
          id: 'fix',
          name: 'Fix'
        }];
    }
  });
</script>