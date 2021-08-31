<template>
  <div class="right-content">
    <nav-header></nav-header>
    <!-- <nav-item></nav-item> -->
    <keep-alive include="Person">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import NavHeader from "./NavHeader.vue";
// import NavItem from "./NavItem.vue";
export default {
  name: "RightContent",
  components: {
    NavHeader,
    // NavItem,
  },
};
</script>

<style>
.right-content {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  width: 100%;
  height: 100%;
}
.right-content div {
  margin: 2px;
}
</style>