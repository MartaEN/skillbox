<template>
  <div v-if="user" class="container">
    <p class="title is-3">Hey, {{ user.firstName }}! What are you up to today?</p>
    <div class="is-flex">
	    <img class="avatar" :src="require(`@/assets/user_male.png`)" :alt="user.firstName">
	    <div class="user-info">
		    <p class="title is-5">{{user.firstName}} {{user.lastName}} </p>
		    <p class="subtitle is-7 is-marginless">
			    <img class="bullet" :src="require(`@/assets/viking-ship.svg`)">
			    {{user.department}}
		    </p>
		    <p class="subtitle is-7 is-marginless">
			    <img class="bullet" :src="require(`@/assets/swords.svg`)">
			    {{user.title}}
		    </p>
	    </div>
	    <div>
		    <a><span><i class="fas fa-pencil-alt" aria-hidden="true"></i></span></a>
	    </div>
    </div>
	  <div class="tabs">
		  <ul>
			  <router-link
				  tag="li"
				  :to="{name: $routeNames.MySkillGoals}">
				  <a href="">My goals</a>
			  </router-link>
			  <router-link
				  tag="li"
				  :to="{name: $routeNames.MySkills}">
				  <a href="">My skills</a>
			  </router-link>
		  </ul>
	  </div>
	  <router-view />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {IUser} from '@/common/interfaces/IUser';

  interface IUserData {
    user: IUser | null;
  }

  export default Vue.extend({
    data(): IUserData {
      return {
        user: null
      };
    },
    created() {
      this.user = {
        id: '1',
        firstName: 'Olaf',
        lastName: 'Svenson',
	      avatar: null,
				gender: 'M',
        birthday: '2000-01-01',
        department: 'No-axon axolotl',
	      title: 'Junior bone-breaker'
      }
    }
  });
</script>

<style lang="scss" scoped>
	.tabs {
		ul {
			margin-left: 0;
		}
	}
	
	.avatar {
		display: block;
		width: 88px;
		height: 88px;
		margin-right: 18px;
	}
	
	.user-info {
		margin-right: 18px;
	}
	
	.bullet {
		width: 1rem;
		height: 1rem;
	}
	
	.button {
		margin-top: 36px;
	}
	
</style>