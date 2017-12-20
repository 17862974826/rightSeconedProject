<template>
	<div>
		<header-router :headerInfo="headerInfo"></header-router>

			<div class="particulars-hide" ref="scrollEvent">
				<div class="hide-scroll" v-for="item in tourismInfo" :key="item.id">
					<i class="hide-back iconfont">&#xe624;</i>
					<span class="hide-museum">{{item.title}}</span>
				</div>
			</div>
					
		<address-router :addressInfo="addressInfo"></address-router>

		<total-router :recommendInfo="recommendInfo"></total-router>
		
		<ticket-router :listInfo="listInfo"></ticket-router>

		<div class="user-comment">
			<div class="user-theme border-bottom">
				<i class="user-icon iconfont">&#xe6a5;</i>
				<span class="user-title">用户评论</span>
			</div>
			<div class="user-box">
				<div class="user-star">★★★★★</div>
				<span class="user-appraise">整整玩了一天，就这还没逛完这座世界上最伟大最大最完整最震撼的宫殿。取票方便，刷身份证就可以直接进，不排队，游客服务中心提供热水和电视充电插座，点赞！里面的珍宝太多，几天几夜都看不完，票价只要六十块太值了！徜徉在长长红墙下你会感觉时空穿越，物我两忘。就是几座大殿的中间不让围观拍照，只能从侧面看。</span>
				<div class="user-img">
					<img src="//s.qunarzz.com/piao/image/touch/sight/highQualityComment1.png" alt="" class="user-img-con">
				</div>	
			<div class="user-data">c*2  2017-09-08</div>
			</div>
		</div>
		
			
	</div>
</template>

<script>
import headerRouter from './detailHeader'
import addressRouter from './address'
import totalRouter from './total'
import ticketRouter from './ticket'
export default {
  name: 'Detail',
  components: {
    headerRouter,
    addressRouter,
    totalRouter,
    ticketRouter
  },
  data () {
    return {
      recommendInfo: [],
      listInfo: [],
      tourismInfo: [],
      headerInfo: [],
      addressInfo: []
    }
  },
  methods: {
    getData () {
      this.$http.get('/static/detail.json').then(this.handleDataSucc.bind(this))
    },
    handleDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.recommend) {
        this.recommendInfo = body.data.recommend
        this.listInfo = body.data.list
        this.tourismInfo = body.data.tourismTheme
        this.headerInfo = body.data.headerCon
        this.addressInfo = body.data.detailAddress
      }
    },
    windowScroll () {
      const _this = this
      window.onscroll = function () {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop
        if (scroll > 100) {
          _this.$refs.scrollEvent.style.display = 'block'
        } else {
          _this.$refs.scrollEvent.style.display = 'none'
        }
      }
    }
  },
  created () {
    this.getData()
    this.windowScroll()
  },
  beforeDestroy () {
    window.onscroll = null
  }
}
</script>

<style scoped>
	
	.hide-scroll {
		position: fixed;
		height: .88rem;
		width: 100%;
		background: #54b9d1;
		z-index: 1;
		top: 0rem;
		line-height: .88rem;
		color: #fff;
		font-size: .3rem;
	}
	.particulars-hide {
		display: none;
	}
	.hide-museum {
		margin-left: 2.95rem;
	}
	.hide-back {
		font-size: .36rem;
		margin-left: .29rem;
	}
	.user-comment {
		background: #fff;
		margin-bottom: .2rem;
	}
	.user-theme {
		box-sizing: border-box;
		padding: .3rem .2rem .31rem .2rem; 
	}
	.user-icon {
		font-size: .24rem;
		color: #50a6b7;
	}
	.user-title {
		font-size: .28rem;
		color: #333;
	}
	.user-box {
		box-sizing: border-box;
		padding: .37rem .2rem .49rem .2rem;
		position: relative;
	}
	.user-star {
		font-size: .28rem;
		color: #f4b752;
	}
	.user-appraise {
		font-size: .24rem;
		color: #747474;
		line-height: .42rem;
		margin-top: .14rem;
	}
	.user-data {
		position: absolute;
		font-size: .18rem;
		color: #292727;
		right: .21rem;
		top: .39rem;
	}
	.user-img {
		position: absolute;
		top: 0rem;
		right: 0rem;
		width: 1.48rem;
		height: .96rem;
	}
	.user-img-con {
		width: 100%;
		height: 100%;
	}
</style>