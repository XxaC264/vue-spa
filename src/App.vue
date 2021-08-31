<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}
input {
  outline-style: none;
}

</style>