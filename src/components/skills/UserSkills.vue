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
			<tr v-for="(skill, index) of skills" :key="index">
				<td>{{skill.technology.name}}</td>
				<td>{{skill.category}}</td>
				<td>{{skill.title}}</td>
				<td><star-rating :increment="0.1" :rating=skill.level :show-rating="false" :read-only="true" :star-size="24"></star-rating></td>
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
import IUserSkill from '@/common/interfaces/IUserSkill.vue';

interface ISkillsData {
	skills: IUserSkill[]
}

export default Vue.extend({
	props: {
		userId: String
	},
	data(): ISkillsData {
		return {
			skills: []
		}
	},
	created() {
		this.skills = [{
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
