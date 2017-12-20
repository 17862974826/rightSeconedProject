<template>
  <div>
  	<header>
      <router-link to="/">
        <div class="icon iconfont">&#xe624;</div>
      </router-link>
  	  <div class="input-con">
  	  	<input type="text" placeholder="一日游" @input="handleInput" ref="searchInput">
  	  </div>
  	  <div class="search" @click="searchShow = !searchShow">搜索</div>
  	  <div class="searchContainer" v-show="searchShow">
  	    <div class="searchTitle">
  	      <span style="float: left;">搜索建议</span>
  	      <span style="float: right;" @click="searchShow=false">关闭</span></div>
  	  	<ul class="searchList">
  	  	  <li class="searchContent" v-for="item in searchContent">{{item}}</li>
  	  	</ul>
  	  </div>
  	</header>
  
	<transverse-tourist :placeTravel="placeTravel"></transverse-tourist>

	<tourist-list :tourist="currentPage"></tourist-list>

	<div class="pagination-con">
	  <div class="page-con">
  	    <span class="page upPage" @click="handleUpPageClick">上一页</span>
  	    <i class="indexAndTotal">{{pageIndex}}<i class="sprit">/</i>{{pageTotal}}</i>
  	    <span class="page downPage" @click="handleDownPageClick">下一页</span>
	  </div>
	  <p class="qunaTicket">去哪儿门票</p>
	</div>
  </div>
</template>


<script>
  import touristList from './touristList.vue'
  import transverseTourist from './transverseTourist.vue'

  export default {
    components: {
      touristList,
      transverseTourist
    },

    data () {
      return {
        tourist: [],
        pageNum: 10,
        pageIndex: 1,
        placeTravel: [],
        search: {},
        searchContent: [],
        searchShow: false
      }
    },
    created () {
      this.getData()
    },
    computed: {
      pageTotal () {
        return Math.ceil(this.tourist.length / this.pageNum)
      },
      currentPage () {
        return this.tourist.filter((value, index) => {
          return index >= (this.pageIndex - 1) * this.pageNum && index < this.pageIndex * this.pageNum
        })
      }
    },
    methods: {
      getData () {
        this.$http.get('/static/onedayTour.json').then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        if (res.body.data.touristList) {
          this.tourist = res.body.data.touristList
          this.placeTravel = res.body.data.placeTravel
          this.search = res.body.data.search
        }
      },
      handleDownPageClick () {
        if (++this.pageIndex > this.pageTotal) {
          this.pageIndex = this.pageTotal
        }
      },
      handleUpPageClick () {
        if (--this.pageIndex < this.pageTotal) {
          this.pageIndex = 1
        }
      },
      handleInput () {
        this.searchContent = []
        var searchVal = this.$refs.searchInput.value
        this.search.forEach((val) => {
          if (val.mate.indexOf(searchVal) !== -1 && searchVal !== '') {
            this.searchContent.push(val.name)
          }
        })
        if (this.searchContent !== '') {
          this.searchShow = true
        } else {
          this.searchShow = false
        }
      }
    }
  }
</script>


<style scoped>
  header {
  	display: flex;
  	position: relative;
  	background: #54b9d1;
  	height: .88rem;
  }
  .icon {
	width: .6rem;
	line-height: .88rem;
	text-align: center;
	font-weight: bold;
	color: #fff;
  }
  .input-con {
  	flex: 1;
  	margin: .15rem .2rem;
  	display: flex;
  }
  .input-con input {
  	flex: 1;
  	height: .6rem;
  	padding-left: .21rem;
  	border: 0;
  	outline: none;
  	border-radius: .1rem;
  	font-size: .26rem;
  	color: #000;
  }
  .search {
  	width: .78rem;
  	line-height: .88rem;
  	text-align: left;
  	font-size: .26rem;
  	color: #fff;
  }
  .pagination-con {
  	height: 1.6rem;
  	background: #f5f5f5;
  }
  .page-con {
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	height: 1.08rem;
  }
  .indexAndTotal {
  	padding: 0 .32rem;
  	font-size: .3rem;
  }
  .sprit {
  	padding: .1rem;
  }
  .page {
  	width: 1.4rem;
  	height: .6rem;
  	line-height: .6rem;
  	text-align: center;
  	border: 1px solid #00afc7;
  	border-radius: .1rem;
  	font-size: .24rem;
  	background: #fff;
  	color: #00afc7;
  }
  .qunaTicket {
  	text-align: center;
  	line-height: .34rem;
  	font-size: .26rem;
  	color: #00afc7;
  }
  .searchContainer {
  	flex: 1;
  	width: 100%;
  	position: absolute;
  	top: .88rem;
  	left: 0;
  	background: #f3f3f3;
  	z-index: 2;
  	box-shadow: 3px 3px 3px #ccc;
  }
  .searchTitle {
  	height: .5rem;
  	line-height: .5rem;
  	padding-left: .14rem;
  	padding-right: .1rem;
	font-size: .12rem;
	color: #555;
	border-top: .06rem solid #dbdee0;
  }
  .searchContent {
  	height: .8rem;
  	line-height: .8rem;
  	padding-left: .8rem;
  	font-size: .12rem;
  	color: #666;
  	background: #fff;
  	border-top: 1px solid #ccc;
  }
</style>