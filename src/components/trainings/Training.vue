<template>
	<div class="modal is-active">
		<div class="modal-background" @click="cancel"></div>
		<div class="modal-card">
			<section class="modal-card-body">
				<img :src="require(`@/assets/${training.image}`)" :alt="training.title">
				<div class="content">
					<div class="title is-4 is-marginless">{{training.title}}</div>
				<div class="text is-size-7">
					<i class="far fa-calendar-alt" aria-hidden="true"></i> {{training.startingDate}} - {{training.endingDate}}
				</div>
				</div>
				<div class="content">{{training.description}}</div>
				<div class="content">
					<div class="title is-6">Skills taught:</div>
					<ul>
						<li v-for="skill in training.outcomes" :key="skill.id"><b>{{skill.title}}</b> / levels {{skill.levelFrom}}-{{skill.levelTo}}</li>
					</ul>
				</div>
			</section>
			<footer class="modal-card-foot">
				<button class="button is-info" @click="confirm">Apply</button>
				<button class="button" @click="cancel">Cancel</button>
			</footer>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {ITrainingDetails} from '@/common/interfaces/ITrainingDetails';

  interface ITrainingData {
    training: ITrainingDetails | null
  }


  export default Vue.extend({
    data(): ITrainingData {
      return {
        training: null
      }
    },
    created(): void {
      this.training = {
        id: '1',
        title: 'Gogy\'s shop',
	      image: 'shashlik.jpg',
        startingDate: '2019-04-01',
        endingDate: '2019-04-08',
        description: 'Gain mastery in international cuisine - learn cooking meat by delicious recipes from far away Georgia',
        prerequisites: [],
        outcomes: [
          {
            id: '5',
            title: 'Shashlik',
            levelFrom: 1.0,
            levelTo: 2.0
          },
	        {
		        id: '9',
		        title: 'Red wines',
		        levelFrom: 1.0,
		        levelTo: 2.0
	        }
        ]
      };
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

<style scoped>
	.modal-card {
		width: 400px;
	}
</style>
