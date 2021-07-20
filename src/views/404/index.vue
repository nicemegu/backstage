<template>
  <div class="area">
    <div class="no-find" @mousemove="getmousemove">
      <div class="visible-area" ref="visible">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () { },

  methods: {
    getmousemove (e) {
      this.$refs.visible.style.backgroundPositionX=-e.offsetX+100+'px'
      this.$refs.visible.style.backgroundPositionY=-e.offsetY+100+'px'
    }
  }
}

</script>
<style  scoped>
.area {
  width: 100%;
  height: 100%;
}
.no-find {
  width: 100%;
  height: 100%;
  /* background-image: url('https://w.wallhaven.cc/full/72/wallhaven-72jwp3.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  font-size: 90px;
  color: #fff;
  position: relative;
}
.visible-area {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url('https://w.wallhaven.cc/full/72/wallhaven-72jwp3.jpg');
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;
}
</style>