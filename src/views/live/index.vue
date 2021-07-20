<template>
  <div>
    <div class="testimg" >
      <img src="https://w.wallhaven.cc/full/8o/wallhaven-8oky1j.jpg" alt="">
    </div>
  </div>
</template>

<script>
// import { request } from "../../api/text"
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {
    //  request({
    //     url: 'api/weibo/'
    //   }).then(res => {
    //     this.newList = res.data
    //   }, err => {
    //     console.log(err);
    //   })
  },

  methods: {

  }
}

</script>
<style  scoped>
.testimg {
  width: 200px;
  height: 200px;
}
.testimg > img {
  width: 100%;
  height: 100%;
}
</style>