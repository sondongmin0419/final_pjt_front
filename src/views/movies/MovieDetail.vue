<template>
  <div v-if="selectedMovie.title" >
  <div class="row" >
  <div class="col-1" ></div>
      
  <v-hover style="height: 30%" class="col-4 p-0" >
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
      >
        <v-img :src="movieImage_URL+selectedMovie.poster_url" alt="" id="detail"></v-img>

        <!-- <v-card-text>
          <h2 class="title primary--text">
            Magento Forests
          </h2>
          Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
        </v-card-text> -->

        <!-- <v-card-title>
          <v-rating
            :value="4"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>
          <span class="primary--text subtitle-2">64 Reviews</span>
        </v-card-title> -->

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
            
          >
            <v-card-text v-if="selectedMovie.overview" style="font-size:2rem; line-height:3rem;">
              <p>줄거리</p>
              {{ selectedMovie.overview }}
            </v-card-text>
            <v-card-text v-else style="font-size:2rem; line-height:3rem;">
              줄거리가 없습니다.
            </v-card-text>

          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>






    <!-- <img :src="movieImage_URL+selectedMovie.poster_url" alt="" style="height: 30%" class="col-4" id="detail"> -->
    <div class="mx-auto col-5">
      <div class="d-flex justify-content-end"> 
        <button @click="closeDetail" style="width: 50px">X</button>
      </div>
      <p  id="title">{{ selectedMovie.title }}</p>
      <!-- <p>{{ selectedMovie.overview }}</p> -->
      <p>관객수 : {{ selectedMovie.audience*1000 / 1 }}명</p>
      <p>평점 : {{ selectedMovie.rank }}</p>
      <button id="btn_group" @click="isCommentForm ? ngetComment() :  getComment()">댓글보기</button>
      <button id="btn_group" @click="isVideo ? ngetVideo() :  getVideo()">예고편 보기

      </button>
      <div v-if="isCommentForm">
    <!-- <div  style="wi dth: 800px" class="mx-auto"> -->
      <CommentList
      v-if="isCommentForm"
      :comments="comments"
      :selectedMovie="selectedMovie"
      @updated-comment="updatedComment"
      @delete-comment="deleteComment"
      />
      <CommentForm
      v-if="isCommentForm"
      @add-comment="addComment"
      />
      </div>
      <div v-else>
        <div style="widyh:1200px" class="mr-auto mt-20px" v-if="isVideo">
          <VideoDetail
          :videoURI="this.selectedMovie.video_id"/>
        </div>
      </div>
    <!-- </div> -->
    </div>

    <div class="col-1"></div>
  </div>

  </div>
</template>

<script>
import axios from 'axios'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import VideoDetail from './VideoDetail'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'MovieDetail',
  data: function () {
    return {
      movieImage_URL : 'https://image.tmdb.org/t/p/w500',
      rating: 0,
      inputData: '',
      comments: [],
      isCommentForm: false,
      videos: [],
      isVideo: false,
      // videoURI: this.selectedMovie.video_id
    }
  },
  components: {
    CommentList,
    CommentForm,
    VideoDetail,
  },
  props: {
    selectedMovie: Object,
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')

      const config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
      return config
    },
    addComment: function (commentData) {
      console.log('add2')
      const config = this.setToken()
      axios.post(`${SERVER_URL}/movie/${this.selectedMovie.id}/comment/`, commentData, config)
        .then(() => {
          this.getComment()
        })
        .catch((err) => {
          console.error(err)
        })
    },
    getComment: function () {
      this.ngetVideo()
      const config = this.setToken()
      this.isCommentForm = true
      axios.get(`${SERVER_URL}/movie/${this.selectedMovie.id}/comment/`, config)
        .then((res) => {
          this.comments = res.data
        })
        .catch((err) => {
          console.error(err)
        })
    },
    ngetComment: function () {
      this.isCommentForm = false
    },
    updatedComment: function (commentData) {
      const config = this.setToken()

      axios.put(`${SERVER_URL}/movie/${this.selectedMovie.id}/comment/${commentData.comment_id}/`, commentData, config)
        .then(() => {
          this.getComment()
        })
        .catch((err) => {
          console.error(err)
        })
    },
    deleteComment: function (commentData) {
      const config = this.setToken()

      axios.delete(`${SERVER_URL}/movie/${commentData.selectedMovie_id}/comment/${commentData.comment_id}/`, config)

        .then(() => {
          this.getComment()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getVideo: function () {
      this.ngetComment()
      this.isVideo = true
    },
    ngetVideo: function () {
      this.isVideo = false
    },
    closeDetail: function () {
      this.$emit("close-detail")
    }
  },

  
}
</script>

<style>
#btn_group {
 border: 1px solid #fc0082; 
 background-color: rgba(0,0,0,0); 
 color: #fc0082; 
 padding: 5px;
 margin: 10px;
}
/* #detail {
  width: 60%;
  padding: 15px;
  border: 20px solid #fc0082;
  box-sizing: border-box
  } */
#title {
 font-size: 60px;
 /* text-align: left; */
}
</style>