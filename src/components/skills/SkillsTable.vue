<template>
  <div class="container">
	  <table>
		  <thead>
		    <tr>
			    <td>Craft</td>
			    <td>Category</td>
			    <td>Skill</td>
			    <td>Version</td>
			    <td>Mavens</td>
			    <td>Missions</td>
			    <td>Tags</td>
			    <td></td>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="skill in skills" :key="skill.id">
			    <router-link
					    tag="td"
					    :to="{name: $routeNames.TechnologyProfile, params: {technologyId: skill.technology.id}}">
				    <a href="">{{skill.technology.name}}</a>
          </router-link>
			    <td>{{skill.category}}</td>
			    <td>{{skill.skill}}</td>
			    <td>{{skill.version}}</td>
			    <td>{{skill.mavens}}</td>
			    <td>{{skill.missions}}</td>
			    <td><span class="tag is-rounded" v-for="tag in skill.tags">{{tag}}</span></td>
			    <td>
				    <a><i class="fas fa-info-circle" aria-hidden="true"></i></a>
			      <a><i class="fas fa-plus-circle" aria-hidden="true"></i></a>
			    </td>
		    </tr>
		  </tbody>
	  </table>
		
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {ISkillStats} from '@/common/interfaces/ISkillStats';

  interface ISkillStatsData {
    skills: ISkillStats[];
  }

  export default Vue.extend({
    data(): ISkillStatsData {
      return {
        skills: []
      };
    },
    created(): void {
      this.skills = [
        {
          id: '1',
          technology: {
            id: 'fight',
	          name: 'Fight'
          },
          category: 'Melee',
          skill: 'Bigfoot',
          version: '2.0',
          mavens: 48,
          missions: 12,
          tags: [
            'basic'
          ]
        },
        {
          id: '2',
          technology: {
            id: 'fight',
            name: 'Fight'
          },
          category: 'Melee',
          skill: 'Lady\'s fist',
          version: '2.0',
          mavens: 24,
          missions: 12,
          tags: [
            'basic',
	          'lady style'
          ]
        },
        {
          id: '3',
          technology: {
            id: 'fight',
            name: 'Fight'
          },
          category: 'Archery',
          skill: 'Robin Hood',
          version: '1.3',
          mavens: 12,
          missions: 12,
          tags: [
            'basic',
            'ranged'
          ]
        },
        {
          id: '4',
          technology: {
            id: 'fight',
            name: 'Fight'
          },
          category: 'Archery',
          skill: 'No eye deer',
          version: '5.0',
          mavens: 3,
          missions: 4,
          tags: [
            'high-level',
            'ranged'
          ]
        },
        {
          id: '5',
          technology: {
            id: 'feast',
            name: 'Feast'
          },
          category: 'Cookery',
          skill: 'Shashlik',
          version: '1.3',
          mavens: 8,
          missions: 6,
          tags: [
            'i18n'
          ]
        }
      ]
    }
  });
</script>

<style scoped>
	.tag {
		margin: 0 3px;
	}
	
	svg {
		margin-right: 2px;
	}
</style>