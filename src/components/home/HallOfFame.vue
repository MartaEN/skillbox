<template>
	<div class="container">
		<h5 class="title is-3">Hall of Fame</h5>
		<div v-for="graduate in graduates">
			<span class="is-7">{{graduate.date}}: {{graduate.firstName}} {{graduate.lastName}} <b>{{graduate.skillName}} {{graduate.skillLevel}}</b></span>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {IGraduate} from '@/common/interfaces/IGraduate';

  interface IGraduates {
    graduates: IGraduate[];
  }

  export default Vue.extend({
    data(): IGraduates {
      return {
        graduates: []
      }
    },
    created(): void {
      this.graduates = [
        {
          date: '2019-03-20',
          firstName: 'Olaf',
          lastName: 'Svenson',
          skillName: 'No eye deer',
          skillLevel: 1.0,
          skillSource: 'T'
        },
        {
          date: '2019-03-20',
          firstName: 'Teo',
          lastName: 'Johansen',
          skillName: 'No eye deer',
          skillLevel: 1.5,
          skillSource: 'T'
        },
        {
          data: '2019-03-19',
          firstName: 'Mea',
          lastName: 'Adagris',
          skillName: 'Lady\'s fist',
          skillLevel: 2.5,
          skillSource: 'P'
        }
      ]
    }
  });
  
</script>