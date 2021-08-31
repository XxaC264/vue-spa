import Vue from "vue";
import VueRouter from "vue-router";

// 导入需要的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/Home.vue'
import PersonInfo from '@/views/PersonInfo.vue'
import AddPerson from '@/views/AddPerson.vue'
import Game from '@/views/Game.vue'
import Dance from '@/views/Dance.vue'
import Welcome from '@/components/Welcome.vue'
import VipPerson from '@/views/VipPerson.vue'
import PersonDetails from '@/views/PersonDetails.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    {
      path: '/home', component: Home, children: [
        { path: '', component: Welcome },
        { path: 'person-info', component: PersonInfo },
        { path: 'add-person', component: AddPerson },
        { path: 'game', component: Game },
        { path: 'dance', component: Dance },
        { path: 'vip-person', component: VipPerson },
        { path: 'person-details/:title/:gender/:weapon/:skill/:birthplace/:teacher', component: PersonDetails, name: 'Details', props: true}
      ],
      beforeEnter(to, from, next){
        if(localStorage.getItem('UserName') === 'admin' && localStorage.getItem('PassWord') === 'a264567'){
          next();
        }else {
          alert("权限不够,请登录管理员账号")
        }
      }
    },
  ],
})
/* router.beforeEach((to, from, next) => {
  if(localStorage.getItem('admin') === 'a264567'){
    next();
  }else {
    alert("权限不够")
  }
}) */
export default router