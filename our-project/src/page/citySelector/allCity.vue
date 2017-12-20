<template>
	<div class="allCity_wrap" ref='move'>
		<div class="part_city" v-for="len in allCity">
			<h2 class="classify" :ref="len.classify">{{len.classify}}</h2>
			<ul class="city_list">
				<li v-for="item in len.cityName" :key="item.id">{{item.name}}</li>
			</ul>
		</div>
		<div class="select_case" ref='word'>
			<span @click='handleClick()' v-for='item in allCity'>{{item.classify}}</span>
		</div>
	</div>
</template>

<script>
    export default {
      props: ['allCity'],
      mounted () {
        this.$refs.word.addEventListener('click', (e) => {
          this.handleClick(e.target.innerHTML)
          e.preventDefault()
        })
      },
      name: 'allCity',
      data () {
        return {
          distanct: 44
        }
      },
      computed: {},
      methods: {
        handleClick (num) {
          if (num) {
            document.documentElement.scrollTop = this.$refs[num][0].offsetTop - this.distanct
          }
        }
      }
    }
</script>

<style scoped>
	.allCity_wrap {
		display: flex;
		flex-direction: column;
		background: #f6f6f6;
	}
	.part_city {
		
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
	.select_case {
		display: flex;
		flex-direction: column;
		position: fixed;
		padding-right: 0.08rem;
		right: 0;
		top: 1.6rem;
		font-size: 0.18rem;
		color: #73c5c4;
	}
</style>