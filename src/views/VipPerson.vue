<template>
  <div class="vip-person">
    <!-- This is Person Model -->
    <div class="box">
      <table>
        <tr>
          <th style="width: 300px; padding: 24px">日期</th>
          <th style="width: 180px; padding: 24px">姓名</th>
          <th style="width: 180px; padding: 24px">省份</th>
          <th style="width: 380px; padding: 24px">地址</th>
          <th style="width: 180px; padding: 24px">操作</th>
        </tr>
        <tr v-for="(i, index) in $store.state.tableList" :key="index">
          <td style="height: 32px; padding: 24px">{{ i.date }}</td>
          <td>{{ i.name }}</td>
          <td>{{ i.city }}</td>
          <td>{{ i.address }}</td>
          <td><el-button type="text" @click="fn(index, i)">移除会员</el-button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "VipPerson",
  methods: {
    fn(index, i) {
      this.$confirm(`是否移除会员"${i.name}" ?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
          this.$store.state.tableList.splice(index, 1);
          this.$message({
            title: "成功",
            message: `已删除${i.name}!`,
            type: "success",
          });
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
      // let r = confirm(`确定删除"${i.name}"吗`);
      // if (r == true) {
      //   this.$store.state.tableList.splice(index, 1);
      // }
    },
  },
};
</script>

<style scoped>
.vip-person {
  height: 868px;
  overflow: scroll;
  overflow-x: hidden;
}
table {
  text-align: center;
  border-collapse: collapse;
  color: #888080;
}
button {
  color: rgb(102, 177, 255);
  background-color: transparent;
  border: 0px;
}
button:hover {
  cursor: pointer;
  transform: scale(1.06);
  color: rgba(231, 64, 13, 0.932);
  transition: 0.1s;
}
tr {
  border-bottom: 2px solid #eee;
}
tr:hover {
  background-color: rgb(245, 247, 250);
}
</style>