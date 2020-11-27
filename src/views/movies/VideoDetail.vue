<template>
  <div v-if="videoURI">
    <iframe :src="video_URI" frameborder="0" width="1200px" height="1000px" allowfullscreen></iframe>
    <!-- {{ video.snippet.title}} -->
  </div>
</template>

<script>
// import _ from 'lodash'

export default {
  name: 'VideoDetail', 
  data: function () {
    return {
      // video_url: 'https://www.youtube.com/embed/'+this.videoURI
    }
  },
  props: {
    videoURI: [Object, String]
  },
  computed: {
    video_URI: function () {
      const videoId =this.videoURI
      return `https://www.youtube.com/embed/${videoId}`
    }
  },
  filters: {
    // stringUnescape: function (rawText) {
    //   return _.unescape(rawText)
    // }
  }
}
</script>