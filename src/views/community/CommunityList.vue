<template>
    <div id="listTotal">
      <div class="container">
        <div class="row mx-auto"  >
          <div class="col-3">글번호</div>
          <div class="col-3">제목</div>
          <div class="col-3">작성자</div>
          <div class="col-3">작성시간</div>
        </div>
      </div>
      <CommunityListItem v-for="(article, idx) in articles"
        :key="idx"
        :article="article"
        @select-article="selectArticle"/>
  </div>
</template>

<script>
import CommunityListItem from './CommunityListItem'


export default {
  name: 'CommunityList',
  data: function () {
    return {
      article: [],
    }
  },
  props: {
    articles: Array,
  },
  components: {
    CommunityListItem
  },
  methods: {
    selectArticle: function (article) {
      this.selectedArticle = article

      this.$router.push({
        name: 'CommunityDetail',
        params: {
          sel_article: this.selectedArticle
        }
      })

    }
    
  },

}
</script>

<style scoped>
#row {
  background-color: rgb(197, 184, 184);
}
#listTotal {
  border: white solid 1px;
  width: 1200px;
  margin: auto;
}
.container {
  border: white solid 1px;
}
</style>