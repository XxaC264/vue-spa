<template>
  <div class="person-info">
    <!-- This is PersonInfo Model -->
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
          <td><button @click="fn(i, index)">详情</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonInfo",
  methods: {
    fn(i,index) {
      // console.log(this.$router)
      //  alert(`这是第${index+1}个`);

      // 编程式导航  通过调用api方法实现导航
      this.$router.push({
        // push方法 
        //    跳转到指定地址并携带一下参数
        name: 'Details', // // 如果用的是params 这里必须要写name  query则不用
        params: {
          title: `${this.$store.state.tableList[index].name}`,
          gender: `${i.details.gender}`,
          weapon: `${i.details.weapon}`,
          skill: `${i.details.skill}`,
          birthplace: `${i.details.birthplace}`,
          teacher: `${i.details.teacher}`,
          country: `${i.details.country}`,
        }
      })

    },
  },
};
</script>

<style scoped>
.person-info {
  height: 868px;
  overflow: scroll;
  overflow-x: hidden;
}
table {
  text-align: center;
  border-collapse: collapse;
  color: #978a8a;
}
button {
  color: rgb(102, 177, 255);
  background-color: transparent;
  border: 0px;
}
button:hover {
  cursor: pointer;
  transform: scale(1.16);
  transition: 0.2s;
}
tr {
  border-bottom: 2px solid #eee;
}
tr:hover {
  background-color: rgb(245,247,250);
}
</style>