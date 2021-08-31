<template>
  <div class="person-details">
    <!-- <ul>
      <li v-for="(i, index) in $store.state.tableList" :key="index">{{ i.name }}</li>
    </ul> -->
    <ul>
      <li>姓名: {{ title }}</li>
      <li>性别: {{ gender }}</li>
      <li>兵器: {{ weapon }}</li>
      <li>主要技能: {{ skill }}</li>
      <li>出生地: {{ birthplace }}</li>
      <li>师傅: {{ teacher }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonDetails",
  props: [
    "title",
    "gender",
    "weapon",
    "skill",
    "birthplace",
    "teacher",
    "country",
  ],
  mounted() {
    // console.log(typeof this.title);
  },
};
</script>

<style scoped>
.person-details {
  height: 868px;
  overflow: scroll;
  overflow-x: hidden;

}
li {
  list-style-type: none;
}
</style>