<template>
  <div id="logintotal">
    로그인
    <div style="text-align: left; margin-left:80px">
      <label for="username" style="width: 25%">이름 :</label>
      <input type="text" id="username" v-model="credentials.username" style="margin-left: 20px; width: 50%">
    </div>
    <div style="text-align: left; margin-left:80px">
      <label for="password" style="width: 25%">비밀번호 :</label>
      <input type="password" id="password" v-model="credentials.password" style="margin-left: 20px; width: 50%">
    </div>

    <button @click="login" id="btn_group" >방구석 입장</button>
  </div>
</template>
   
<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    login () {

      axios.post(`${SERVER_URL}/accounts/api-token-auth/`, this.credentials)
        .then(res => {
          localStorage.setItem('jwt', res.data.token)
          this.$emit('login')
          if (this.credentials.username) {
            this.$store.state.username = this.credentials.username
            localStorage.loginId = this.credentials.username
            localStorage.password = this.credentials.password
          }


          this.$router.push({ name: 'Home' })
          this.getUser()
        })
        .catch(err => {
          console.error(err)
        })
    },
  },
  created: function () {
    console.log('dsafadsf')
    this.login()
  }
}
</script>

<style>
#btn_group {
 border: 1px solid #fc0082; 
 background-color: rgba(0,0,0,0); 
 color: #fc0082; 
 padding: 5px;
 margin: 10px;
}
@font-face {
    font-family: '국립박물관문화재단클래식B';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/국립박물관문화재단클래식B.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'BMEULJIRO';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#name {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    /* font-family: 'BMHANNAAir'; */
  color: #ffffff;
  text-decoration-color: white;
  font-size: 20px;

}
#password {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    /* font-family: 'BMHANNAAir'; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  background-color: white;
  /* text-align: center; */
  font-size: 30px;
}
#username {
  background-color: white;
}
/* #password {
  color: #ffffff;
  text-decoration-color: white; */
/* } */
#logintotal {
  width: 800px;
  border: 1px solid white;
  margin: auto;
  font-family: '국립박물관문화재단클래식B';

}
#passwordConfirmation{
  background-color: white;
  font-size: 30px;
  
}
/* #username { 
color: #000000; 
font-family: '국립박물관문화재단클래식B';

} */
</style>