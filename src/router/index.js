import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import Index from '@/views/index/index'
import Index from '@/page/index'
import UiElements from '@/page/ui-elements'

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
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ui-elements',
      name: 'UiElements',
      component: UiElements
    }
  ]
})