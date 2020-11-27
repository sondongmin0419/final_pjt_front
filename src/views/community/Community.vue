<template>
  <div class="w-75 mx-auto" id="communitytotal">
    
    <h2 id="community">방구석에서 함께 떠들어요ㅋㅋㅋ</h2>
    <div>
      <hr>
      <CommunityList :articles="articles"
      />
    </div>
    <br>
    <div>
      <router-link :to="{ name: 'CommunityForm' }" style="color:black;" id="write">작성하기</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import CommunityList from './CommunityList'

const SERVER_URL = 'https://finalback.herokuapp.com'
export default {
  name: 'Community',
  data: function () {
    return {
      articles: [],
      selectedArticle: '',
    }
  },
  components: {
    CommunityList,
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')

      const config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
      return config
    },
    getArticles: function () {
      const config = this.setToken()

      axios.get(`${SERVER_URL}/community/`, config)
        .then((res) => {
          this.articles = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    
  },
  created: function () {
    if (localStorage.getItem('jwt')) {
      this.getArticles()
    } else {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
@font-face {
    font-family: 'KOTRA_BOLD-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#community {
  font-family: 'KOTRA_BOLD-Bold';
  /* background-color: white; */
  color: white;
  height: 70px;
  text-align:center;
  padding: 15px;
  width:1200px;
  margin: auto;
}
#write {
 border: 1px solid #fc0082; 
 background-color: #fc0082;  
 color: #fc0082; 
 padding: 5px;
 margin: 10px;
 font-family: 'KOTRA_BOLD-Bold';


}
</style>