<template>
  <div id=profile_total >
    <h2 id="home">코로나엔 <span id="specific">방구석 1열</span>로 다 모여!</h2>
    <br>
    <!-- <div>
      {{ username }}님 환영합니다!
    </div> -->

    <div>
      <div style="width: 800px; margin: auto; ">
      <div id=sel>
        [사는지역을 선택해주세요]
      </div>
      <div style="font-size:20px;">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="1" checked>
        <label class="form-check-label" for="exampleRadios1">
          전국
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="2">
        <label class="form-check-label" for="exampleRadios2">
          서울
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="3">
        <label class="form-check-label" for="exampleRadios3">
          부산
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="4">
        <label class="form-check-label" for="exampleRadios4">
          대구
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="5">
        <label class="form-check-label" for="exampleRadios5">
          인천
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="6">
        <label class="form-check-label" for="exampleRadios6">
          광주
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios7" value="7">
        <label class="form-check-label" for="exampleRadios7">
          대전
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios8" value="8">
        <label class="form-check-label" for="exampleRadios8">
          울산
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios9" value="9">
        <label class="form-check-label" for="exampleRadios9">
          세종
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios10" value="10">
        <label class="form-check-label" for="exampleRadios10">
          경기
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios11" value="11">
        <label class="form-check-label" for="exampleRadios11">
          강원
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios12" value="12">
        <label class="form-check-label" for="exampleRadios12">
          충북
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios13" value="13">
        <label class="form-check-label" for="exampleRadios13">
          충남
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios14" value="14">
        <label class="form-check-label" for="exampleRadios14">
          전북
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios15" value="15">
        <label class="form-check-label" for="exampleRadios15">
          전남
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios16" value="16">
        <label class="form-check-label" for="exampleRadios16">
          경북
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios17" value="17">
        <label class="form-check-label" for="exampleRadios17">
          경남
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios18" value="18">
        <label class="form-check-label" for="exampleRadios18">
          제주
        </label>
         </div>
      </div>
      </div>
      <button @click="setCity" id="btngroup">방구석 밖은 위험해</button>
      <br>

      <div v-if="issetCity"  >
        <div id="box" >
          <div style= "color:#fc0082;">
        <span v-if="this.$store.state.coronaData[selectCity].corona_case > 100" id="sel">초위험단계</span>
        <span v-else-if="this.$store.state.coronaData[selectCity].corona_case > 59" id="sel">위험단계</span>
        <span v-else-if="this.$store.state.coronaData[selectCity].corona_case > 30" id="sel">경계단계</span>
        <span v-else-if="this.$store.state.coronaData[selectCity].corona_case > 0" id="sel">주의단계</span>
        <span v-else>와우</span>

        </div>
        <p id="sel">
        오늘 <span style= "color:#fc0082; ; ">{{ this.$store.state.coronaData[selectCity].city }}</span>지역의 
        코로나 추가 확진자 수는 <span style= "color:#fc0082; ; ">'{{ this.$store.state.coronaData[selectCity].corona_case }}</span>명' 입니다.
        </p>
        <div id="sel" style="font-size:20px;">
        방구석 밖은 위험하니, 1열로 모여주세요.</div>
         </div>
      <div  class="ml-5">
      <p style="font-size: 2em; color:#52EBB8; text-align: left; margin-left:480px; margin-bottom: 20px">영화로 떠나는 여행 </p>
      <LikeMovieList
      style="width:2000px; margin: 10px auto"
      :likedMovieList="MovieList_travel"/>
      </div>
      <div class="ml-5">
      <h2 style="font-size: 2em; color:#52EBB8; text-align: left; margin-left:480px; margin-bottom: 20px">재난 상황을 대처하는 또 다른 방법 </h2>
      <LikeMovieList
      style="width:2000px; margin: 10px auto"
      :likedMovieList="MovieList_disaster"/>
      </div>
      <div class="ml-5">
       <h2 style="font-size: 2em; color:#52EBB8; text-align: left; margin-left:480px; margin-bottom: 20px"> 영화로 키우는 금융감각</h2>
      <LikeMovieList
      style="width:2000px; margin: 10px auto"
      :likedMovieList="MovieList_economy"/>
      </div>
      <div class="ml-5">
      <h2 style="font-size: 2em; color:#52EBB8; text-align: left; margin-left:480px; margin-bottom: 20px"> 우리 가족 사랑해~~</h2>
      <LikeMovieList
      style="width:2000px; margin: 10px auto"
      :likedMovieList="MovieList_family"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LikeMovieList from './LikeMovieList'

