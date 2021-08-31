<template>
  <div class="box">
    <img src="@/assets/logo.png" alt="" />
    <div class="myLogin">
      <ul>
        <li>
          <input
            type="text"
            placeholder="请输入用户名"
            v-model.trim="userName"
            class="input user-name"
            @keyup.enter="login"
            autofocus
          />
        </li>
        <li>
          <input
            type="password"
            placeholder="请输入密码"
            v-model.trim="passwd"
            class="input pass-word"
            @keyup.enter="login"
          />
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
        localStorage.setItem('UserName', this.userName);
        localStorage.setItem('PassWord', this.passwd);
        this.$router.push("/home");
      } else {
        alert("登录失败");
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
  margin-top: 10px;
  padding: 4px 7px;
  border: 1px solid #ccc;
  border-radius: 8px;
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