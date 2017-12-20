import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index/index'
import OneDayTour from '@/page/iconDetail/oneDayTour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/iconDetail/:id',
      name: 'oneDayTour',
      component: OneDayTour
    }
  ]
})
