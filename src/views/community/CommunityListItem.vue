<template>
  <div>
    <div class="container">
      <div class="row" @click="selectArticle">
        <div class="col-3">{{ article.id }}번글</div>
        <div class="col-3" id="titles">{{ article.title }}</div>
        <div class="col-3">{{ article.username }}</div>
        <div class="col-3">{{ article.created_at.substring(0,10)+'  ' +article.created_at.substring(11,19)}}</div>
      </div>
    </div>
  </div>  

</template>

<script>

export default {
  name: 'VideoListItem', 
  props: {
    article: Object,
  },
  methods: {
    selectArticle: function () {
      this.$emit('select-article', this.article)
    }
  },
}
</script>
<style>
#titles{
 color: #f868b2;
}
</style>