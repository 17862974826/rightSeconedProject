<template>
<div>
  <div v-for="item in bannerInfo" :key="item.id">
    <section>
    <div class="banner">  
    <router-link :to="'/hotDetail'">  
    <div class="proto-icon iconfont">&#xe624;</div>
    </router-link>
    <div class="mp-imgavatar">
      <img :src="item.imgUrl" alt="item.dev">
    </div>
    <div>
      <p class="starting" z-index="1">出发地:{{item.addr}}</p>
      <p class="JohnCroweRansom">蓝森国旅</p>
    </div>
    </div>
  </section>
  	 <article>
  	   <div class="explain">
  	     <h2>
  	 	  	{{item.dev}}
  	 	 </h2>
  	 	 <p class="ticketrates">
  	 	   <span class="ticketrates-left">￥<b>{{item.pice}}</b><i>起</i></span>
  	 	   <span class="ticketrates-center">可订明日</span>
  	 	   <span class="ticketrates-right">已售:{{item.number}}</span>
  	 	 </p>
  	 	 <ul>
  	 	   <li>条件退</li>
  	 	   <li>铁定成团</li>
  	 	   <li>无自费</li>
  	 	   <li>无购物</li>
  	 	 </ul>
  	   </div>
  	 </article>
  	
	</div>
	<div class="comment">
	  <h4>5.0分  非常满意 
	  <span class=" iconfont">2条评论&#xe624;</span>
	  </h4>
	  <div class="commentator">
	  	<h3>★★★★★<span>k*4 2017-12-01</span></h3>
	  	<p>不错，挺靠谱的，服务周到</p>
	  </div>
	</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bannerInfo: []
    }
  },
  methods: {
    getData () {
      this.$http.get('/static/oneDayTour.json').then(this.handleGetSucc.bind(this))
    },
    handleGetSucc (res) {
      const body = res.body
      if (body && body.data) {
        this.bannerInfo = body.data.banner
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style scoped>
  .banner {
  	width: 100%;
  	position: relative;
  	background: pink
  }
  .banner>.mp-imgavatar>img {
  	width: 100%;
  	height: 100%;
  }
  .proto-icon {
  	width: 0.7rem;
  	height: 0.7rem;
  	line-height: 0.7rem;
  	text-align: center;
  	border-radius: 0.35rem;
  	font-size: 0.36rem;
  	color: #fff;
  	position: absolute;
  	top:0.1rem;
  	left: 0.1rem;
  	background: #651a21;
  }
  .starting {
  	font-size: 0.24rem;
  	color: #fff;
  	position: absolute;
  	left: 0.2rem;
  	bottom: 0.3rem;
  }
  .JohnCroweRansom {
  	font-size: 0.24rem;
  	color: #fff;
  	position: absolute;
  	right: 0.2rem;
  	bottom: 0.3rem
  }
  article {
  	height: 2.3rem;
  	position: relative;
  	margin-bottom: 0.2rem;
  	background: #ffffff
  }
  .explain {	
  	box-sizing:border-box;
  	height: 2.4rem;
  	position: relative;
  	padding:0.2rem 0.26rem 0 0.2rem;
  	bottom:0.2rem;
  	left: 0;
  	background: #ffffff;
  	border-radius: 0.2rem 0.2rem 0 0;
  }
  .explain h2 {
  	font-size: 0.3rem;
  	color: #212121;
  	margin-bottom: 0.28rem
  }
  .ticketrates {
 	  height: 0.35rem;
 	  margin-bottom: 0.25rem;
  }
  .ticketrates-left {
 	  font-size: 0.2rem;
 	  color: #ef8a33;
   	float:left;
  }
  .ticketrates-left b {
  	font-size: 0.35rem;
  	color: #ef8a33;
  }
  .ticketrates-left i {
  	font-size: 0.2rem;
  	color: #a1a1a1;
  }
  .ticketrates-center {
  	font-size: 0.2rem;
  	margin-left: 0.1rem;
  	color: #616161;
  }
  .ticketrates-right {
  	font-size: 0.24rem;
  	color: #616161;
  	float: right;
  }
  .explain>ul>li {
  	font-size: 0.24rem;
  	float: left;
  	padding: 0 0.25rem 0 0.35rem;
  	color: #616161;
  }
    .comment {
  	box-sizing: border-box;
  	padding: 0.26rem  0.2rem 0 0.2rem;
  	height: 2.06rem;
  	margin-bottom: 0.2rem;
  	background: #fff;
  }
  .comment h4 {
  	font-size: 0.32rem;
  	color: #ef8a33;
  	position: relative;
  	padding-bottom: 0.3rem;
  }
  .comment h4::after {
  	content:"";
    width: 100%;
    height: 2px;
    background: #e0e0e0;
    position: absolute;;
    bottom: 0;
    left: 0;
    transform: scaleY(0.5);
    transform-origin: left bottom; 
  }
  .comment h4 span {
	  font-size: 0.26rem ;
	  float: right;
	  color: #616161;
  }
  .commentator{
  	box-sizing: border-box;
  }
  .commentator h3 {
	  font-size: 0.18rem;
	  padding-top: 0.2rem;
	  margin-bottom: 0.27rem;
	  color: #f4b752;
  }
  .commentator h3 span {
	  float: right;
	  color: #9e9e9e;
  }
  .commentator p {	
  	font-size: 0.24rem;
	  color: #212121;
  }
</style>