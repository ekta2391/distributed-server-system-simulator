<template>
  <div id="app">
    <div class="side-nav-section">
      <SideNav />
    </div>
    <div class="panel">
      <h1> Server Canvas </h1>
      <div class="cluster-panel-section">
        <div v-for="(server, index) in servers">
          <Server :color="server.app_1.name.toLowerCase()" :serverID="index + 1"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SideNav from './components/SideNav.vue'
import Server from './components/Server.vue'
import serverStore from './stores/serverStore.js'

export default {
  name: 'app',
  components: {
    SideNav,
    Server
  },
  data () {
    return {
      serverStore: serverStore.get(),
      appColor: {
        hadoop: 'white'
      }
    }
  },
  mounted () {

  },
  computed: {
    servers () {
      return this.serverStore.servers
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
  display: flex;
  text-align: center;
}

.side-nav-section {
  width: 20%;
}
.panel {
  color: white;
  font-family: sans-serif;
  width: 80%;
}
.cluster-panel-section {
  width: 100%;
  grid-template-columns: 25% 25% 25% 25%;
  display: grid;
}

html, body {
  font-family: sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
}

</style>
