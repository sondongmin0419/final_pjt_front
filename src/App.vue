<template>
  <div id="app">
    <div >
       <div class="col">
      <nav class="navbar navbar-expand-lg" >
      <img src="./assets/최종_LOGO.png" class="d-flex align-center" width="450" height="150"  transition="scale-transition" loading="lazy">
      <span v-if="login">
        <router-link :to="{ name: 'Home'}" style="color:white; "  >홈</router-link> |
        <router-link :to="{ name: 'Community' }" style="color:white;">방구석게시판</router-link> |
        <router-link :to="{ name: 'Profile' }" style="color:white; ">이불 밖은 위험해</router-link>  |    
        <router-link @click.native="logout" to="#" style="color:white;">로그아웃</router-link> 
       

        <span class="col order-12" id="name"  > 
          {{ this.$store.state.username }}님 반가워요!
        </span>     


      </span>
      <span v-else>
        <router-link :to="{ name: 'Login' }" style="color:white;">Login</router-link> |
        <router-link :to="{ name: 'Signup' }" style="color:white;">Signup</router-link>
      </span>
      
    </nav>
    </div>
    <router-view @login="login = true"/>
  </div>
</div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = 'https://finalback.herokuapp.com'
export default {
  name: 'App',
  data: function () {
    return {
      login: false,
      user: [],
      username: this.$store.state.username
    }
  },
  methods: {
    logout: function() {
      localStorage.removeItem('jwt')
      this.login = false
      this.$router.push({ name: 'Login' })
      localStorage.login_userstaff = ''
      localStorage.loginId = ''
      localStorage.likeGenre_1 = undefined
      localStorage.likeGenre_2 = undefined
    },
    getUser: function () {
      const loginUsername = this.$store.state.username
      axios.get(`${SERVER_URL}/accounts/${loginUsername}/`)
      .then((res) => {
        console.log(res.data.is_staff)
        this.$store.state.userstaff = res.data.is_staff
        localStorage.login_userstaff = res.data.is_staff
      })
      axios.get(`${SERVER_URL}/accounts/${this.$store.state.username}/recommend/`)
        .then((res) => {
          localStorage.likeGenre_1 = res.data[0].id
          localStorage.likeGenre_2 = res.data[1].id
        })    
      axios.get(`${SERVER_URL}/movie/corona/`)
        .then((res) => {
          console.log(res.data)
          this.$store.state.coronaData = res.data
        })
      },
    addData() {
      axios.get(`${SERVER_URL}/movie/`)
        .then((res) => {
          this.$store.state.movieList = res.data
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
  created: function () {
    if (!this.username) {
      this.$store.state.username = localStorage.loginId
      this.$store.state.password = localStorage.password
    }
    console.log('app')
    this.addData()
    console.log(this.$store.state.movieList)
    console.log('app2')
    this.getUser()
    const token = localStorage.getItem('jwt')
    
    if (token) {
      this.login = true
    }
  },
  udpated: function () {
    const token = localStorage.getItem('jwt')
    
    if (token) {
      this.login = true
    }
  }
}
</script>

<style scoped>

@font-face {
    font-family: '국립박물관문화재단클래식B';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/국립박물관문화재단클래식B.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'BMHANNAAir';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'BMEULJIRO';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    font-family: 'BMHANNAAir';
  color: #ffffff;
  font-size: 30px;

}

#name {
      font-family: '국립박물관문화재단클래식B';

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */

  .router-link-active {
    /* color: white; */
    /* background-color: red; */
  }

  .router-link-exact-active {
    color: #85546d; 
    background-color:#b17594; 
  }
</style>
