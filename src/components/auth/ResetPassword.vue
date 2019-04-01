<template>
	<section>
		<div class="container">
			<div class="level">
				<img class="level-item logo" src="viking.svg" alt="Sign in">
			</div>
			<div class="level">
				<div class="level-item title is-3">Reset your password</div>
			</div>
			<div class="card">
				<div class="card-content">
					<div class="field">
					<div class="level">
						<label class="label">Enter your email address and we will send you a link to reset your password.</label>
					</div>
					<div class="control has-icons-left">
						<input class="input" type="text" placeholder="Enter your email address">
						<span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
					</div>
				</div>
				<div class="field">
          <p class="control">
            <button class="button is-info is-fullwidth">Send password reset email</button>
          </p>
				</div>
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
