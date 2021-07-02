<template>
  <div class="header">
    <div class="header-left">
      左边
    </div>
    <div class="header-content">
      中间
    </div>
    <div class="header-right">

      <!-- <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-badge  class="item">数据查询</el-badge>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="我的" icon="el-icon-user-solid">我的</el-dropdown-item>
          <el-dropdown-item command="设置" icon="el-icon-s-tools">设置</el-dropdown-item>
          <el-dropdown-item divided command="退出">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->

      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="我的" icon="el-icon-user-solid">我的</el-dropdown-item>
          <el-dropdown-item command="设置" icon="el-icon-s-tools">设置</el-dropdown-item>
          <el-dropdown-item divided command="退出">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
    handleCommand (command) {
      this.$message('click on item ' + command);
    }
  }
}

</script>
<style  scoped>
.header {
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: rgb(229, 228, 235);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  box-sizing: border-box;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>