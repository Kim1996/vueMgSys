import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import Index from '@/views/index/index'
import Index from '@/page/pc/index'
import UiElements from '@/page/pc/ui-elements'
import Charts from '@/page/pc/charts'
import TodoList from '@/page/pc/todolist'

import MbiIndex from '@/page/mbi/index.vue'
import Signin from '@/page/mbi/sign-in.vue'
import Signup from '@/page/mbi/sign-up.vue'
import Intro from '@/page/mbi/intro.vue'
import Home from '@/page/mbi/home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    /* {
      path: '/',
      name: 'Index',
      component: Index
    } */
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/manageSys/ui-elements',
      name: 'UiElements',
      component: UiElements
    },
    {
      path: '/manageSys/charts',
      name: 'Charts',
      component: Charts
    },
    {
      path: '/manageSys/todolist',
      name: 'TodoList',
      component: TodoList
    },
    // {
    //   path: '/',
    //   name: 'MbiIndex',
    //   component: MbiIndex
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mbi/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/mbi/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/mbi/intro',
      name: 'Intro',
      component: Intro
    }
  ]
})
