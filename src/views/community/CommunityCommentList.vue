<template>
  <div>
    <div class="container " style="width: 1000px">
      <div class="row" id="row">
        <div class="col-2">작성자</div>
        <div class="col-4">내용</div>
        <div class="col-3">작성시간</div>
        <div class="col-3"></div>
      </div>
      <div class="row overflow-auto" style="max-height:500px; ">
        <CommunityCommentListItem v-for="(comment, idx) in comments"
        :key="idx"
        :comment="comment"
        :article="article"
        @delete-comment="deleteComment"
        @updated-comment="updatedComment"
        
        />

      </div>
    </div>
  </div>
</template>

<script>
import CommunityCommentListItem from './CommunityCommentListItem'

export default {
  name: 'CommunityCommentList',
  components: {
    CommunityCommentListItem,
  },
  props: {
    comments: Array,
    article: Object,
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