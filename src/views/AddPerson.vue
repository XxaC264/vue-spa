<template>
  <div class="add-person">
    <ul>
      <li><h4>添加基础信息</h4></li>
      <li>
        <input
          type="date"
          placeholder="请输入人员日期"
          id="input1"
          v-model="personDate"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="请输入人员姓名"
          id="input2"
          v-model.trim="personName"
          @keydown.enter="add"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="请输入人员省份"
          id="input3"
          v-model.trim="personCity"
          @keydown.enter="add"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="请输入人员地址"
          id="input4"
          v-model.trim="personAddress"
          @keydown.enter="add"
        />
      </li>
      <li><hr /></li>
      <li><h4>添加详细信息</h4></li>
      <li>
        <input
          type="text"
          placeholder="请输入人员性别"
          v-model.trim="personDetailsGender"
          @keydown.enter="add"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="请输入人员武器"
          v-model.trim="personDetailsWeapon"
          @keydown.enter="add"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="请输入人员技能"
          v-model.trim="personDetailsSkill"
          @keydown.enter="add"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="请输入人员出生地"
          v-model.trim="personDetailsBirthplace"
          @keydown.enter="add"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="请输入人员师父"
          v-model.trim="personDetailsTeacher"
          @keydown.enter="add"
        />
      </li>
      <li><button @click="add">添加</button></li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "AddPerson",
  data() {
    return {
      personDate: "",
      personName: "",
      personCity: "",
      personAddress: "",
      personDetailsGender: "",
      personDetailsWeapon: "",
      personDetailsSkill: "",
      personDetailsBirthplace: "",
      personDetailsTeacher: "",
    };
  },
  methods: {
    add() {
      // 判断输入是否为空
      if (this.personDate === "" || this.personDate === undefined) {
        this.$message.error('创建时间不能为空');
        return;
      } else if (this.personName === "" || this.personName === undefined) {
        this.$message.error('人员姓名不能为空');
        return;
      } else if (this.personCity === "" || this.personCity === undefined) {
        this.$message.error('人员省份不能为空');
        return;
      } else if (
        this.personAddress === "" ||
        this.personAddress === undefined
      ) {
        this.$message.error('人员地址不能为空');
        return;
      }
      // 添加数据
      // let tableList = this.$store.state.tableList;

      this.$store.state.tableList.push({
        id: nanoid(),
        date: this.personDate,
        name: this.personName,
        city: this.personCity,
        address: this.personAddress,
        details: {
          title:
            this.$store.state.tableList[this.$store.state.tableList.length - 1]
              .name,
          gender: this.personDetailsGender,
          weapon: this.personDetailsWeapon,
          skill: this.personDetailsSkill,
          birthplace: this.personDetailsBirthplace,
          teacher: this.personDetailsTeacher,
        },
      });

      this.$message({
        message: `${this.personName}，添加成功`,
        type: "success",
      });
      // 清空输入
      this.personDate = "";
      this.personName = "";
      this.personCity = "";
      this.personAddress = "";
      this.personDetailsGender = "";
      this.personDetailsWeapon = "";
      this.personDetailsSkill = "";
      this.personDetailsBirthplace = "";
      this.personDetailsTeacher = "";
    },
  },
};
</script>

<style scoped>
.add-person {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  height: 868px;
  overflow: scroll;
  overflow-x: hidden;
}

input {
  width: 546px;
  height: 28px;
  margin-top: 10px;
  padding: 4px 7px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
input:focus {
  outline: none;
  box-shadow: 0px 0px 10px 1px rgb(65, 184, 131);
}
li {
  list-style-type: none;
}
button {
  border: rgb(64, 158, 255) 1px solid;
  height: 34px;
  width: 68px;
  border-radius: 8px;
  margin-top: 20px;
  background-color: rgb(64, 158, 255);
  color: white;
}
</style>