<template>
	<div class="level">
		<div class="level-item">
			<nav class="pagination is-small" role="navigation" aria-label="pagination">
      <ul class="pagination-list">
	      <li><a class="pagination-previous"><span class="icon is-small"><i class="fas fa-chevron-left" aria-hidden="true"></i></span></a></li>
        <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
        <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
	      <li><a class="pagination-next"><span class="icon is-small"><i class="fas fa-chevron-right" aria-hidden="true"></i></span></a></li>
      </ul>
		</nav>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>

<style scoped>
	.pagination {
		margin-top: 24px;
	}
	
	li {
		list-style: none;
	}
</style>