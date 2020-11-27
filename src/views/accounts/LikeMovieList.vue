<template>
  <div>

    <hooper :itemsToShow="3" :itemsToSlide="3" style="height: auto"  class="img-fluid" alt="Responsive image">
      <slide v-for="(movie, idx) in likedMovieList"
      :key="idx"
      >
      <LikeMovieListItem
       :movie="movie"
       @select-movie="selectMovie"
       />

      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>

    </hooper>
    <MovieDetail
    v-if="isShow"
    style="margin-top:30px;"
    :selectedMovie="selectedMovie"
    @close-detail="closeDetail"
    />
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
import MovieDetail from '../movies/MovieDetail'
import LikeMovieListItem from './LikeMovieListItem'


export default {
  name: 'LikeMovieList',
  data: function () {
    return {
      username: this.$store.state.username,
      movieImage_URL : 'https://image.tmdb.org/t/p/w500',
      selectedMovie: {},
      likeMovie: [],
      isShow: false
    }
  },
  props: {
    likedMovieList: Array,
    movieList: Array
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    MovieDetail,
    LikeMovieListItem,
    
    
  },
  methods: {
    selectMovie: function (movie) {
      this.selectedMovie = movie
      this.isShow = true

    },
    closeDetail:function () {
      this.isShow = false
    }

  },
}
</script>

<style>
#explanation {
  /* font-weight: bold; */
  color: white; 
}
#navigation {
 border: 1px solid #6a6769; 
 background-color: rgba(0,0,0,0); 
 color: #fc0082; 
 padding: 5px;
}
</style>

