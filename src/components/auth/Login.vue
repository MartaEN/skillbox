<template>
	<section>
		<div class="container">
			<div class="level">
				<img class="level-item logo" src="viking.svg" alt="Sign in">
			</div>
			<div class="level">
				<div class="level-item title is-3">Sign in to V-Tribe</div>
			</div>
			<div class="card">
				<div class="card-content">
					<div class="field">
					<div class="level">
						<label class="label">Username</label>
					</div>
					<div class="control has-icons-left has-icons-right">
						<input class="input" type="text" placeholder="Username">
						<span class="icon is-small is-left"><i class="fas fa-user"></i></span>
					</div>
				</div>
				<div class="field">
					<div class="level">
						<div class="level-left">
							<label class="label level-item">Password</label>
						</div>
						<div class="level-right">
							<router-link class="level-item" :to="{name: $routeNames.ResetPassword}">Forgot your password?</router-link>
						</div>
					</div>
          <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password">
          <span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
          </p>
				</div>
				<div class="field">
          <p class="control">
            <button class="button is-info is-fullwidth">Login</button>
          </p>
				</div>
				</div>
			</div>
			<div class="card">
				<div class="card-content">
					<span>New to V-Tribe? <router-link :to="{name: $routeNames.CreateAccount}">Create an account</router-link>.</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
  import Vue from 'vue';


  export default Vue.extend({});
</script>

<style scoped>
	
	.container {
		width: 400px;
		margin: 0 auto;
	}
	
	.button {
		margin-top: 28px;
	}
	
	.card {
		margin-bottom: 28px;
	}
	
	.logo {
		width: 64px;
		height: 64px;
	}
</style>
