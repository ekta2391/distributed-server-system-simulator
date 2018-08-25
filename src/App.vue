<template>
  <div id="app">
    <SideNav />
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue'
export default {
  name: 'app',
  components: {
    SideNav
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  color: #2c3e50;
  background-color: black;
}

</style>
