<template>
  <div>
    <el-row class="tac">
      <el-col>
        <h3 class="menu-title">自定义颜色</h3>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
          <sidebar-item :item="item" v-for="(item,i) in routerList" :key="i"></sidebar-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { routerList } from '@/router/index'
import SidebarItem from './SideBarItem.vue'
export default {
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
    SidebarItem
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
<style scoped>
.menu-title {
  width: 219px;
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
</style>