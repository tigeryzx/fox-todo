import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Member from '@/pages/Member'
import Task from '@/pages/Task'
import MyTask from '@/pages/MyTask'
import Analyze from '@/pages/Analyze'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Login
  }, {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/member',
        component: Member
      }, {
        path: '/home/task',
        component: Task
      }, {
        path: '/home/myTask',
        component: MyTask
      }, {
        path: '/home/analyze',
        component: Analyze
      }
    ]
  }]
})
