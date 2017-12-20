<template>
  <div ref="tourist" style="width: 100%;z-index: 6">  
    <div class="scroll-tourist" v-show="touristShow">
    	<h3 class="tourist-title" ref="title">游玩景点<span>(可多选)</span></h3>
    	<div class="horizontal-wrapper" ref="wrapper">
    	  <ul class="horizontal-content clearfix" ref="content">
    	    <li v-for="item in placeTravel" class="scrollLi" ref="scrollLi">{{item}}</li>
        </ul>
    	</div>
    	<div class="iconfont right-nav" @click="handleRightNavClick">&#xe624;</div>
    </div>
  </div>
</template>


<script>
  import BScroll from 'better-scroll'

  export default {
    props: ['placeTravel'],
    data () {
      return {
        scrollWidth: 0,
        flag: true,
        scroll: null,
        scrollY: 0,
        touristShow: true
      }
    },
    mounted () {
      setTimeout(() => {
        this.getWidth()
      }, 500)
      window.addEventListener('scroll', this.handleScroll.bind(this))
    },
    destroyed () {
      window.removeEventListener('scroll')
    },
    watch: {
      scrollWidth () {
        var scrollContent = document.getElementsByClassName('horizontal-content')[0]
        scrollContent.style.width = this.scrollWidth + 'px'
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollY: true,
          scrollX: true
        })
      }
    },
    methods: {
      getWidth () {
        var scrollLi = document.getElementsByClassName('scrollLi')
        var width = 0
        for (var i = 0; i < scrollLi.length; i++) {
          width += scrollLi[i].offsetWidth + 8
        }
        this.scrollWidth = width
      },
      handleRightNavClick () {
        var wrapper = this.$refs.wrapper
        var content = this.$refs.content
        if (this.flag) {
          wrapper.className += ' ' + 'horizontal-wrapper-click'
          content.className += ' ' + 'horizontal-content-click'
          this.$refs.title.style.display = 'block'
          this.flag = false
          this.scroll = new BScroll(this.$refs.wrapper, {
            scrollY: true
          })
        } else {
          wrapper.className = 'horizontal-wrapper'
          content.className = 'horizontal-content clearfix'
          this.$refs.title.style.display = 'none'
          this.flag = true
          this.scroll = new BScroll(this.$refs.wrapper, {
            scrollX: true
          })
        }
      },
      handleScroll () {
        var sct = document.documentElement.scrollTop
        var tourist = this.$refs.tourist
        if (sct > 44 && sct > this.scrollY) {
          tourist.style.position = 'fixed'
          tourist.style.top = 0
          this.scrollY = sct
          this.touristShow = true
        } else if (sct > 44 && sct < this.scrollY) {
          this.touristShow = false
          this.scrollY = sct
        } else {
          tourist.style.position = ''
          this.touristShow = true
          tourist.style.top = 44 + 'px'
        }
      }
    }
  }
</script>


<style>
  .scroll-tourist {
  	display: flex;
  	height: .83rem;
  	background: #e5e7e8;
  	position: relative;
  }
  .scroll-tourist:after {
  	content: "";
  	position: absolute;
  	left: 0;
  	bottom: 0;
  	width: 100%;
  	height: 1px;
  	transform: scaleY(0.5);
  	background: #c0c6c9;
  }
  .horizontal-wrapper {
  	flex: 1;
  	overflow: hidden;
  	background: #e5e7e8;
  }
  .horizontal-wrapper-click {
  	position: absolute;
  	top: .83rem;
  	width: 100;
  	height: 5.98rem;
  	z-index: 1;
  }
  .horizontal-content {
  	height: .7rem;
  	width: 5800px;
  	padding-top: .12rem;
  }
  .horizontal-content-click {
  	height: auto;
  	width: 100%!important;
  }
  .horizontal-content li {
	line-height: .56rem;
  	margin-bottom: .16rem;
	float: left;
	padding: 0 .23rem;
	margin-left: .16rem;
	font-size: .24rem;
	background: #fff;
	border-radius: .1rem;
  }
  .right-nav {
  	width: .74rem;
  	padding-right: .05rem;
  	text-align: center;
  	line-height: .93rem;
  }
  .tourist-title {
  	display: none;
  	flex: 1;
  	padding-left: .2rem;
  	line-height: .81rem;
  	font-size: .26rem;
  	color: #212121;
  	background: #e5e7e8;
  }
  .tourist-title span {
  	padding-left: .12rem;
  	font-size: .24rem;
  }
</style>
