<template>
	<div>
		<header-router :headerInfo="headerInfo"></header-router>

			<div class="particulars-hide" ref="scrollEvent">
				<div class="hide-scroll" v-for="item in tourismInfo" :key="item.id">
				<router-link :to="'/'">
					<i class="hide-back iconfont">&#xe624;</i>
				</router-link>
					<span class="hide-museum">{{item.title}}</span>
				</div>
			</div>
					
		<address-router :addressInfo="addressInfo"></address-router>

		<total-router :recommendInfo="recommendInfo"></total-router>
		
		<ticket-router :listInfo="listInfo" v-on:change='handleClick($event)'></ticket-router>

		<comment-router :userInfo="userInfo"></comment-router>

		<residue-router :residueInfo="residueInfo"></residue-router>
	</div>
</template>

<script>
import headerRouter from './detailHeader'
import addressRouter from './address'
import totalRouter from './total'
import ticketRouter from './ticket'
import commentRouter from './comment'
import residueRouter from './residue'

export default {
  name: 'Detail',
  components: {
    headerRouter,
    addressRouter,
    totalRouter,
    ticketRouter,
    commentRouter,
    residueRouter
  },
  data () {
    return {
      recommendInfo: [],
      listInfo: [],
      listInfo1: [],
      listInfo2: [],
      tourismInfo: [],
      headerInfo: [],
      addressInfo: [],
      userInfo: [],
      residueInfo: []
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
        this.tourismInfo = body.data.tourismTheme
        this.headerInfo = body.data.headerCon
        this.addressInfo = body.data.detailAddress
        this.userInfo = body.data.user
        this.residueInfo = body.data.residue
        this.deepCopy(this.listInfo1, body.data.list)
        this.listInfo = body.data.list
        this.getShowTicket()

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
    },
    getShowTicket () {
      this.listInfo.forEach((val) => {
        val.listdetail.splice(2)
      })
    },
    deepCopy (arr, brr) {
      for (var i in brr) {
        if (typeof brr[i] === 'object') {
          if (brr[i].constructor === Array) {
            arr[i] = []
          } else {
            arr[i] = {}
          }
          this.deepCopy(arr[i], brr[i])
        } else {
          arr[i] = brr[i]
        }
      }
      return arr
    },
    handleClick (res) {
      this.listInfo = this.deepCopy([], this.listInfo1)
      this.listInfo.forEach((val, index) => {
        if (index != res.data) {
          val.listdetail.splice(2)
        }
      })
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
	
	
</style>