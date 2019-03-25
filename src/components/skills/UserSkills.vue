<template>
  <div class="container">
	  <table>
		  <thead>
		    <tr>
			    <td>Craft</td>
			    <td>Category</td>
			    <td>Skill</td>
			    <td>Level</td>
			    <td>Last updated</td>
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
				    <span v-if="skill.source==='P'"><i class="fas fa-user-shield" aria-hidden="true"></i></span>
				    <span v-if="skill.source==='T'"><i class="fas fa-user-graduate" aria-hidden="true"></i></span>
			    </td>
		    </tr>
		  </tbody>
	  </table>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {IUserSkill} from '@/common/interfaces/IUserSkill';

  interface ISkills {
    skills: IUserSkill[];
  }

  export default Vue.extend({
	  props: {
      userId: String
	  },
	  data(): ISkills {
	    return {
	      skills: []
		  }
	  },
	  created() {
	    this.skills = [
		    {
          id: '1',
          title: 'Bigfoot',
			    technology: {
            id: 'fight',
				    name: 'Fight'
			    },
			    category: 'Melee',
          versions: ['1.0', '2.0'],
          level: 3.5,
          updated: '2018-12-31',
          source: 'P',
		    },
        {
          id: '4',
          title: 'No eye deer',
          technology: {
            id: 'fight',
            name: 'Fight'
          },
          category: 'Archery',
          versions: ['5.0'],
          level: 2.0,
          updated: '2019-03-20',
          source: 'T',
        }
	    ]
	  }
  });
</script>