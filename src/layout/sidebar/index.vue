<template>
  <div>
    <el-row class="tac">
      <el-col>
        <h3 class="menu-title"><span v-if="!isCollapse">自定义颜色</span></h3>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
          <fragment v-for="(item,i) in routerList" :key="i">
            <el-menu-item :index="item.routerPath" v-if="item.children.length==1">
              <i class="el-icon-location"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
            <el-submenu v-else :index="item.name">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="row.routerPath" v-for="(row,i) in item.children" :key="i">{{row.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </fragment>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { routerList } from '@/router/index'
export default {
  props: {
    isCollapse: Boolean
  },
  data () {
    return {
      routerList: []
    }
  },
  created () {
    this.setMenuList()
  },

  mounted () {

  },
  components: {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    //获取菜单栏列表
    setMenuList () {
      const list = routerList.routes
      const routesList = []
      list.forEach((item) => {
        if (item.children && item.name !== 'Login') {
          const children = []
          item.children.forEach((row) => {
            if (row.path == '/') {
              children.push({ routerPath: item.path, name: row.meta.title })
            } else {
              children.push({ routerPath: row.path, name: row.meta.title })
            }
          })
          routesList.push({
            name: item.meta.title,
            routerPath: item.path,
            children
          })
        }
      })
      this.routerList = routesList
      console.log(routesList);
    }
  }
}

</script>
<style >
.menu-title {
  width: 100%;
  height: 60px;
  margin: 0;
  background-color: #545c64;
  text-align: center;
  line-height: 60px;
  color: #fff;
}
.tac {
  height: 100%;
}
.el-col {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-col > ul {
  height: 100%;
  flex: 1;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border-right-width: 0;
}
</style>