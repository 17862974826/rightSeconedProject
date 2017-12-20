<template>
  <div>
	<search-result v-show="showResult" :findCitySucc='findCitySucc'></search-result>
 	<div class="head_wrap">
	    <header>
	     	<router-link to="/"><a href='javascript:;' class='iconfont back' @click="handleBackBtnClick">&#xe624;</a></router-link>
	     	<div class='place_wrap'>
	     		<div class='select_city' @click='handleCitySelectClick($event)'>
	     			<span class='country' :class='[cnyActive ? "active" : ""
	     			]' data-id='country'>国内</span>
	     			<span class='oversea' :class='[seaActive ? "active" : ""]' data-id='oversea'>海外</span>
	     		</div>
	     	</div>
	    </header>
	    <div class="search_wrap" @click="handleSearchClick($event)">
	    	<input type="text" class="search" ref='search' @keyup='handleWriteClick'/>
	    	<span class="search_info" v-show="info">输入城市名或者拼音</span>
	    </div>
	</div>
	<div class="">
		<div class="content_wrap">
			<div class="my_position">
				<h2>您的位置</h2>
			</div>
			<div class="position">
				<div class="position_name">{{myCity}}</div>
			</div>
			<div class="hot_cityWrap">
				<div class="hot_city">
					<h2>热门城市</h2>
				</div>
				<div class="city_title">
					<div class="city" v-for="item in hotCity">{{item.name}}</div>
				</div>
			</div>
		</div>
		<all-city :allCity='allCity'></all-city>
	</div>

  </div>
</template>

<script>
import allCity from './allCity'
import searchResult from './searchResult'

export default {
  name: 'city',
  activated () {
    this.hotCity = this.chinaHotCity
    this.allCity = this.chinaAllCity
    this.myCity = this.$route.params.id
    this.cnyActive = true
    this.seaActive = false
    this.info = true
  },
  created () {
    this.getData()
  },
  data () {
    return {
      cnyActive: true,
      seaActive: false,
      myCity: '',
      chinaHotCity: [],
      overseaHotCity: [],
      chinaAllCity: {},
      seaoverAllCity: {},
      hotCity: [],
      allCity: {},
      findCitySucc: [],
      info: true,
      showResult: false
    }
  },
  methods: {
    handleCitySelectClick (e) {
      const tar = e.target

      if (tar.getAttribute('data-id') === 'country') {
        this.cnyActive = true
        this.seaActive = false
        this.hotCity = this.chinaHotCity
        this.allCity = this.chinaAllCity
        document.documentElement.scrollTop = 0
        this.$refs.search.value = ''
      } else {
        this.cnyActive = false
        this.seaActive = true
        this.hotCity = this.overseaHotCity
        this.allCity = this.seaoverAllCity
        document.documentElement.scrollTop = 0
        this.$refs.search.value = ''
      }
    },
    handleSearchClick (e) {
      if (e.target !== e.currentTarget) {
        this.info = false
        this.$refs.search.focus()
      }
    },
    getData () {
      this.$http.get('/static/city.json').then(this.getCityDataSucc.bind(this))
    },
    getCityDataSucc (res) {
      const data = res.body.data
      if (data && data.chinaHotCity && data.overseaHotCity) {
        this.chinaHotCity = data.chinaHotCity
        this.hotCity = this.chinaHotCity
        this.overseaHotCity = data.overseaHotCity
        this.chinaAllCity = data.chinaAllCity
        this.seaoverAllCity = data.seaoverAllCity
        this.allCity = this.chinaAllCity
      }
    },
    handleBackBtnClick () {
      document.documentElement.scrollTop = 0
      this.showResult = false
      this.$refs.search.value = ''
    },
    handleWriteClick () {
      let value = this.$refs.search.value
      if (this.hotCity === this.chinaHotCity) {
        this.findCity(value, this.chinaAllCity)
      } else {
        this.findCity(value, this.seaoverAllCity)
      }
    },
    findCity (value, city) {
      this.showResult = true
      this.findCitySucc.splice(0)
      city.forEach((val) => {
        let cityName = val.cityName
        cityName.forEach((val) => {
          if (val.name.indexOf(value) !== -1 && value !== '') {
            this.findCitySucc.push(val.name)
          } else if (value === '') {
            this.showResult = false
          }
        })
      })
      if (this.findCitySucc.length === 0) {
        this.findCitySucc.push('无搜索匹配内容')
      }
    }
  },
  computed: {
  },
  components: {
    allCity,
    searchResult
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
	background: #fff;
	color: #00afc7;
}
/*header*/
.head_wrap {
	display: flex;
	flex-direction: column;
	height: 1.6rem;
	background: #00afc7;
}
header {
	display: flex;
	position: fixed;
	justify-content: flex-start;
	height: 0.88rem;
	width: 100%;
	color: #fff;
	z-index: 100;
	top: 0;
}
.back {
	display: block;
	width: .4rem;
	position: absolute;
	line-height: 0.88rem;
	padding: 0 .22rem;
	font-size: 0.36rem;
	color: #fff;
	font-weight:800;
}
.place_wrap {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #00afc7;
}
.select_city {
	display: flex;
	height: .56rem;
	text-align: center;
	border: 1px solid #fff;
	border-radius: 0.1rem;
}
.select_city > span {
	display: block;
	width: 2rem;
	height: .56rem;
	line-height: .56rem;
}
.search_wrap {
	display: flex;
	position: relative;
	justify-content: center;
	height: 0.72rem;
	width: 100%;
	margin-top: 0.88rem;
	position: absolute;
	z-index: 15;
	background: #00afc7;
}
.search {
	width: 95%;
	height: 0.64rem;
	border: 0;
	border-radius: 0.1rem;
	text-align: left;
	padding-left: 0.2rem;
	box-sizing: border-box;
}
.search_info {
	position: absolute;
	align-self: center;
	font-size: 0.22rem;
	color: #c2c2c2;
}
/*内容区*/
.content_wrap {
	display: flex;
	flex-direction: column;
	width: 100%;
	box-sizing: border-box;
	background: #f6f6f6;
}
.my_position, .hot_city {
	height: 0.54rem;
	font-size: 0.23rem;
	line-height: 0.52rem;
	color: #9e9e9e;
	padding-left: 0.3rem;
	border-bottom: 1px solid #e6e6e6;
}
.position {
	display: flex;
	align-items: center;
	height: 1.08rem;
	padding-left: 4.3%;
	border-bottom: 1px solid #e6e6e6;
	background: #fff;
}
.position_name {
	width: 1.66rem;
	line-height: 0.56rem;
	text-align: center;
	border: 1px solid #55c9dd;
	color: #55c9dd;
	border-radius: 0.1rem;
}
.hot_cityWrap {
	display: flex;
	flex-direction: column;
	width: 100%;
}
.city_title {
	display: flex;
	flex-wrap: wrap;
	padding: 0.04rem 0 0.25rem 4.68%;
	background: #fff;
	border-bottom: 1px solid #e6e6e6;
}
.city {
	height: 0.56rem;
	width: 26%;
	text-align: center;
	line-height: 0.56rem;
	border: 1px solid #dcdcdc;
	margin: 0.2rem 3.12% 0 0;
	color: #747474;
	font-size: 0.25rem;
}
</style>