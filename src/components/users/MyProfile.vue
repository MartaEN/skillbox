<template>
  <div v-if="user" class="container">
    <p class="title is-3">Hey, {{ user.firstName }}! What are you up to today?</p>
    <div class="tabs is-boxed">
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
    <div>
      <router-view />
    </div>
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
        title: 'Junior bone-breaker',
        department: 'No-axon axolotl'
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
</style>