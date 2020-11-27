<template>
  <div>
    <div style="margin-top: 15px;">
    <star-rating v-model="rating" style="display: inline-block"
    :show-rating="false" :star-size="25"></star-rating>
    <input type="text" name="" id="" v-model="inputComment" @keydown.enter="comment_id !== undefined ? updatedComment() : addComment()"
    style="display: inline-block; margin-left: 15px; background-color:white;">
    <button @click="comment_id !== undefined ? updatedComment() : addComment()" id="btn" style="display: inline-block; margin-left: 15px; ">댓글등록</button>
    </div>
  </div>
</template>


<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'CommentForm',
  data: function () {
    const updateComment = this.$route.params.comment

    return {
      inputComment: updateComment !== undefined ? updateComment.content : '',
      rating: updateComment !== undefined ? updateComment.rank : 0,
      comment_id : updateComment !== undefined ? updateComment.comment_id : undefined,
    }
  },
  components: {
    StarRating,
  },

  methods: {
    addComment: function () {
      const commentItem = {
        rank: this.rating,
        content: this.inputComment,
      }
      this.inputComment = ""
      this.rating = 0
      this.$emit('add-comment', commentItem)
    },
    updatedComment: function () {
      const commentItem = {
        rank: this.rating,
        content: this.inputComment,
        comment_id: this.comment_id,
      }
      this.$emit('update-comment', commentItem)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>
#btn {
 border: 1px solid #ffffff; 
 /* background-color: rgba(0,0,0,0);  */
 color: #ffffff; 
 padding: 5px;
}

#writecomment {
   color: #ffffff; 

}


#cmtbtn {
 border: 1px solid #ffffff; 
 background-color: rgba(0,0,0,0); 
 color: #ffffff; 
 padding: 5px;
 margin: 10px;
}
</style>