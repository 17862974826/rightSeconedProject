import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index/index'
import Detail from '../page/detail/hotDetail'
import hotSpring from '../page/hotSpring/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/hotSpring',
      name: 'hotSpring',
      component: hotSpring
    }
  ]
})
