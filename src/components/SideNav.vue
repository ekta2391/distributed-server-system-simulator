<template>
  <div class="side-nav-container">
    <div class="add-remove">
      <span role="button" @click="addServer" class="add">+</span>
      <span role="button" @click="removeServer" class="remove">-</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      serverCount: 4
    }
  },
  methods: {
    addServer () {
      this.serverCount++
      console.log(this.serverCount)
    },
    removeServer () {
      this.serverCount--
      console.log(this.serverCount)
    }
  },
  computed: {
    servers () {
      let servers = this.serverCount
      return servers
    }
  }
}
</script>
<style lang="scss">

.side-nav-container {
  width: 20%;
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
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
}
</style>
