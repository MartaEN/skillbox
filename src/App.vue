<template>
  <div id="app">
		<header class="header">
      <div class="container">
        <div class="inner">
          <div class="logo" />
          <nav class="main-nav">
            <router-link
		            exact
		            :to="{name: $routeNames.Home}">Home</router-link>
	          <router-link
			          exact
			          :to="{name: $routeNames.Skills}">Skills</router-link>
	          <router-link
				        :to="{name: $routeNames.MySkillGoals}">My Profile</router-link>
          </nav>
        </div>
      </div>
		</header>
	  <main class="content"><router-view /></main>
	  <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import StarRating from 'vue-star-rating'
  import Footer from '@/components/common/Footer';
  import {AuthService} from './common/services/AuthService';

  Vue.component('star-rating', StarRating);

  export default Vue.extend({
    components: {
      Footer
    },
    data() {
      return {
        loggedIn: false
      };
    },
    methods: {
      toggleLogin() {
        if (this.loggedIn) {
          this.loggedIn = false;
          AuthService.logout();
        } else {
          this.loggedIn = true;
          AuthService.login();
        }
      }
    }
  });
</script>

<style scoped>
	#app {
		min-height  : 100vh;
		display : flex;
		flex-direction: column;
	}
	
	main {
		flex: 1;
	}
</style>
