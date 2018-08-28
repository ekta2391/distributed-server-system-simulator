<template>
  <div class="side-nav-container">
    <div class="add-remove">
      <div  role="button" @click="addServer" :style="{display: 'inline-block'}">
        <div class="add">
          <span>+</span>
        </div>
        <p :style="{'font-size': '14px'}">Add Server</p>
      </div>
      <div  role="button" @click="removeServer" :style="{display: 'inline-block'}">
        <div class="remove">
          <span>-</span>
        </div>
        <p :style="{'font-size': '14px'}">Remove Server</p>
      </div>
    </div>
    <div class="apps">
      <p>Available Apps</p>
      <ul>
        <li v-for="app in apps">{{app.name}}<span class="activate-group">
          <span  @click="deactivateApp(app.name)">(-)</span>
          <span  @click="activateApp(app.name)">(+)</span></span>
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
      this.servers.push({
        id: null,
        app_1: {
          name: ''
        },
        app_2: {
          name: ''
        },
      },)
      this.servers.forEach(s => {
        if(s.id === null) {
          s.id = this.servers.indexOf(s) + 1
        }
      })
    },
    removeServer () {
      // Check if a minimum of 4 servers exist before removing a server from the cluster
      if (this.serverStore.servers.length > 4) {
        if(this.availableServers.length > 0) {
          let removedServer =  this.serverStore.servers.pop()
          let assignedServer = this.availableServers[0]
          // Object.assign will not work in this case
          assignedServer.app_1.id = removedServer.app_1.id
          assignedServer.app_1.name = removedServer.app_1.name
          assignedServer.app_2.id = removedServer.app_2.id
          assignedServer.app_2.name = removedServer.app_2.name

        }
        else {
          this.serverStore.servers.pop()
        }
      }
      else {
        alert('There should be a minimum of 4 servers at all times!')
      }
  },
  activateApp (name) {
    // First check if there is any server with 0 apps running
    if(this.availableServers.length > 0) {
      let app_1_index
      for (var key in this.serverStore.activeApps) {
        if (key === name) {
          let activeIndex = this.serverStore.activeApps[key].push(this.serverStore.activeApps[key].length)
          app_1_index = activeIndex - 1
          console.log(this.serverStore.activeApps)
          let appInstance = this.availableServers[0].app_1;
          appInstance.id = app_1_index;
          appInstance.name = name;
        }
      }
    }
    // If all servers have atleast 1 app running activate app on 1st server with 1 app running
    else if(this.singleAppServers.length > 0) {
      let app_2_index
      for (var key in this.serverStore.activeApps) {
        if (key === name) {
          let activeIndex = this.serverStore.activeApps[key].push(this.serverStore.activeApps[key].length)
          app_2_index = activeIndex - 1
          let appInstance = this.singleAppServers[0].app_2;
          appInstance.id = app_2_index;
          appInstance.name = name;
        }
      }
    }
    else {
      alert('No more availabele servers to activate the app. Add a server first to activate an app.')
    }
    console.log(this.serverStore.servers)
  },
  deactivateApp (name) {
      let instanceExists = false
      for (var key in this.serverStore.activeApps) {
        if(key === name) {
          let deactivatedApp = this.serverStore.activeApps[key].pop()
            this.serverStore.servers.forEach(server => {
                if(server.app_1.name === key && server.app_1.id === deactivatedApp) {
                  // check if server has second app instance running and delete the first app and assign second app instance as first
                  if(server.app_2.name) {
                    server.app_1.id = server.app_2.id;
                    server.app_1.name = server.app_2.name;
                    server.app_2.id = null;
                    server.app_2.name = '';
                  }
                  else {
                    server.app_1.id = null;
                    server.app_1.name = '';
                  }
                  instanceExists = true
              }

               if(server.app_2.name === key && server.app_2.id === deactivatedApp) {
                  console.log(server)
                  server.app_2.id = null;
                  server.app_2.name = '';
                  instanceExists = true
              }
            })
        }
      }
      if(!instanceExists) {
        alert('No more active instances of ' + name)
      }

  }
  },
  computed: {
    servers () {
      return this.serverStore.get().servers
    },
    availableServers () {
      let availableServers = [];
      this.servers.forEach(server => {
        if(server.app_1.name === "" && server.app_2.name === "") {
          availableServers.push(server)
        }
      })
      return availableServers
    },
    singleAppServers () {
      let singleAppServers = [];
      this.servers.forEach(server => {
        if(server.app_1.name.length > 0 && server.app_2.name === "") {
          singleAppServers.push(server)
        }
      })
      return singleAppServers
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
  border: solid 2px #ffffff;
  border-radius: 2em;
  width: 30px;
  font-weight: 800;
  font-size: 24px;
  margin: 15px;
  &:hover {
    cursor: pointer;
  }
  p {
    font-size: 8px;
  }
}

.apps {
  color: white;
  margin-top: 300px;
  p {
    text-align: left;
    padding-left: 60px;
    color: #8D8282;
  }
  ul {
    background-color: black;
    list-style: none;
    padding-left: 0;
    text-align: left;
  }
  li {
    border-bottom:  solid 0.1px #433D3D;
    line-height: 50px;
    background-color: black;
    padding-left: 60px;
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
