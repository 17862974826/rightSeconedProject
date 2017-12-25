<template>
	<div class="user-comment">
			<div class="user-theme">
				<i class="user-icon iconfont">&#xe6a5;</i>
				<span class="user-title">用户评论</span>
			</div>
			<div class="user-box border-top" v-for="item in userInfo" :key="item.id">
				<div class="user-star">★★★★★</div>
				<span class="user-appraise">{{item.comment}}</span>
				<div class="user-img">
					<img src="//s.qunarzz.com/piao/image/touch/sight/highQualityComment1.png" alt="" class="user-img-con1">
				</div>	
				<div class="user-data">c*2  {{item.date}}</div>
				<div class="user-data-img-con">
						<div class="user-img-con" v-for="items in item.img" :key="items.id">
							<img class="user-con-img" :src="items.imgUrl" alt="">
						</div>
					<div class="user-img-total">
						<span class="user-total">{{item.total}}</span>
					</div>
				</div>
			</div>
			<div class="user-comment1 border-top">
				<span class="user-comment-con">查看全部评论</span>
				<i class="icon-comment iconfont">&#xe6a7;</i>
			</div>
		</div>
</template>

<script>
	export default {
  props: ['userInfo']
	}
</script>

<style scoped>
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
		z-index: 1;
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
	.user-img-con1 {
		width: 100%;
		height: 100%;
	}
	.user-data-img-con {
		margin: .2rem 0 .1rem 0;
	}
	.user-img-con {	
		display: inline-block;
		box-sizing: border-box;
		width: 2.23rem;
		height: 1.64rem;
		padding:0 .07rem .14rem .07rem;
		position: relative;
	}
	.user-con-img {
		width: 100%;
		height: 100%;
	}
	.user-img-total {
		position: absolute;
		background: #000;
		opacity: .5;
		width: .94rem;
		height: .4rem;
		text-align: center;
		color: #fff;
		border-radius: .2rem 0 0 .2rem;
		line-height: .4rem;
		font-size: .24rem;
		right: .7rem;
		bottom: 1.2rem;
	}
	.user-total {
		margin-left: .05rem;
	}
	.user-comment1 {
		height: .8rem;
		background: #fff;
		text-align: center;
	}
	.user-comment-con {
		color: #616161;
		font-size: .26rem;
		line-height: .8rem;
	}
	.icon-comment {
		font-size: .20;
		line-height: .8rem;
		color: #616161;
	}
</style>