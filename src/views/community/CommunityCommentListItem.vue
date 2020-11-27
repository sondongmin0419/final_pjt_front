<template>
  <div>
    <div v-if="!isUpdated">
      <div class="container m-0 p-0" style="width:980px;" v-if="article.id === comment.community_id">
        <div class="row m-auto"  >
          <div class="col-2">{{ comment.username }}</div>
          <div class="col-4">{{ comment.content  }}</div>
          <div class="col-3">{{ comment.created_at.substring(0,10)+'  ' +comment.created_at.substring(11,19)}}</div>
          <div class="col-3"><span  v-if="userAuthority+sameuser > 0">
            <button style="margin-right:10px" @click="updateComment" id="commentbutton">수정</button>
            <button style="margin-right:10px" @click="deleteComment" id="commentbutton">삭제</button>
          </span></div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="m-auto" style="width:980px;">
        <input style="background-color: white; margin-right:10px" type="text" name="" id="" v-model="updated_inputComment" 
        @keydown.enter="updatedComment()">
        <button @click="updatedComment">댓글수정</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityCommentListItem',
  data: function () {
    return {
      userAuthority: this.$store.state.userstaff == true? 1 : 0,
      isUpdated: false,
      updated_inputComment: '',
      loginUsername: this.$store.state.username,
      sameuser: 0,
    }
  },
  props: {
    comment: Object,
    article: Object,
  },
  methods: {
    updateComment: function () {
      this.updated_inputComment = this.comment.content
      this.isUpdated = true
    },
    updatedComment: function () {
      const commentData = {
        content: this.updated_inputComment,
        comment_id: this.comment.id
      }
      this.$emit('updated-comment', commentData)
      this.isUpdated = false
    },
    deleteComment: function () {
      const commentData = {
        comment_id: this.comment.id,
        article_id: this.article.id
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


}

</style>