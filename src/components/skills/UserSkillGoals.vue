<template>
	<div class="container">
		<div class="level-right">
			<button class="button is-rounded is-info level-item"
				@click="toggleAddGoalModal">
				Add new training goal
			</button>
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
				<tr v-for="(goal, index) of goals" :key="index">
					<td>{{goal.skill.technology.name}}</td>
					<td>{{goal.skill.category}}</td>
					<td>{{goal.skill.title}}</td>
					<td class="has-text-centered">
						{{goal.skill.level}}
						<span v-if="goal.skill.source==='P'"><i class="fas fa-user-shield" aria-hidden="true"></i></span>
						<span v-if="goal.skill.source==='T'"><i class="fas fa-user-graduate" aria-hidden="true"></i></span></td>
					<td class="has-text-centered">{{goal.targetLevel}}</td>
					<td>
						<button v-for="(option, index) in goal.trainingsSuggested" :key="index" class="tag is-rounded is-info"
						        @click="toggleTrainingModal">{{option.training.title}}
						</button>
					</td>
					<td class="has-text-centered"><a><i class="fas fa-backspace" aria-hidden="true"></i></a></td>
				</tr>
			</tbody>
		</table>
		<transition name="fade">
			<SkillNewGoal v-if="addGoalModalShown"
					:confirmFunction="addGoal"
					v-on:operation-completed="toggleAddGoalModal"
					v-on:operation-canceled="toggleAddGoalModal" />
		</transition>
		<transition name="fade">
			<Training v-if="trainingModalShown"
			              :confirmFunction="enroll"
			              v-on:operation-completed="toggleTrainingModal"
			              v-on:operation-canceled="toggleTrainingModal" />
		</transition>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import {IUserSkillGoal} from '@/common/interfaces/IUserSkillGoal';
	import SkillNewGoal from '@/components/skills/SkillNewGoal.vue';
	import Training from '@/components/trainings/Training.vue';

	interface IUserSkillGoalsDate {
		goals: IUserSkillGoal[],
		addGoalModalShown: false,
		trainingModalShown: false
	}

	export default Vue.extend({
		components: {
			SkillNewGoal,
			Training
		},
		data(): IUserSkillGoalsDate {
			return {
				goals: [],
				addGoalModalShown: false,
				trainingModalShown: false
			}
		},
		created() {
			this.goals =
				[
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
									title: 'Gogy\'s shop',
									startingDate: '2019-04-01'
								},
								enrollmentStatus: 'enrolled'
							}
						]
					}
				]
		},
		methods: {
			toggleAddGoalModal() {
				this.addGoalModalShown = !this.addGoalModalShown;
			},
			toggleTrainingModal() {
				this.trainingModalShown = !this.trainingModalShown;
			},
			addGoal() {
			},
			enroll() {
			
			}
		}
	});
</script>

<style scoped>
	table {
		margin-top : 24px;
	}
</style>