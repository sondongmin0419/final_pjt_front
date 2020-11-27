<template>
  <div>
    <div>
      <ImageSliderList
      :movieList="movieList"/>
    </div>
    <div>
      <br>
      <span style="color:#52EBB8"><h3  style="text-align:left" class="ml-5">코로나 방역의 영웅,</h3></span>
      <h2 id="explanation" style="text-align:left" class="ml-5"><span style="color:#52EBB8">{{ this.$store.state.username }}</span>님이 좋아하실 만한 영화입니다.</h2>
      <LikeMovieList
      v-if="likedMovieList.length > 0"
      :likedMovieList="likedMovieList"/>
      <div v-else>
        <p style="text-align: left; margin-left:50px; font-size:3rem;">정보가 부족합니다. 평점과 댓글을 남겨주세요!</p>
      </div>
    </div>
  </div>

</template>

<script>
import ImageSliderList from './ImageSliderList'
import LikeMovieList from './LikeMovieList'


export default {
  name: 'Home',
  components: {
    ImageSliderList,
    LikeMovieList,
  },
  data: function () {
    return {
      movieList: [],
      likedMovieList: [],
    }
  },
  methods: {
    likeListget: function () {
      const movieList = this.$store.state.movieList
      for (var k=0; k < movieList.length; k++) {
        const movie = movieList[k]
        var liked = 0
        for(var i=0; i<movie.genre.length; i++) {
          if (movie.genre[i] == localStorage.likeGenre_1) {
            liked += 1
          }
          if (movie.genre[i] == localStorage.likeGenre_2) {
            liked += 1
          }        
        }
        if (liked > 0) {
          this.likedMovieList.push(movie)
        }  
      }
    },
  },
  created: function () {
    this.movieList = this.$store.state.movieList
    this.likeListget()
    
  } 
}
</script>

<style>
@font-face {
    font-family: 'KOTRA_BOLD-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#home {
    font-family: 'KOTRA_BOLD-Bold';
        /* color: #ff90c9af;  */


}
#username { 
    font-size: 30px;
    font-family: 'BMEULJIRO';
}

@font-face {
    font-family: 'BMEULJIRO';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>