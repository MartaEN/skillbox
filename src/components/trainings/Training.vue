<template>
	<div v-if="training">
		<p>{{training.title}}</p>
		<p>{{training.description}}</p>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {ITrainingDetails} from '@/common/interfaces/ITrainingDetails';

  interface ITrainingData {
    training: ITrainingDetails | null;
  }


  export default Vue.extend({
    data(): ITrainingData {
      return {
        training: null,
      }
    },
    created(): void {
      this.training = {
        id: '1',
        title: 'Jerry\'s shop',
        startingDate: '2019-04-01',
        endingDate: '2019-04-08',
        description: 'Improve your skill in international cuisine - try cooking meat by delicious recipes from far away Georgia',
        prerequisites: [],
        outcomes: [
          {
            id: '5',
            title: 'Shashlik',
            levelFrom: 1,
            levelTo: 2
          }
        ]
      }
    }
  });
</script>
