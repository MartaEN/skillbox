<template>
  <div
		  v-if="technology"
		  class="container">
    <h1 class="title is-1">Craft: {{ technology.name }}</h1>
	  <div>Staff count: {{technology.stats.staffCount}}</div>
	  <div>Used in projects: {{technology.stats.projectCount}}</div>
    <div class="tabs">
      <ul class="technology-menu">
        <router-link
		        tag="li"
		        exact
		        :to="{name: $routeNames.TechnologyProfile}">
          <a href="">Profile</a>
        </router-link>
        <router-link
		        tag="li"
		        :to="{name: $routeNames.TechnologySkillTree}">
          <a href="">Skill tree</a>
        </router-link>
      </ul>
    </div>
    <div class="technology-content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {ITechnology} from '@/common/interfaces/ITechnology';

  interface ITechnologyData {
    technology: ITechnology | null;
  }

  export default Vue.extend({
    props: {
      technologyId: String
    },
    data(): ITechnologyData {
      return {
        technology: null
      };
    },
    watch: {
      $route() {
        this.getTechnology();
      }
    },
    created() {
      this.getTechnology();
    },
    methods: {
      getTechnology() {
        this.technology = {
          id: '1',
          name: 'Fight',
          description: 'Vikings are born warriors.',
          stats: {
            staffCount: 27,
            projectCount: 4
          }
        };
      }
    }
  });
</script>