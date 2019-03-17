<template>
  <div class="menu-container">
    <h2>This is menu</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/vikings">Fellow vikings</router-link>
    <router-link to="/campaigns">Campaigns</router-link>
    <router-link to="/bootcamps">Boot camps</router-link>
    <router-link to="/outpost">My outpost</router-link>
  </div>
</template>

<style>
    .menu-container {
        padding: 6px 0;
        background-color: #CDDC39;
    }
</style>