import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/home/Index.vue') // list
const Detail = () => import(/* webpackChunkName: "Detail" */'@/detail/Index.vue')
const About = () => import(/* webpackChunkName: "Detail" */'@/about/Index.vue')
// const About = () => import(/* webpackChunkName: "Detail" */'@/About/.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Home,
  }, {
    path: '/index.html',
    name: 'HomeHtml',
    component: Home,
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  }, {
    path: '/about',
    name: 'About',
    component: About,
  }
  ],
})
