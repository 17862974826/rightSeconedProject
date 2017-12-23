import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index/index'
import oneDayTour from '@/page/oneDayTour/oneDayTour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/oneDayTour',
      name: 'oneDayTour',
      component: oneDayTour

    }
  ]
})
