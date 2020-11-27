<template>
  <div style="width: 100%">
    <div v-if= "!isUpdated">
      <div class="container" v-if="selectedMovie.id === comment.movie_id">
        <div class="row">
          <div class="col-2"><star-rating v-model="comment.rank" :read-only="true" style="display: inline-block" :star-size="15" :show-rating="false"></star-rating></div>
          <div class="col-2">{{ comment.username }}</div>
          <div class="col-3">{{ comment.content }}</div>
          <div class="col-3">{{ comment.created_at.substring(2,10)+'  ' +comment.created_at.substring(11,16)}}</div>
          <div class="col-2">
            <div  v-if="userAuthority+sameuser > 0">
              <button @click="updateComment" id="commentbutton">수정</button>
              <button @click="deleteComment" id="commentbutton">삭제</button>
            </div>
              
          </div>
          
        </div>
      </div>
    </div>

    <div v-else>
      <div style="display: inline-block;">
        <star-rating style="display: inline-block;" v-model="updated_rating" :show-rating="false" :star-size="25"></star-rating>
        <input style="background-color: white; margin-left:10px;" type="text" name="" id="" v-model="updated_inputComment" 
        @keydown.enter="updatedComment()">
        <button style="margin-left: 10px; margin-top: 20px" @click="updatedComment">댓글수정</button>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'CommentListItem',
  data: function () {
    return {
      isUpdated: false,
      updated_inputComment: '',
      updated_rating: 0,
      loginUsername: this.$store.state.username,
      userAuthority: this.$store.state.userstaff == true? 1 : 0,
      sameuser: 0,
    }
  },
  components: {
    StarRating,

  },
  props: {
    comment: Object,
    selectedMovie: Object
  },
  methods: {
    updateComment: function () {
      this.isUpdated = true
      this.updated_inputComment = this.comment.content
      this.updated_rating = this.comment.rank
    },
    updatedComment: function () {
      const commentData = {
        rank: this.updated_rating,
        content: this.updated_inputComment,
        comment_id: this.comment.id
      }
      this.$emit('updated-comment', commentData)
      this.isUpdated = false
    },
    deleteComment: function () {
      const commentData = {
        comment_id: this.comment.id,
        selectedMovie_id: this.selectedMovie.id
      }
      this.$emit('delete-comment', commentData)
    }
  },
  created: function () {
    if (this.loginUsername == this.comment.username) {
      this.sameuser+=1
    }
  }
  
}
</script>


<style>
#commentbutton {
 /* border: 1px solid #fc0082;  */
  color: #fc0082;
padding: 5px; 
 margin: 10px
 /* background-color: rgba(0,0,0,0); 
 

font-family: 'BMHANNAAir';

 /* background-color: rgba(117, 190, 218, 0.5);  50% 불투명도 */

}
#update{
 border: 1px solid #ffffff;  
 padding: 5px;
 margin: 10px;
 background-color: white;
}
</style>