<template>
<div class="modal is-active">
	<div class="modal-background"></div>
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">Set a new skill goal</p>
			<button class="delete" aria-label="close" @click="cancel"></button>
		</header>
		<section class="modal-card-body">
			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label class="label">Craft</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<div class="select is-fullwidth">
								<select>
									<option>Select craft</option>
									<option v-for="technology in technologies" :key="technology.id">{{technology.name}}</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label class="label">Category</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<div class="select is-fullwidth">
								<select>
									<option>Select category</option>
									<option v-for="category in categories" :key="category.id">{{category.name}}</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label class="label">Skill</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<div class="select is-fullwidth">
								<select>
									<option>Select skill</option>
									<option v-for="skill in skills" :key="skill.id">{{skill.title}}</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label class="label">Set target skill level</label>
				</div>
				<div class="field-body">
					<star-rating :increment="0.5" :star-size="30"></star-rating>
				</div>
			</div>
		</section>
		<footer class="modal-card-foot">
			<button class="button is-info" @click="confirm">Save changes</button>
			<button class="button" @click="cancel">Cancel</button>
		</footer>
	</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {ITechnologyShort} from '@/common/interfaces/ITechnologyShort';
import {ICategory} from '@/common/interfaces/ICategory';
import {ISkill} from '@/common/interfaces/ISkill';

interface ISkillNewGoalData {
  technologies: ITechnologyShort[];
  categories: ICategory[];
  skills: ISkill[];
  level: number
}

export default Vue.extend({
  data(): ISkillNewGoalData {
    return {
      technologies: [],
      categories: [],
      skills: [],
      level: 0
    }
  },
  created(): void {
    this.technologies =
      [
        {
          id: 'fight',
          name: 'Fight'
        },
        {
          id: 'feast',
          name: 'Feast'
        },
        {
          id: 'fix',
          name: 'Fix'
        }
      ];
  },
  props: {
    confirmFunction: {
      //function which should return promise
      type: Function,
      default: () => Promise.resolve()
    }
  },
  methods: {
    confirm() {
      return this.$emit('operation-completed', this.confirmFunction());
    },
    cancel() {
      this.$emit('operation-canceled');
    }
  }
});
</script>
