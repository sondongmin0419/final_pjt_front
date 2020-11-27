<template>
  <div>
    <MovieDetail
    v-if="isShow"
    @close-detail="closeDetail"
    :selectedMovie="selectedMovie"/>
    <h2 style="text-align:left" class="ml-5"><span style="color:#fc0082;">방구석 1열,</span> 최고의 인기영화</h2>
    <br>
    <div>
    <hooper :itemsToShow="5" :itemsToSlide="5" style="height: auto">
      <slide v-for="(movie, idx) in movieList"
      :key="idx"
      >
      <ImageSliderListItem
       :movie="movie"
       @select-movie="selectMovie"
       />

      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    </div>

  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
import MovieDetail from './MovieDetail'
import ImageSliderListItem from './ImageSliderListItem'


export default {
  name: 'ImageSliderList',
  data: function () {
    return {
      movieImage_URL : 'https://image.tmdb.org/t/p/w500',
      selectedMovie: {},
      isShow: false,
    }
  },
  props: {
    movieList: Array,
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    MovieDetail,
    ImageSliderListItem
    
  },
  methods: {
    selectMovie: function (movie) {
      this.isShow = true
      this.selectedMovie = movie
    },
    closeDetail: function () {
      this.isShow = false
    }

  }
}
</script>

<style>

</style>
