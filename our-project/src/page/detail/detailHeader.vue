<template>
	<div>
		<header class="particulars"  v-for="items in headerInfo" :key="items.id">
			<div class="particulars-list">
				<img :src="items.imgUrl" class="particulars-img">
			</div>
			<router-link :to="'/'">
			<div class="back">
				<i class="backbefore iconfont">&#xe624;</i>
			</div>
			</router-link>
			<p class="particulars-title">{{items.title}}</p>
			<div class="particulars-picture">
				<i class="picture-icon iconfont">&#xe639;</i>
				<p class="particulars-num">{{items.number}}</p>
			</div>	
			</header>
	</div>
</template>

<script>
	export default {
	  props: ['headerInfo']
	}
</script>

<style scoped>
	.particulars {
		height: 4.03rem;
		position: relative;
	}
	.particulars-list {
		height: 100%;
	}
	.particulars-img {
		width: 100%;
	}
	.back {
		position: absolute;
		height:.72rem;
		width: .72rem;
		border-radius: 50%;
		background:#646970;
		text-align: center;
		top: .1rem;
		left:.1rem;
		z-index: 1;
	}
	.backbefore {
		line-height: .72rem;
		font-size: .36rem;
		color:#fff;
	}
	.particulars-title {
		position: absolute;
		font-size: .34rem;
		color:#fff;
		bottom:.25rem;
		left:.21rem;
		z-index: 1;
	}
	.particulars-picture {
		position: absolute;
		height:.4rem;
		width: 1.2rem;
		background: #000;
		opacity: .5;
		border-radius: .16rem;
		bottom: .24rem;
		right: .2rem;
		z-index: 1;
		line-height: .4rem;
	}
	.picture-icon {
		font-size: .2rem;
		color: #fff;
		float: left;
		margin-left: .29rem;
	}
	.particulars-num {
		float: left;
		margin-left: .12rem;
		color: #fff;
		font-size: .18rem;
	}
</style>