<template>
  <div class="container">
	  <table>
		  <thead>
		    <tr>
			    <td>Craft</td>
			    <td>Category</td>
			    <td>Skill</td>
			    <td>Current level</td>
			    <td>Target level</td>
			    <td>Bootcamps available</td>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="skill of skills">
			    <td>{{skill.technology.name}}</td>
			    <td>{{skill.category}}</td>
			    <td>{{skill.title}}</td>
			    <td><progress class="progress is-info" :value="skill.level" max="5">{{skill.level}}</progress></td>
			    <td>
				    {{skill.updated}}
				    <span v-if="skill.source==='mission'"><i class="fas fa-user-shield" aria-hidden="true"></i></span>
				    <span v-if="skill.source==='bootcamp'"><i class="fas fa-user-graduate" aria-hidden="true"></i></span>
			    </td>
		    </tr>
		  </tbody>
	  </table>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>