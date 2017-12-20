<template>
  <div class="total-run">
  <div v-for="item in myjourney" :key="item.id" class="arrange-introduce">

   <div class="prddetail-routeitem">
     <span class="prddetail-date">{{item.time}}</span>
	 <div class="verticalline">
     	<span class="iconfont">&#xe624;</span>
     	<div>
     	  <h5 class="route-title">{{item.content}}</h5>
     	  <p class="route-desc">{{item.place}}</p>
     	</div>
     </div>
     
   </div>
  	</div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      myjourney: []
    }
  },
  methods: {
    getData () {
      this.$http.get('/static/oneDayTour.json').then(this.handleGetSucc.bind(this))
    },
    handleGetSucc (res) {
      const body = res.body
      if (body && body.data) {
        this.myjourney = body.data.myjourney
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style scoped>
 .total-run {
    position: relative;
 }
 .assembling-place {
 	  display: flex;
 	  padding-bottom: 0.38rem
 }
 .prddetail-date {
 	  font-size: 0.2rem;
 	  color: #212121;
 }
 .verticalline {
	  display: flex;
 }
 .verticalline>span:first-child {
 	  margin:0 0.33rem;
 }
 .prddetail-routeitem {
 	  padding-bottom: 0.4rem;
 	  display: flex;
 }
 .route-title {
	  font-size: 0.28rem;
 	  color: #212121;
 }
 .route-desc {
 	  font-size: 0.26rem;
 	  color: #626262;
 	  line-height: 0.4rem
 }
 .arrange-introduce ::after {
    content:"";
    width: 100%;
    height: 2px;
    background:red;
    position: absolute;;
    bottom: 0;
    left: 0;
    transform: scaleY(0.5);
    transform-origin: left bottom;
 }
</style>