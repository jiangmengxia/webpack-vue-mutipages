import Vue from 'vue'
import Router from 'vue-router'
import Comment from '../components/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Comment
    }
  ]
})
