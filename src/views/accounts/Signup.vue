<template>
  <div id="signuptotal">
    <h3>[회원가입]</h3>
    <div style="text-align: left; margin-left:80px">
      <label for="username" style="width: 30%">사용자 이름: </label>
      <input type="text" id="username" v-model="credentials.username" style="margin-left: 20px; width: 50%">
    </div>
    <div style="text-align: left; margin-left:80px">
      <label for="password" style="width: 30%">비밀번호: </label>
      <input type="password" id="password" v-model="credentials.password" style="margin-left: 20px; width: 50%">
    </div>
    <div style="text-align: left; margin-left:80px">
      <label for="passwordConfirmation" style="width: 30%">비밀번호 확인: </label>
      <input 
        style="margin-left: 20px; width: 50%"
        type="password" 
        id="passwordConfirmation" 
        v-model="credentials.passwordConfirmation"
        @keypress.enter="signup"
      >
    </div>
    <button @click="signup" id="btn_group">방구석 가입</button>
  </div>
</template>

<script>
import axios from 'axios'


const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  
  name: 'Singup',
  
  data: function () {
    return {
      credentials: {
        username: '',
        password: '',
        passwordConfirmation: '',
      }
    }
  },
  methods: {
    signup: function () {
      axios.post(`${SERVER_URL}/accounts/signup/`, this.credentials)
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
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
  #signuptotal {
  width: 800px;
  border: 1px solid white;
  margin: auto;
  font-family: '국립박물관문화재단클래식B';
  font-size: '10px'

}

#username { 
color: #000000; 
font-family: '국립박물관문화재단클래식B';

}
</style>