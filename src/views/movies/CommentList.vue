<template>
  <div style="margin-top:15px">
      <div class="row" id="row">
        <div class="col-2">평점</div>
        <div class="col-2">작성자</div>
        <div class="col-3">내용</div>
        <div class="col-3">작성시간</div>
        <div class="col-2"></div>
      </div>
    <div class="row overflow-auto" style="max-height:750px;">
      <CommentListItem v-for="(comment, idx) in comments " 
      :key="idx"
      :comment="comment"
      :selectedMovie="selectedMovie"
      @delete-comment="deleteComment"
      @updated-comment="updatedComment"
      />
    </div>
  </div>
</template>

<script>
import CommentListItem from './CommentListItem'


export default {
  name: 'CommentList',
  components: {
    CommentListItem
  },
  props: {
    comments: Array,
    selectedMovie: Object,
  },
  methods: {
    deleteComment: function (commentData) {
      this.$emit('delete-comment', commentData)
    },
    updatedComment: function (commentData) {
      this.$emit('updated-comment', commentData)
    }
  }

}
</script>

<style>
#row {
  background-color: #ffffff;
  color: black;
}
</style>