<template>
  <div class="nav-header">
    ** 管理系统
    <span>
      <button @click="cancellation">注销</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  methods: {
    cancellation() {

      this.$confirm(' 是否退出登录', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.replace("/");
          localStorage.clear();
          this.$message({
            type: 'success',
            message: '已退出!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      // let r = confirm("确定注销吗!");
      // if (r == true) {
      //   this.$router.replace("/");
      //   localStorage.clear();
      // }
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid #ebeef5;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  padding: 4px;
}
button {
  width: 44px;
  height: 22px;
  border: 0px;
  background-color: rgb(245, 108, 108);
  color: white;
  border-radius: 4px;
}
</style>