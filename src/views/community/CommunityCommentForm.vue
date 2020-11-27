<template>
  <div>
    <div >
    <input style="background: white;" type="text" name="" id="" v-model="inputComment" @keydown.enter="comment_id !== undefined ? updatedComment() : addComment()">
    <button style="margin-left: 10px" @click="comment_id !== undefined ? updatedComment() : addComment()">댓글등록</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommunityCommentForm',
  data: function () {
    const updateComment = this.$route.params.comment
    return {
      inputComment: updateComment !== undefined ? updateComment.content : '',
      comment_id : updateComment !== undefined ? updateComment.comment_id : undefined,
    }
  },
  components: {
  },
  methods: {
    addComment: function () {
      const commentItem = {
        content: this.inputComment,
      }
      this.$emit('add-comment', commentItem)
      this.inputComment = ""
    },
    updatedComment: function () {
      const commentItem = {
        content: this.inputComment,
        comment_id: this.comment_id,
      }
      this.$emit('update-comment', commentItem)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style>

</style>