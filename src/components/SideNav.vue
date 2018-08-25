<template>
  <div class="side-nav-container">
    <div class="add-remove">
      <span role="button" @click="addServer" class="add">+</span>
      <span role="button" @click="removeServer" class="remove">-</span>
    </div>
    <div class="apps">
      <p>Available Apps</p>
      <ul>
        <li v-for="app in apps">{{app.name}}<span class="activate-group">
          <span @click="deactivateApp(app.name)">-</span>
          <span @click="activateApp(app.name)">+</span></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import serverStore from '../stores/serverStore.js'
export default {
  data () {
    return {
      // serverCount: 4,
      apps: [
        { name: 'Hadoop' },
        { name: 'Rails' },
        { name: 'Chronos' },
        { name: 'Storm' },
        { name: 'Spark' }
      ],
      serverStore: serverStore.get()
    }
  },
  methods: {
    addServer () {
      this.serverStore.servers.push({
        id: null,
        app_1: {
          name: ''
        },
        app_2: {
          name: ''
        },
      },);
    },
    removeServer () {
      // Check if a minimum of 4 servers exist before removing a server from the cluster
      if (this.serverStore.servers.length > 4) {
        this.serverStore.servers.pop()
      }
      else {
        alert('There should be a minimum of 4 servers at all times!')
      }
  },
  activateApp (name) {
    console.log('activate: ' + name)
    this.availableServers[0].app_1.name = name;
  },
  deactivateApp (name) {
    console.log('deActivate: ' + name)
  }
  },
  computed: {
    servers () {
      return this.serverStore.get()
    },
    availableServers () {
      let availableServers = [];
      this.servers.servers.forEach(server => {
        if(server.app_1.name === "" && server.app_2.name === "") {
          availableServers.push(server)
        }
      })
      return availableServers
    }
  }
}
</script>
<style lang="scss">

.side-nav-container {
  height: 100%;
  background-color: #4F4E4E;
}

.add-remove {
  margin-top: 40px;
  margin: auto;
  width: 80%;
  height: 80px;
  color: white;
  font-size: 22px;
  font-weight: bold;
}
.add, .remove {
  display: inline-block;
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
}

.apps {
  color: white;
  p {
    text-align: center;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    line-height: 30px;
    margin-top: 20px;
    background-color: black;
    &:hover {
      cursor: pointer;
    }

    .activate-group {
      float: right;
      margin-right: 5px;
    }
    span {
      margin-left: 30px;
    }
  }
}
</style>
