import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Member from '@/pages/Member'
import Task from '@/pages/Task'
import MyTask from '@/pages/MyTask'
import Analyze from '@/pages/Analyze'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Member
  }, {
    path: '/member',
    component: Member
  }, {
    path: '/task',
    component: Task
  }, {
    path: '/myTask',
    component: MyTask
  }, {
    path: '/analyze',
    component: Analyze
  }]
})
