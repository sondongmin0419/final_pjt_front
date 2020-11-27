import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/accounts/Signup'
import Login from '../views/accounts/Login'
import Community from '../views/community/Community'
import CommunityForm from '../views/community/CommunityForm'
import CommunityDetail from '../views/community/CommunityDetail'
import CommunityList from '../views/community/CommunityList'
import CommentForm from '../views/movies/CommentForm'
import Home from '../views/movies/Home'
import MovieDetail from '../views/movies/MovieDetail'
import Profile from '../views/accounts/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movies/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/community/community',
    name: 'Community',
    component: Community,
  },
  {
    path: '/community/communityform',
    name: 'CommunityForm',
    component: CommunityForm,
  },
  {
    path: '/community/communitydetail',
    name: 'CommunityDetail',
    component: CommunityDetail,
  },
  {
    path: '/community/communitylist',
    name: 'CommunityList',
    component: CommunityList
  },
  {
    path: '/movies/commentform',
    name: 'CommentForm',
    component: CommentForm,
  },
  {
    path: '/movies/moviedetail',
    name: 'MovieDetail',
    component: MovieDetail,
  },
  {
    path: '/accounts/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
