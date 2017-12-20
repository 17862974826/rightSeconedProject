import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index/index'
import citySelector from '../page/citySelector/citySelector'
import Detail from '../page/detail/hotDetail'

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
      path: '/city/:id',
      name: 'city',
      component: citySelector
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
