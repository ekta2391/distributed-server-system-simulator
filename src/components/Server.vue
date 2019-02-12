<template>
  <div class="server-block" :class="color">
    <h1>{{server.app_1.name || ''}}</h1> <br/>
    <h1>{{server.app_2.name || ''}}</h1>
  </div>
</template>

<script>
import serverStore from '../stores/serverStore.js'
export default {
  data () {
    return {
      serverStore: serverStore.get()
    }
  },
  props: {
    serverID : { required: true },
    color: { required: false }
  },
  computed: {
    server () {
      let server = this.serverStore.servers.find(s => s.id === this.serverID)
      return server
    }
  },
  created () {
    console.log(this.serverStore.get().servers.find(s => s.id === this.serverID))

  }
}
</script>

<style lang="scss">
.server-block {
  margin: 30px;
  height: 200px;
  background-color: gray;
  border-radius: 5px;
  text-align: center;
  vertical-align: middle;
  color: white;

  h1 {
    padding: 12px;
  }

  &.hadoop {
    background-image: linear-gradient(to bottom right, purple , #F61BC3);
  }

  &.rails {
    background-image: linear-gradient(to bottom right, #7A06FE , #291C38);
  }

  &.chronos {
    background-image: linear-gradient(to bottom right, #2AA2FE , #2B5271);
  }

  &.storm {
    background-image: linear-gradient(to bottom right, #3DFBE2 , #304540);
  }

  &.spark {
    background-image: linear-gradient(to bottom right, #6DF910 , #3DFBE2);
  }
}
</style>
