import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index/index'
import citySelector from '../page/citySelector/citySelector'
Vue.use(Router)

export default new Router({
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
    }
  ]
})
