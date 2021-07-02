<template>
  <div class="app-wrapper">
    <Header />
    <div class="main">
      <sidebar class="sidebar " />
      <page-main class="page-main"></page-main>
    </div>

  </div>
</template>

<script>
import Header from './Header/index.vue'
import sidebar from './sidebar/index.vue'
import PageMain from './PageMain/index.vue'
export default {
  data () {
    return {
      show: true
    }
  },
  components: {
    sidebar,
    PageMain,
    Header
  },
}

</script>
<style scoped>
.main {
  display: flex;
  flex: 1;
}
.sidebar {
  width: 220px;
  z-index: 2;
}
.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.page-main {
  flex: 1;
}
</style>