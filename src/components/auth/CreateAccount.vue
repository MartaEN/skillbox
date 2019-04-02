<template>
	<div class="content">
		<div class="title is-4">Create your personal account</div>
		<div class="field">
			<label class="label">Email address</label>
			<div class="control has-icons-left has-icons-right">
				<input class="input" type="email" placeholder="Your email address">
				<span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
			</div>
		</div>
		<div class="field">
			<label class="label">Password</label>
			<p class="control has-icons-left">
				<input class="input" type="password" placeholder="Password">
				<span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
			</p>
		</div>
		<div class="field">
			<label class="label">Repeat password</label>
			<p class="control has-icons-left">
				<input class="input" type="password" placeholder="Password">
				<span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
			</p>
		</div>
		<div class="field">
			<p class="control">
				<button class="button is-info is-fullwidth">Create an account</button>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>

<style scoped>
	
	.content {
		max-width: 400px;
	}
	
	.button {
		margin-top: 28px;
	}

</style>