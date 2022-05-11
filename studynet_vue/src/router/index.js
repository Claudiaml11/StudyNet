import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'

import MyAccount from '../views/dashboard/MyAccount.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'log-in',
    component: LogIn
  },
  {
    path: '/courses',
    name: 'courses',
    component: Courses
  },
  {
    path: '/courses/:slug',
    name: 'Course',
    component: Course
  },

  {
    path: '/dashboard/my-account',
    name: 'my-account',
    component: MyAccount
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
