<template>
  <div>
    <div>
      <img :src="movieImage_URL+movie.poster_url" alt="poster_img" style="width: 75%"
      @click="selectMovie "  @mouseover= "overlay =! overlay">
      <!-- <v-overlay :value="overlay"> 
      <star-rating v-model="rating" :show-rating="false" :star-size="40"  style="display: inline-block"></star-rating>
      </v-overlay> -->
    </div>
    <div>
      <p style="font-size: 30px"
      @click="selectMovie">{{ movie.title }}</p>

    </div>
  </div>
</template>

<script>  
export default {
  name: 'ImageSliderListItem',
  data: function () {
    return {
      movieImage_URL : 'https://image.tmdb.org/t/p/w500',
      selectedMovie: '',
    }
  },
  props: {
    movie: Object
  },
  methods: {
    selectMovie: function () {
      this.$emit("select-movie", this.movie)
    }
  }
}
</script>

<style>

</style>