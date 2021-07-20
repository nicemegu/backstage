<template>
  <div class="header">
    <el-row :gutter="20" type="flex" class="row-bg" align="middle">
      <el-col :span="2">
        <div style="height:16px;line-height:40px">
          <i class="el-icon-s-fold" @click="collapseChange(true)" v-if="!isCollapse"></i>
          <i class="el-icon-s-unfold" @click="collapseChange(false)" v-else></i>
        </div>
      </el-col>
      <el-col :span="7" :offset="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3" :offset="6">
        <div class="grid-content bg-purple">
          <i class="el-icon-bell"></i>
          <i class="el-icon-full-screen "></i>
          <el-dropdown @command="handleCommand" style="height:40px">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },

  components: {},

  computed: {},

  mounted () { },

  methods: {
    handleCommand (command) {
      this.$message('click on item ' + command);
    },
    collapseChange (type) {
      this.isCollapse = type
      this.$emit('collapseChange', this.isCollapse)
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
  padding-right: 10px;
  box-sizing: border-box;
}

.el-row {
  height: 100%;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.grid-content > i {
  margin-right: 16px;
  font-size: 20px;
  cursor: pointer;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>