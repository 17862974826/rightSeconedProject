<template>
	<div>
		<div class="total">
			<div class="recommend">
			<div class="recommend-border">
				<div class="recommend-title">
					<div class="recommend-like">
						<i class="like-icon iconfont">&#xe677;</i>
					</div>
					<h2 class="recommend-con">去哪儿推荐</h2>
					</div>
				</div>

				<div class="recommend-constainer" v-for="item in recommendInfo" :key="item.id">
					<div class="recommend-detail">
					<h3 class="recommend-detail-con">
						{{item.title}}
					</h3>
					<div class="detail-list">
					<span class="explain">
						<i class="detail-current iconfont">&#xe8e3;</i>
						可定明日
					</span>
					<span class="explain">
						<i class="detail-current iconfont">&#xe8e3;</i>
						无购物
					</span>
					<span class="explain">
						<i class="detail-current iconfont">&#xe8e3;</i>
						无自费
					</span>
					</div>
				</div>
				<div class="detail-examine">
					<div class="examine-price">
						&yen;<em class="examine-num">{{item.price}}</em>
						<span class="examine-over">起</span>
					</div>
					<span class="examine-message">查看</span>
			  </div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
  props: ['recommendInfo']
	}
</script>

<style scoped>
	.recommend {
		height: 5.02rem;
		background: #fff;
		margin-bottom: .2rem;
		position: relative;
	}
	.recommend-border {
		height: .88rem;
	}
	.recommend-border::before{
		content: "";
    width: 100%;
    height: 2px;
    background: #e1e1e1;
    position: absolute;
    bottom: 4.15rem;
    transform: scaleY(0.5);
    transform-origin: left bottom;
	}
	.recommend-constainer:last-child::before{
		content: "";
    width: 100%;
    height: 2px;
    background: #e1e1e1;
    position: absolute;
    bottom: 2.05rem;
    transform: scaleY(0.5);
    transform-origin: left bottom;
	}
	.recommend-title {
		box-sizing: border-box;
		height: .88rem;
		padding:.19rem .2rem;
		line-height: .49rem;
	}
	.recommend-like {
		width: .5rem;
		height: .5rem;
		background: #ed7773;
		border-radius: 50%;
		text-align: center;
		line-height: .5rem;
		float: left;
	}
	.like-icon {
		color: #fff;
		font-size: .26rem;
	}
	.recommend-con {
		float: left;
		margin-left: .21rem;
		font-size: .3rem;
		color: #333;
	}
	.recommend-constainer {
		height: 2.07rem;
	}
	.recommend-detail {
		box-sizing: border-box;
		padding: 0rem .28rem 0rem .21rem;
		position: relative;
		margin-top: .2rem;
		margin-bottom: .2rem;
		float: left;
	}
	.recommend-detail-con {		
		width: 5rem;	
		font-size: .28rem;
		color: #333;
		line-height: .52rem;
	}
	.recommend-detail::before {
		content: "";
    width: 2px;
    height: 100%;
    background: #dadada;
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    transform: scaleX(0.5);
    transform-origin: center bottom;
	}
	.detail-list {
		width: 5rem;
		margin-top: .14rem;
	}
	.explain {
		font-size: .2rem;
		color: #616161;
		margin-right: .15rem;
	}
	.detail-current {
		font-size: .16rem;
		color: #59aebd;
	}
	.detail-examine {
		float: right;
	}
	.examine-price {
		font-size: .18rem;
		color: #f19d38;
		margin-top: .57rem;
		margin-left: .41rem;
	}
	.examine-num {
		font-size: .32rem;
		padding-left: .04rem;

	}
	.examine-over {
		color: #9e9e9e;
		font-size: .18rem;
	}
	.examine-message {
		display: inline-block;
		margin-right: .2rem;
		width: 1.61rem;
		height: .6rem;
		background: #f19d38;
		text-align: center;
		line-height: .6rem;
		border-radius: .04rem;
		margin-top: .05rem;
		color: #fff;
	}
</style>