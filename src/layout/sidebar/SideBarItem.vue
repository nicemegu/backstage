<template>
  <div>
    <el-menu-item :index="item.routerPath" v-if="item.children.length==1">
      <i class="el-icon-location"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>
    <el-submenu v-else index="s">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.name}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="row.routerPath" v-for="(row,i) in item.children" :key="i">{{row.name}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    // basePath: {
    //   type: String,
    //   default: ''
    // }
  },
  data () {
    return {
    }
  },
}

</script>
<style lang='less' scoped>
</style>