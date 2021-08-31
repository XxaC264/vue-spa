import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [
      'Dance',
      'Game',
      'Movies',
      'Music',
      'Person'
    ],
    tableList: [
      {
        id: 1,
        date: "1010-6-13",
        name: "悟空",
        city: "西游",
        address: "花果山",
        details:
          { detailsName: '悟空', gender: '男', weapon: '如意金箍棒', skill: "七十二变", birthplace: "东胜神州傲来国花果山", teacher: '须菩提祖师', }

      },
      {
        id: 2,
        date: "1020-7-22",
        name: "八戒",
        city: "西游",
        address: "高老庄",
        details:
          { detailsName: '八戒', gender: '男', weapon: '九齿钉耙', skill: "三十六变", birthplace: "高老庄", teacher: '东华帝君', }

      },
      {
        id: 3,
        date: "1030-8-31",
        name: "沙僧",
        city: "西游",
        address: "流沙河",
        details:
          { detailsName: '沙僧', gender: '男', weapon: '降妖宝杖', skill: "七十二变", birthplace: "流沙河", teacher: '唐僧', }

      },
      {
        id: 4,
        date: "1016-9-01",
        name: "唐僧",
        city: "西游",
        address: "大唐",
        details:
          { detailsName: '唐僧', gender: '男', weapon: '九环锡杖', skill: "七十二变", birthplace: "大唐", teacher: '未知', }

      },
      {
        id: 5,
        date: "904-9-01",
        name: "黄眉大王",
        city: "西游",
        address: "小西天小雷音寺",
        details:
          { detailsName: '黄眉大王', gender: '男', weapon: '短软狼牙棒', skill: "七十二变", birthplace: "小西天小雷音寺", teacher: '未知', }

      },
      {
        id: 6,
        date: "1001-9-01",
        name: "金角大王",
        city: "西游",
        address: "平顶山莲花洞",
        details:
          { detailsName: '金角大王', gender: '男', weapon: '七星剑', skill: "紫金红葫芦", birthplace: "平顶山莲花洞", teacher: '未知', }

      },
      {
        id: 4,
        date: "1240-9-01",
        name: "蜘蛛精",
        city: "西游",
        address: "盘丝洞",
        details:
          { detailsName: '蜘蛛精', gender: '女', weapon: '无', skill: "吐丝", birthplace: "盘丝岭盘丝洞", teacher: '未知', }

      },
    ],
  },
  actions: {},
  mutations: {},
  getters: {}
})