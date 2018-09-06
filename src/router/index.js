import Vue from 'vue'
import Router from 'vue-router'
import play from '@/components/play'
import wxplay from '@/components/wxplay'

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
    },
    {
      path: '/wxplay',
      name: 'wxplay',
      component: wxplay
    }
  ]
})
