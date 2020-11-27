<template>
  <div>
    <div v-if="article" >
        <!-- <div class="row mx-auto"  >
          <div class="col-3">글번호</div>
          <div class="col-3">제목</div>
          <div class="col-3">작성자</div>
          <div class="col-3">작성시간</div>
        </div> -->
   
      <div style="width:1200px; margin: auto"> <h1 >{{ article.title }}</h1>
      <span align="right">
        <div>
          <button style="margin-right: 20px" @click="deleteArticle">삭제   |</button>
          <button @click="updateArticle">수정</button>
        </div>
        </span>
      </div>
      <div id="detailTotal">
      <div style="min-height: 200px; margin-top:20px; text-align:left" >{{ article.content }}</div>
      <div>{{ article.updated }}</div>
      </div>
      <div v-if="userAuthority+sameuser > 0" style="margin-top:10px;">

      </div>
      <div>
        <button style="margin-top:10px;" @click="isCommentForm ? ngetComment() :  getComment()">댓글보기</button>
        <CommunityCommentList 
        v-if="isCommentForm"
        :comments="comments"
        :article="article"
        @updated-comment="updatedComment"
        @delete-comment="deleteComment"
        />

        <CommunityCommentForm
        style="margin-top: 20px"
        v-if="isCommentForm"
        @add-comment="addComment"/>
      </div>

      <br>
      <div>
        <!-- <router-link :to="{ name: 'CommunityForm' }" style="color:black;" id="write">작성하기</router-link> -->
        <button @click="closeDetail" style="width: 80px; margin-top:10px; color: #black;" id="back" >BACK</button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import CommunityCommentList from './CommunityCommentList'
import CommunityCommentForm from './CommunityCommentForm'

const SERVER_URL = process.env.VUE_APP_SERVER_URL


export default {
  name: 'CommunityDetail',

  data: function () {
    const article = this.$route.params.sel_article

    return { 
      isCommentForm: false,
      article: article,
      inputComment: '',
      comments: [],
      loginUsername: this.$store.state.username,
      userAuthority: this.$store.state.userstaff == true? 1 : 0,
      sameuser: 0,

    }
  },
  components: {
    CommunityCommentList,
    CommunityCommentForm,
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
    deleteArticle: function () {
      const config = this.setToken()
      
      axios.delete(`${SERVER_URL}/community/${this.article.id}/`, config)

        .then(() => {
          this.$router.push({ name: 'Community' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateArticle: function () {
      // const config = this.setToken()

      this.$router.push({
            name: 'CommunityForm',
            params: {
              article: this.article
            }
        })
      // axios.put(`${SERVER_URL}/community/${this.article.id}/`, this.article, config)
      //   .then(() => {
      //     this.getComment()
      //   })
      //   .catch((err) => {
      //     console.error(err)
      //   })
    },
    updatedComment: function (commentData) {
      const config = this.setToken()

      axios.put(`${SERVER_URL}/community/${this.article.id}/comment/${commentData.comment_id}/`, commentData, config)
        .then(() => {
          this.getComment()
        })
        .catch((err) => {
          console.error(err)
        })
    },
    addComment: function (commentData) {
      const config = this.setToken()
      
      axios.post(`${SERVER_URL}/community/${this.article.id}/comment/`, commentData, config)
        .then(() => {
          this.getComment()

        })
        .catch((err) => {
          console.error(err)
        })
    },
    deleteComment: function (commentData) {
      const config = this.setToken()
      
      axios.delete(`${SERVER_URL}/community/${commentData.article_id}/comment/${commentData.comment_id}/`, config)

        .then(() => {
          this.getComment()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getComment: function () {
      const config = this.setToken()
      this.isCommentForm = true
      axios.get(`${SERVER_URL}/community/${this.article.id}/comment/`, config)
        .then((res) => {
          this.comments = res.data
        })
        .catch((err) => {
          console.error(err)
        })
    },
    ngetComment: function () {

      this.isCommentForm = false
    },
    closeDetail: function () {
      this.$router.push({ name: 'Community'})
    }
  },
  created: function () {
    if (this.loginUsername == this.article.username) {
      this.sameuser+=1
    }
  }
}
</script>

<style scoped>
#detailTotal {
  text-align:center;
  padding: 15px;
  width:1200px;
  margin: auto;
  border: white solid 1px;
  color: #fc0082; 
}

#back {
    padding: 15px;
    border: #fc0082; 
    color: #fc0082; 

}
 /* border: 1px solid #fc0082;  */
 /* background-color: #fc0082;
 color: #000000; 
 padding: 10px;
 margin: 5px; */


</style>