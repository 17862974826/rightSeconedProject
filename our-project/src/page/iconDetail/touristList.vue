<template>
  <div>
  	<div class="tourist-box" ref="wrapper">
	  <ul>
	  	<li class="tourist-list" v-for="item in tourist" :key="item.id">
	  	  <router-link to="#">
	  	  	<div class="tourist-con">
	  	  	  <div class="tourist-con-left">
	  	  	  	<div class="tourist-img-con">
	  	        	<img :src="item.imgUrl" class="tourist-img">
	  	        </div>
	  	        <div class="order-ticket" v-if="item.order.show"><span>{{item.order.orderText}}</span></div>
	  	      </div>
	  	      <div class="tourist-con-right">
	  	        <h2 class="tourist-describe">
	  	      	  <span>{{item.describe}}</span>
	  	        </h2>
	  	        <p class="start-place">
	  	      	  <i>{{item.startPlace}}</i>
	  	      	  <em v-for="fs in item.feedAndShop">{{fs}}</em>
	  	        </p>
			    <div class="sale-total">已售<span>{{item.saleTotal}}</span></div>
			    <div class="tourist-price">
			      <div class="coupon" v-if="item.coupon">赠券</div>
			      <p><i>&yen;</i><span>{{item.price}}</span>起</p>
			    </div>
	  	  	  </div>
	  	    </div>
	  	  </router-link>
	  	</li>
	  </ul>
	</div> 
  </div>
</template>


<script>
  export default {
    props: ['tourist']
  }
</script>


<style>
  .tourist-box {
  	padding: 0 .2rem 0;
  	background: #fff;
  }
  .tourist-con {
  	display: flex;
  	padding-top: .16rem;
  }
  .tourist-con-left {
  	position: relative;
  	margin-right: .2rem;
  }
  .tourist-img-con {
  	width: 1.6rem;
  	height: 1.6rem; 
  }
  .tourist-img {
  	width: 1.6rem;
  	height: 1.6rem; 
  } 
  .order-ticket {
  	line-height: .24rem;
	  position: absolute;
    left: -.04rem;
    top: -.04rem;
    height: .24rem;
    padding: .02rem;
	  font-size: .18rem;
    background: #00bcd4;
    color: #fff;
  }
  .order-ticket::before {  
  	content: "";
    position: absolute;
    top: 0;
    right: -.1rem;
    width: 0;
    height: 0;
    border-top: .14rem solid #00bcd4;
    border-bottom: .14rem solid #00bcd4;
    border-right: .1rem solid transparent;
  }
  .tourist-con-right {
  	flex: 1;
  	padding-bottom: .16rem;
  	position: relative;
  }
  .tourist-con-right:after {
  	content: "";
  	position: absolute;
  	height: 1px;
  	width: 100%;
  	bottom: 0;
  	right: 0;
	transform: scaleY(0.5);
	background: #c9cccd;
  }
  .tourist-describe {
  	line-height: .36rem;
  	font-size: .28rem;
  	color: #000;
  }
  .start-place {
  	line-height: .44rem;
  	font-size: .24rem;
  	color: #616161;
  }
  .start-place i:first-child {
	color: #56bbd2;
  }
  .start-place em {
  	padding: .05rem;
  }
  .sale-total {
  	line-height: .6rem;
  	font-size: .2rem;
  	color: #9e9e9e;
  }
  .tourist-price {
  	position: absolute;
  	right: .35rem;
  	bottom: .5rem;
  }
  .tourist-price {
  	color: #9e9e9e;
  }
  .tourist-price p span{
  	padding: 0 .07rem;
  	font-size: .3rem;
  	color: #ef8a33;
  }
  .tourist-price i {
  	font-size: .26rem;
  	color: #ef8a33;
  	font-weight: bold;
  }
  .coupon {
  	width: .51rem;
  	margin: 0 0 .06rem .32rem;
  	line-height: .25rem;
  	text-align: center;
  	font-size: .18rem;
  	color: #ea3925;
  	border: 1px solid #ea3925; 
  }
</style>