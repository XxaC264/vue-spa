<template>
  <div class="home">
    <left-nav></left-nav>
    <right-content></right-content>
  </div>
</template>

<script>
import LeftNav from './LeftNav.vue'
import RightContent from './RightContent.vue'
export default {
  name: 'Home',
  components: {
    LeftNav,
    RightContent
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    height: 943px;
  }
  .home div {
    margin: 2px;
  }
</style>