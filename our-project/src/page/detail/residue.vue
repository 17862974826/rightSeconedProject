<template>
	<div class="residue">
			<div class="residue-title border-bottom">
				<i class="residue-title-icon iconfont">&#xe6a5;</i>
				<span class="residue-con">看了该景点的人还看了</span>
			</div>
			<div class="residue-con-list">
				<ul>
					<li class="residue-list border-bottom" v-for="item in residueInfo" :key="item.id">
						<div class="residue-list-con">
							<img class="residue-list-img" :src="item.imgUrl" alt="">
						</div>
						<div class="residue-list-total">
							<h3 class="residue-site">{{item.title}}</h3>
							<h4 class="residue-price">
								&yen;<span class="residue-num">{{item.price}}</span>
								<span class="residuce-over">起</span>
							</h4>
							<p class="residue-comment">
								<span class="residue-star">★★★★★</span>
								<span class="residue-number">{{item.number}}</span>
							</p>
							<p class="residue-address">{{item.address}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>	
</template>

<script>
	export default {
  props: ['residueInfo']
	}
</script>	

<style scoped>
	.residue {
		background: #fff;
	}
	.residue-title {
		height: .87rem;
		box-sizing: border-box;
		padding-left: .2rem;
	}
	.residue-con {
		line-height: .87rem;
		font-size: .28rem;
		color: #353535;
	}
	.residue-title-icon {
		color: #50a6b7;
	}
	.residue-con {
		margin-left: .15rem;
	}
	.residue-list {
		box-sizing: border-box;
		padding: .2rem;
		position: relative;
	}
	.residue-list-con {
		width: 1.62rem;
		height: 1.22rem;
	}
	.residue-list-img {
		width: 100%;
		height: 100%;
	}
	.residue-list-total {
		position: absolute;
		width: 5.27rem;
		right: 0; 
		top:.25rem;
	}
	.residue-site {
		font-size: .28rem;
		color: #212121;
		float: left;
	}
	.residue-price {
		float: right;
		margin-right: .21rem;
		color: #f19d38;
		font-size: .18rem;
	}
	.residue-num {
		font-size: .26rem;
	}
	.residuce-over {
		font-size: .22rem;
		color: #9e9e9e;
	}
	.residue-comment {
		position: absolute;
		top: .5rem;
	}
	.residue-star {
		font-size: .28rem;
		color: #f4b752;
	}
	.residue-number {
		font-size: .18rem;
		color: #9e9e9e;
	}
	.residue-address {
		position: absolute;
		top: .9rem;
		font-size: .24rem;
		color: #9e9e9e;
	}
</style>