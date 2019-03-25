<template>
  <div class="container" v-if="technology">
    <h2 class="title is-2">Info</h2>
    <p>{{ technology.description }}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {ITechnology} from '@/common/interfaces/ITechnology';

  interface ITechnologyProfileData {
    technology: ITechnology | null;
  }

  export default Vue.extend({
    props: {
      technologyId: String
    },
    data(): ITechnologyProfileData {
      return {
        technology: null
      };
    },
    created() {
      this.technology = {
        id: 'fight',
        name: 'Fight',
        description: 'Vikings are born warriors.',
        stats: {
          staffCount: 27,
          projectCount: 4
        }
      };
    }
  });
</script>