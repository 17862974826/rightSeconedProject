<template>
	<div>
		<div class="address-com" v-for="item in addressInfo" :key="item.id">
		<div class="address">
			<div class="address-position">
				<div class="address-detaile">
					<div class="address-pos">
						<i class="address-icon iconfont">&#xe64e;</i>
						<p class="address-title">{{item.title}}</p>
						<i class="spread-icon iconfont">&#xe6a7;</i>
					</div>
				</div>
			</div>	
			<div class="scenic-spot-introduction">
				<i class="scenic-picture iconfont">&#xe639;</i>
				<p class="scenic-title">{{item.address}}</p>
				<i class="spread-icon iconfont">&#xe6a7;</i>
			</div>
		</div>

		<div class="evaluate">
			<i class="evaluate-smile iconfont">&#xe6a5;</i>
			<i class="evaluate-star iconfont">★★★★★</i>
			<p class="evaluate-total">5.0分</p>
			<div class="evaluate-con">
				<p class="evaluate-title">{{item.comment}}评论</p>
				<i class="spread-icon iconfont">&#xe6a7;</i>
			</div>
		</div>
		<div class="stipulate">
			<i class="stipulate-trumpet iconfont">&#xe74c;</i>
			<p class="stipulate-content">{{item.hint}}</p>
			<i class="spread-icon iconfont">&#xe6a7;</i>
		</div>
		</div>
	</div>
</template>


<script>
	export default {
	  props: ['addressInfo']
	}
</script>

<style scoped>
	.address-position {
		position: relative;
		height: .91rem;
	}
	.address-detaile {
		position: absolute;
		width: 100%;
		background: #fff;
		top:-.08rem;
		border-radius: .08rem .08rem 0 0;
	}
	.address-pos {
		position: relative;
		height: .99rem;
		box-sizing: border-box;
		padding: .4rem 0 .32rem 0;
		margin-right: .24rem;
		margin-left: .24rem;
	}
	.address-pos::before {
		content: "";
    width: 100%;
    height: 2px;
    background: #e1e1e1;
    position: absolute;
    bottom: 0rem;
    left: 0;
    transform: scaleY(0.5);
    transform-origin: left bottom;
	}
	.address-icon {
		display: block;
		float: left;
		font-size: .24rem;
	}
	.address-title {
		font-size: .26rem;
		color: #212121;
		float: left;
		width: 6rem;
		margin-left: .25rem;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.spread-icon {
		display: block;
		float: right;
		font-size: .28rem;
		color: #b9b9b9;
	}
	.scenic-spot-introduction {
		box-sizing: border-box;
		height: .87rem;
		background: #fff;
		padding: .32rem .24rem;
	}
	.scenic-picture {
		float: left;
		font-size: .22rem;
		color: #9e9e9e;
	}
	.scenic-title {
		font-size: .26rem;
		color: #212121;
		float: left;
		margin-left: .21rem;
		width: 6rem;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.evaluate {
		height: .8rem;
		background: #fff;
		margin: .2rem 0;
		box-sizing:border-box;
		padding:.25rem .24rem .25rem .20rem;
		line-height: .4rem;
	}
	.evaluate-smile {
		font-size: .32rem;
		color: #55bad2;
		float: left;
	}
	.evaluate-star {
		float: left;
		margin-left: .17rem;
		color: #f4b752;
		font-size: .28rem;
	}
	.evaluate-con {
		float: right;
	}
	.evaluate-total {
		font-size: .26rem;
		color: #ef8a34;
		float: left;
		margin-left: .12rem;
	}
	.evaluate-title {
		float: left;
		font-size: .26rem;
		color: #9e9e9e;
		margin-right: .15rem;
	}
	.stipulate {
		height: .88rem;
		box-sizing: border-box;
		padding: .28rem .24rem .30rem .21rem;
		margin-bottom: .2rem;
		background: #faeee0;
		line-height: .44rem;
	}
	.stipulate-trumpet {
		float: left;
		font-size: .28rem;
		color: #e67a5c;
	} 
	.stipulate-content {
		float: left;
		font-size: .26rem;
		color: #de522f;
		margin-left: .12rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		width: 6rem;
	}
</style>