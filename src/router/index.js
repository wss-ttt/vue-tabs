import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/index',
      name:'index',
      component:resolve=>require(['@/views/index.vue'],resolve)
    },
    {
      path:'/index2',
      name:'index2',
      component:resolve=>require(['@/views/index2.vue'],resolve)
    },
    {
      path:'/index3',
      name:'index3',
      component:resolve=>require(['@/views/index3.vue'],resolve)
    },
  ]
})
