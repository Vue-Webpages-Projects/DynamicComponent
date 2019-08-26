import Vue from 'vue'
import Router from 'vue-router'
import DevsTab from '@/components/DevsTab'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DevsTab',
      component: DevsTab
    },
  ]
})
