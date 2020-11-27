
<template>
  <div id="formTotal">
    <h2 style="text-align:center">게시판</h2>

    <div style="width: 600px; margin: auto;">
      <label for="title" style="margin-right: 10px; width: 100px">title</label>
      <input style="background: white; width: 450px " type="text" name="title" id="" v-model="inputTitle">
    </div>
    <div style="width: 600px; margin: auto;">
      <label for="content" style="margin-right: 10px; width: 100px">content</label>
      <input style="background: white; min-height: 400px; width: 450px" type="text-aria" name="content" id="content" v-model="inputContent">
    </div>
    <div >
      <button @click="updatedIdx !== undefined ? editArticle() : createArticle()" id="complete" style="color:black">{{ updatedIdx !== undefined ? '수정완료' : '완료' }}</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = 'https://finalback.herokuapp.com'
export default {
  name: 'CommunityForm',
  data: function () {
    const updateArticle = this.$route.params.article
    
    return {
      updatedIdx: updateArticle !== undefined ? updateArticle.id : undefined,
      inputTitle: updateArticle !== undefined ? updateArticle.title : '',
      inputContent: updateArticle !== undefined ? updateArticle.content : '',
    }
  },
  methods: {
    createArticle: function () {

      const articleItem = {
        title: this.inputTitle,
        content: this.inputContent,

      }
      const token = localStorage.getItem('jwt')

      const config = {
        headers: {
          Authorization: `JWT ${token}`
        }

      }
      axios.post(`${SERVER_URL}/community/`, articleItem, config)
        .then(res => {

          this.$router.push({
            name: 'CommunityDetail',
            params: {
              sel_article: res.data
            }
        })
        })
        .catch(err => {
          console.error(err)
        })
    },
    editArticle: function () {
      const articleItem = {
        title: this.inputTitle,
        content: this.inputContent,

      }
      const token = localStorage.getItem('jwt')

      const config = {
        headers: {
          Authorization: `JWT ${token}`
        }

      }
      axios.put(`${SERVER_URL}/community/${this.updatedIdx}/`, articleItem, config)
        .then(res => {

          this.$router.push({
            name: 'CommunityDetail',
            params: {
              sel_article: res.data
            }
        })
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>
#formTotal {
  border: white solid 1px;
  width: 1000px;
  text-align:center;
  padding: 15px;
  width:1200px;
  margin: auto;
}
#complete {

 border: 1px solid #fc0082; 
 background-color: #fc0082;  
 color: #fc0082; 
 padding: 5px;
 margin: 10px;
 font-family: 'KOTRA_BOLD-Bold';

}
</style>