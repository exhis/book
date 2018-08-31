import Vue from 'vue'
import Router from 'vue-router'
import play from '@/components/play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/play'
    },
    {
      path: '/play',
      name: 'play',
      component: play
    }
  ]
})