const SERVER_URL = 'https://finalback.herokuapp.com'

export default {
  name: 'Profile',
  data: function () {
    return {
      username: localStorage.loginId,
      likedMovieList: [],
      selectCity: '',
      issetCity:false,
      MovieList_travel: [],
      MovieList_economy: [],
      MovieList_disaster: [],
      MovieList_family: [],
    }
  },
  components: {
    LikeMovieList,
  },
  methods: {
    likeListget: function () {
      console.log('dsds')
      const movieList = this.$store.state.movieList
      for (var k=0; k < movieList.length; k++) {
        const movie = movieList[k]
        var liked = 0
        var liked_travel = 0
        var liked_family = 0
        for(var i=0; i<movie.genre.length; i++) {
          if (movie.genre[i] == localStorage.likeGenre_1) {
            liked += 1
          }
          if (movie.genre[i] == localStorage.likeGenre_2) {
            liked += 1
          }
          if (movie.genre[i] == 12 || movie.genre[i] == 36 || movie.genre[i] == 10402 || movie.genre[i] == 10749) {
            liked_travel += 1
          }
          if (movie.genre[i] == 14 || movie.genre[i] == 16 || movie.genre[i] == 18 || movie.genre[i] == 35 || movie.genre[i] == 10751 || movie.genre[i] == 10749) {
            liked_family += 1
          }

        }
        if (liked > 0) {
          this.likedMovieList.push(movie)
        }
        if (liked_travel > 0) {
          this.MovieList_travel.push(movie)
        }
        if (liked_family > 0) {
          this.MovieList_family.push(movie)
        }
        if (movie.title == '로그 시티' || movie.title == '보랏 속편'|| movie.title == '플레인 하이스트' || movie.title == '택스 콜렉터' || movie.title == '조커') {
          this.MovieList_economy.push(movie)
        }
        if (movie.title == '백두산' || movie.title == '반도' || movie.title == '세라 쿠퍼: 아주 좋아!' || movie.title == '부산행' || movie.title == '지오스톰' ) {
          this.MovieList_disaster.push(movie)
        }
      }
    },
    setCity: function () {
      this.issetCity = true
      const check_count = document.getElementsByName("exampleRadios").length;
      // console.log(check_count)
      for (var i=0; i<check_count; i++) {
          if (document.getElementsByName("exampleRadios")[i].checked == true) {
              this.selectCity = i
          }
      }
    },
      // 여행 - 모험 로맨스  역사 음악
      // 12, 10749, 36, 10402
      // 경제 - 로그 시티, 보랏 속편, 플레인 하이스트, 택스 콜렉터, 조커
      // 671039. 740985, 694919, 531499, 475557
      // 재난 - 백두산, 반도, 세라 쿠퍼: 아주 좋아!, 부산행, 지오스톰
      // 581387, 581392, 732359, 656561, 296065
      // 가족 - 가족, 코미디, 드라마, 애니메이션, 판타지
      // 10751, 35, 18, 16, 14
    List_travel: function () {
    }
  },
  created: function () {
    console.log('sdfdas')
    this.likeListget()
    axios.get(`${SERVER_URL}/accounts/${this.$store.state.username}/recommend/`)
      .then((res) => {
        localStorage.likeGenre_1 = res.data[0].id
        localStorage.likeGenre_2 = res.data[1].id
      })    
   },
  }
  
</script>

<style scoped>
@font-face {
    font-family: 'BMEULJIRO';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


@font-face {
    font-family: '국립박물관문화재단클래식B';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/국립박물관문화재단클래식B.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

#specific {
 color:#52EBB8 
 
}

#btngroup {
 /* border: 1px solid #52EBB8; */
 background-color: #52EBB8;
 color: #000000;
 padding: 5px;
 margin: 10px;
font-size: 30px;
font-family: '국립박물관문화재단클래식B';

}
/* #username  {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
    /* font-family: 'BMEULJIRO'; */
  /* color: #ffffff; */
  /* font-size: 30px; */

/* } */ 


.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}

#sel {
  font-family: '국립박물관문화재단클래식B';
  text-align: center;
  /* border: 30px solid #dddddd; */
}

#box {
  border: 10px solid #52EBB8
}
.form-check {
  font-size: 2rem;
}
</style>                                                                                                                                 