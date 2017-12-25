<template>
	<div>
		<div class="header">
			<i class="header-icon iconfont">&#xe624;</i>
			<h1 class="header-title">温泉5折起，精挑细选温泉清单</h1>
			<h2 class="header-page">
				<i class="icon-page iconfont">&#xe6e3;</i>
				<span class="header-page-con">首页</span>
			</h2>
		</div>

		<div class="ban-con">
			<div class="ban">
				<img src="//img1.qunarzz.com/piao/fusion/1710/a5/30bea424f8862102.jpg_640x361_929a4c2a.jpg" alt="" class="ban-img">
				<div class="mask"></div>
			</div>
			<div class="ban-title">
				<span>★</span>
				<span>温泉5折起</span>
				<span>★</span>
			</div>
			<div class="ban-detail">	
        精挑细选温泉清单 
			</div>
			<div class="ban-address">
				<span class="ban-address-title">北京</span>
				<i class="ban-icon iconfont">&#xe62d;</i>
			</div>
		</div>
		

	</div>
</template>

<script>
	export default {
  name: 'hotSpring'
	}
</script>

<style scoped>
	.header {
		height: .88rem;
		background: #1ba9ba;
		box-sizing: border-box;
		padding: 0 .22rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
	}
	.header-icon {
		font-size: .36rem;
	}
	.header-title {
		font-size: .32rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.header-page {
		width: .88rem;
		height: .88rem;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: .1rem 0;
		justify-content: center;
		align-items: space-between;
		text-align: center;
	}
	.icon-page {
		font-size: .4rem;
	} 
	.ban-con {
		position: relative;
		background-color:#fff;	
	}
	.ban {
		width: 100%;
		height: 0;
		padding-bottom: 56.4%;		
	}
	.ban-img {
		width: 100%;	
		opacity: 1;
	}
	.mask {
		width: 100%;
	  position: absolute; 
		background: #000;
		z-index: 1;
		height: 0;
		padding-bottom: 56.4%;
		opacity: .5;
		top: 0rem;
	}
	.ban-title {
		position: absolute;
		color: #fff;
		top: 1.5rem;
		left: 2.7rem;
		font-size: .36rem;
		font-weight: 500;
		z-index: 1;
	} 
	.ban-detail {
		position: absolute;
		color: #fff;
		font-size: .44rem;
		font-weight: 900;
		left: 2.1rem;
		top: 2rem;
		z-index: 1;
	}
	.ban-address {
		width: 1.2rem;
		position: absolute;
		height: .56rem;
		line-height: .56rem;
		background: #000;
		opacity: .5;
		border-radius: .56rem;
	}
	.ban-address-title {
		color: #fff;
		font-size: .36rem;
	}
	.ban-icon {
		font-size: .24rem;
		color: #fff;
	}
</style>