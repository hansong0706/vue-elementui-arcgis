import Vue from 'vue'
import Router from 'vue-router'
import HelloMap from '@/components/HelloMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloMap',
      component: HelloMap
    }
  ]
})
