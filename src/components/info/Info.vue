<template>
  <div class="info">
    <h3>Info pane comes here</h3>
    <ProjectList />
    <p>or some other news elements</p>
  </div>
</template>

<script>
  import Vue from 'vue';
  import ProjectList from '../projects/ProjectList.vue'

  export default Vue.extend({
    components: {ProjectList}
  })
</script>