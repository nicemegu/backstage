<template>
  <div>
    <keep-alive>
      <transition name="fade-page" mode="out-in">
        <router-view />
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'PageMain'
}
</script>
<style scoped>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: all 0.5s;
}
.fade-page-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>