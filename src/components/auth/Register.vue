<template>
	<div class="container">
		<div class="level">
			<img class="level-item logo" src="viking.svg" alt="Sign in">
		</div>
		<div class="level">
			<div class="level-item title is-3">Join V-Tribe</div>
		</div>
		<div class="tabs">
      <ul>
	      <router-link
		      tag="li"
		      :to="{name: $routeNames.CreateAccount}">
		      <a href=""><div><b>Step 1:</b><br/>Set up your account</div></a>
        </router-link>
	      <router-link
		      tag="li"
		      :to="{name: $routeNames.ClaimSkills}">
          <a href=""><div><b>Step 2:</b><br/>Tell us your skills</div></a>
        </router-link>
      </ul>
    </div>
    <div class="content">
      <router-view />
    </div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  
  export default Vue.extend({});
</script>

<style scoped>
	.logo {
		width: 64px;
		height: 64px;
	}
</style>
