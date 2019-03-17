<template>
  <div id="app">
    <Menu />
    <div id="view">
      <User />
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from './components/common/Menu.vue'
import Footer from './components/common/Footer.vue'
import User from './components/users/User.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Footer,
    User
  }
}
</script>

<style>
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #view {
    flex: 1;
  }
</style>
