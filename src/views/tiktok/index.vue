<template>
  <div>
    <el-button @click="drawerChange" type="primary" style="margin-left: 16px;">
      点我打开
    </el-button>
    <el-drawer title="我是标题" :visible.sync="drawer" :direction="direction">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import {gettiktokList} from '@/api/tiktok'
export default {
  data () {
    return {
      drawer: false,
      direction: 'rtl',
    }
  },

  components: {},

  computed: {},

  mounted () { },

  methods: {
    drawerChange () {
      this.drawer = true
      gettiktokList({}).then((res)=>{
        console.log(res)
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
          _ + 1
        })
        .catch(_ => {
          _ + 0
        });
    }
  }
}

</script>
<style lang='less' scoped>
</style>