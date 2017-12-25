<template>
	<div  ref="ticketCon">
		<div class="ticket" v-for="(item, index) in listInfo" :key="item.id">
			<div class="adult-ticket border-bottom">
				<i class="adult-icon iconfont">&#xe6a5;</i>
				<h2 class="adult-ticket-con">{{item.title}}</h2>
			</div>
			<div class="ticket-morning-shows border-bottom" v-for="list in item.listdetail" :key="list.id" ref="ticketList">
				<div class="ticket-morning">{{list.title}}
					<span class="ticket-evidence">{{list.hint}}</span>
				</div>
				<div class="ticket-price-con">
					&yen;<em class="ticket-price">{{list.price}}</em>
					<span class="ticket-over">起</span>
				</div>
				<div class="shrink-div">
					<i class="shrink-icon iconfont">&#xe62d;</i>
				</div>
			</div>
			<div class="ticket-morning-shows border-bottom" @click="handleClick" :data-id='index'>
				<span class="check-ticket" :data-id='index'>{{item.titled}}</span>
				<i class="check-product iconfont">&#xe62d;</i>
			</div>
			 <div class="ticket-show"></div>	
		</div>
		</div>
</template>

<script>
	export default {
  props: ['listInfo'],
  data () {
    return {
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', {
        data: e.target.getAttribute('data-id')
      })
    }
  }
}
</script>

<style scoped>
	.ticket {
		margin-bottom: .2rem;
		background: #fff;
		position: relative;
	}
	.adult-ticket {
		height: .88rem;
		box-sizing: border-box;
		padding: .27rem .2rem .27rem .2rem;
		line-height: .44rem;

	}
	.adult-icon {
		float: left;
		font-size: .32rem;
		color: #54b9d1;
	}
	.adult-ticket-con {
		float: left;
		font-size: .3rem;
		color: #333;
		margin-left: .09rem;
		width: 6rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.ticket-morning-shows {
		padding: .22rem .2rem;
		line-height: .28rem;
		display: flex;
	}
	.ticket-morning {
		font-size: .30rem;
		color: #333;
		margin-right: 1.8rem;
		line-height: .46rem;
		text-overflow: ellipsis;
		overflow: hidden;
		line-clamp: 2;
    box-orient: vertical
	}
	.ticket-evidence {
		font-size: .22rem;
		color: #888;
		margin-left: 0.13rem;
	}
	.ticket-price-con {
		position: absolute;
		right: .46rem;
		font-size: .18rem;
		color: #f1a23c;
		margin-top: .08rem;
	}
	.ticket-price {
		margin-left: .04rem;
		font-size: .28rem;
	}
	.ticket-over {
		font-size: .18rem;
		color: #9e9e9e;
	}
	.shrink-icon {
		float: right;
		font-size: 0.12rem;
		color: #9e9e9e;
	}
	.ticket-show {
		display: none;
		height: 5rem;
		background: #f5f5f5;
	}
	.shrink-div {
		position: absolute;
		right: .2rem;
		margin-top: .08rem;
	}
	.morning-shows {
		font-size: .26rem;
		color: #616161;
		line-height: .26rem;
	}
	.check-ticket {
		margin-right: .12rem;
		margin-left: 2.56rem;
	}
	.check-product {
		font-size: .12rem;
		color: #636363;
	}
</style>