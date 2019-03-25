<template>
  <div class="container">
	  <div class="level-right">
		  <router-link
				  class="button is-link is-rounded level-item"
				  :to="{name: $routeNames.Skills}">Add new training goal</router-link>
	  </div>
	  <table>
		  <thead>
		    <tr>
			    <td>Craft</td>
			    <td>Category</td>
			    <td>Skill</td>
			    <td class="has-text-centered">Current level</td>
			    <td class="has-text-centered">Target level</td>
			    <td>Bootcamps available</td>
			    <td>Remove</td>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="goal of goals">
			    <td>{{goal.skill.technology.name}}</td>
			    <td>{{goal.skill.category}}</td>
			    <td>{{goal.skill.title}}</td>
			    <td class="has-text-centered">
				    {{goal.skill.level}}
			      <span v-if="goal.skill.source==='P'"><i class="fas fa-user-shield" aria-hidden="true"></i></span>
				    <span v-if="goal.skill.source==='T'"><i class="fas fa-user-graduate" aria-hidden="true"></i></span></td>
			    <td class="has-text-centered">{{goal.targetLevel}}</td>
			    <td><span class="tag is-rounded" v-for="option in goal.trainingsSuggested">{{option.training.title}}</span></td>
			    <td class="has-text-centered"><a><i class="fas fa-backspace" aria-hidden="true"></i></a></td>
		    </tr>
		  </tbody>
	  </table>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {IUserSkillGoal} from '@/common/interfaces/IUserSkillGoal';
  import Training from '@/components/trainings/Training.vue';

  interface IUserSkillGoals {
    goals: IUserSkillGoal[];
  }

  export default Vue.extend({
    components: {
      Training
    },
    data(): IUserSkillGoals {
      return {
        goals: []
      }
    },
    created() {
      this.goals = [
        {
          skill: {
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
          targetLevel: 4.0,
          trainingsSuggested: []
        },
        {
          skill: {
            id: '5',
            title: 'Shashlik',
            technology: {
              id: 'feast',
              name: 'Feast'
            },
            category: 'Cookery',
            versions: [],
            level: 0.0,
            updated: ' ',
            source: ' ',
          },
          targetLevel: 1.0,
          trainingsSuggested: [
            {
              training: {
                id: '1',
                title: 'Jerry\'s shop',
                startingDate: '2019-04-01'
              },
              enrollmentStatus: 'enrolled'
            }

          ]
        }
      ]
    }
  });
</script>

<style scoped>
	table {
		margin-top : 24px;
	}
</style>