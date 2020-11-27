<template>
  <div v-if="movie">
    <img :src="movieImage_URL+movie.poster_url" alt="poster_img" style="width: 75%"
    @click="selectMovie">

    <p style="font-size: 30px" 
    @click="selectMovie">{{ movie.title }}</p>
  </div>
</template>

<script>  
export default {
  name: 'LikeMovieListItem',
  data: function () {
    return {
      movieImage_URL : 'https://image.tmdb.org/t/p/w500',
      selectedMovie: '',
      isLikedMovie: 0,
      
    }
  },
  props: {
    movie: Object
  },
  methods: {
    selectMovie: function () {
      this.$emit("select-movie", this.movie)
    }
  },
}
</script>

<style>

</style>