<template>
	<div class="content">
		<div class="title is-4">Fill in your personal details</div>
		<div class="field">
      <label class="label">First name</label>
      <div class="control">
        <input class="input" type="text">
      </div>
		</div>
		<div class="field">
      <label class="label">Last name</label>
      <div class="control">
        <input class="input" type="text">
      </div>
		</div>
		<div class="field">
      <label class="label">Birthday</label>
      <div class="control">
        <input class="input" type="date">
      </div>
		</div>
		<div class="field">
			<label class="label">Gender</label>
			<div class="control">
        <label class="radio"><input type="radio" name="foobar"> Male</label>
        <label class="radio"><input type="radio" name="foobar" checked> Female</label>
			</div>
		</div>
		<div class="field">
      <label class="label">Which troop did you join</label>
      <div class="control">
	      <div class="select is-fullwidth">
		      <select>
			      <option>Select your troop</option>
			      <option v-for="department in departments" :key="department.id">{{department.name}}</option>
		      </select>
	      </div>
      </div>
		</div>
		<div class="field">
      <label class="label">What is your rank</label>
      <div class="control">
        <div class="select is-fullwidth">
		      <select>
			      <option>Select your rank</option>
			      <option v-for="jobTitle in jobTitles" :key="jobTitle.id">{{jobTitle.name}}</option>
		      </select>
	      </div>
      </div>
		</div>
		<div class="field">
			<p class="control">
				<button class="button is-info is-fullwidth">Save and proceed</button>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {IDepartment} from '@/common/interfaces/IDepartment';
  import {IJobTitle} from '@/common/interfaces/IJobTitle';

  interface IFillUserDetailsData {
	  departments: IDepartment[];
	  jobTitles: IJobTitle[];
  }

  export default Vue.extend({
	  data(): IFillUserDetailsData {
	  	return {
	  		departments: [],
			  jobTitles: []
		  }
	  },
	  created(): void {
	  	this.departments =
			  [
				  {
				  	id: '1',
					  name: 'No axon axolotl'
				  },
				  {
					  id: '2',
					  name: 'The hangover'
				  },
				  {
					  id: '3',
					  name: 'Die hard'
				  },
			  ];
	  	this.jobTitles =
			  [
				  {
				  	id: '1',
					  name: 'Junior bone-breaker'
				  },
				  {
					  id: '2',
					  name: 'Middle bone-breaker'
				  },
				  {
					  id: '3',
					  name: 'Senior bone-breaker'
				  },
				  {
					  id: '4',
					  name: 'Expert bone-breaker'
				  }
			  ]
	  }
	
	
  });
</script>

<style scoped>
	
	.content {
		max-width : 400px;
	}
	
	.button {
		margin-top: 28px;
	}
	
</style>