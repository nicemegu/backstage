<template>
  <div id="app" ondragstart="return false">
    <router-view />
  </div>
</template>
<script>
import { Notification } from 'element-ui';
export default {
  name: 'App',
  mounted () {
    if (this.isMobile()) {
      Notification.success('移动端')
    } else {
      Notification.success('PC端')
    }
  },

  methods: {
    //判断是移动端或者pc端
    isMobile () {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobule|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOs|Symbian|Windows Phone)/i)
      return flag
    }
  }
}
</script>

<style>
#app {
  background-color: rgb(220, 223, 227);
}
</style>
