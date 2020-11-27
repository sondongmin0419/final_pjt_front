import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios"



Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    username: localStorage.loginId,
    userstaff: localStorage.login_userstaff,
    usersuperuser: 0,
    like_movies: [],
    movieList: [],
    coronaData: [],
  },
  mutations: {
  },
  actions: {
    
  },  
  modules: {
  }
})
