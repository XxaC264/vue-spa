<template>
  <div class="box">
    <img src="@/assets/logo.png" alt="" />
    <div class="myLogin">
      <ul>
        <li>
          <el-input
            v-model.trim="userName"
            placeholder="请输入内容"
            class="input user-name"
            @keyup.enter="login"
            autofocus
            clearable
          ></el-input>
        </li>
        <li>
          <el-input
            placeholder="请输入密码"
            v-model.trim="passwd"
            show-password
            @keyup.enter="login"
            class="input passwd"
          ></el-input>
        </li>
      </ul>
      <input type="button" value="登录" @click="login" class="btn login" />
      <input type="button" value="清空" @click="cls" class="btn cls" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLogin",
  data() {
    return {
      userName: "",
      passwd: "",
    };
  },
  methods: {
    login() {
      if (this.userName === "admin" && this.passwd === "a264567") {
        localStorage.setItem("UserName", this.userName);
        localStorage.setItem("PassWord", this.passwd);
        this.$router.push("/home");
        this.$message({
          message: '登录成功',
          type: 'success'
        });
      } else {
        // alert("登录失败");
        this.$message.error('账号或密码错误');
        localStorage.clear();
      }
      (this.userName = ""), (this.passwd = "");
    },
    cls() {
      (this.userName = ""), (this.passwd = "");
    },
  },
};
</script>

<style scoped>
.box {
  margin-top: 80px;
  text-align: center;
}
.myLogin {
  text-align: center;
  margin: 0 auto;
  box-shadow: #eee 0px 0px 20px 1px;
  border-radius: 8px;
  width: 600px;
}
ul {
  list-style-type: none;
}
.input {
  width: 546px;
  height: 28px;
  margin-top: 20px;
}
.input:focus {
  outline: none;
  box-shadow: 0px 0px 10px 1px rgb(65, 184, 131);
}
.btn {
  width: 110px;
  height: 35px;
  margin: 10px;
  background-color: rgb(65, 184, 131);
  border: 0px;
  border-radius: 8px;
}
.cls {
  background-color: rgb(230, 162, 60);
}
</style>