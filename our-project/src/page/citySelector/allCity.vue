<template>
	<div class="allCity_wrap">
		<div class="part_city" v-for="len in allCity">
			<h2 class="classify">{{len.classify}}</h2>
			<ul class="city_list">
				<li v-for="item in len.cityName" :key="item.id">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
    export default {
      props: ['allCity'],
      name: 'allCity',
      data () {
        return {}
      },
      computed: {},
      methods: {}
    }
</script>

<style scoped>
	.allCity_wrap {
		display: flex;
		flex-direction: column;
		background: #f6f6f6;
	}
	.classify {
		line-height: 0.44rem;
		padding-left: 0.3rem;
		font-size: 0.19rem;
		color: #808080;
		border-bottom: 1px solid #e9e9e9;
	}
	.city_list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	.city_list > li{
		line-height: 0.74rem;
		padding-left: 0.22rem;
		width: 100%;
		border-bottom: 1px solid #e9e9e9;
		background: #fff;
		box-sizing: border-box;
		color: #616161;
		font-size: 0.26rem;
	}
</style>