<template>
  <div class="server-block" :style="serverStyle"></div>
</template>

<script>
export default {
  data () {
    return {
      serverStyle: {
        'background-color': this.serverColor || ''
      }
    }
  },
  props: {
    serverID : { required: true },
    serverColor: { required: true }
  }
}
</script>

<style lang="scss">
.server-block {
  margin: 30px;
  height: 200px;
  background-color: gray;
}
</style>
