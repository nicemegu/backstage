<template>
  <div class="app-wrapper">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgba(84, 92, 100)">
        <sidebar class="sidebar " :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px;padding:0 10px">
          <Header @collapseChange="collapseChange" />
        </el-header>
        <el-main style="padding-bottom:0px;padding-top:0px;margin-top:20px">
          <page-main class="page-main"></page-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './Header/index.vue'
import sidebar from './sidebar/index.vue'
import PageMain from './PageMain/index.vue'
export default {
  data () {
    return {
      show: true,
      isCollapse: false,
    }
  },
  components: {
    sidebar,
    PageMain,
    Header
  },
  methods: {
    collapseChange (type) {
      console.log(type)
      this.isCollapse = type
    }
  }
}

</script>
<style scoped>
.page-main{
  height: 100%;
}
</style>