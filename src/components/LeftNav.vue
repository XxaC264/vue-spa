<template>
  <div class="left-nav">
    <img
      src="http://qqpublic.qpic.cn/qq_public/0/0-3151658273-8A8DCE34884F39FD7D6D1E0AFA6860B4/0?fmt=jpg&size=18&h=350&w=600&ppv=1/0"
      alt="Logo"
      style="width: 200px"
    />
    <ul>
      <li>
        <router-link to="/home/person-info">人员信息</router-link>
      </li>
      <li>
        <keep-alive>
          <router-link to="/home/add-person">添加人员</router-link>
        </keep-alive>
        
      </li>
      <li>
        <router-link to="/home/game">游戏模块</router-link>
      </li>
      <li>
        <router-link to="/home/dance">舞蹈模块</router-link>
      </li>
      <li>
        <router-link to="/home/vip-person">会员管理</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
};
</script>

<style scoped>
.left-nav {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  width: 200px;
  height: 100%;
}
li:hover {
  background-color: rgb(236, 245, 255);
}
li a:focus {
  border-left: 5px solid rgb(174, 219, 236);
  background-color: rgb(236, 245, 255);

}
/* li {
  line-height: 56px;
  text-align: center;
  width: 160px;
  height: 56px;
  padding: 0px 20px;
} */
li a {
  display: inline-block;
  line-height: 56px;
  text-align: center;
  width: 160px;
  height: 56px;
  padding: 0px 20px;
  color: #888080;
  text-decoration: none;
}
</style>