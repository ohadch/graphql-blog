import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedPage from '../feed/FeedPage'
import EditorPage from '../editor/EditorPage'
import LoginPage from '../login/LoginPage'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Feed',
    component: FeedPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/editor',
    name: 'Editor',
    component: EditorPage
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")
  return token ? next() : next({
    path: "/login"
  })
})

export default router