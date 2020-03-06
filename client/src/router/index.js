import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedPage from '../feed/FeedPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Feed',
    component: FeedPage
  }
]

const router = new VueRouter({
  routes
})

export default router
