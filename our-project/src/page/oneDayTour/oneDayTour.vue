<template>
  <div>
   
  	<div class="qunatop" ref="scrollEvent">
    <router-link :to="'/hotDetail'"> 
  	  <div class="icon iconfont" >&#xe624;返回</div>
    </router-link>
  	  <div class="bank">天安门故宫珍宝馆+八达岭+颐和园+恭王府+联票无线耳麦人工讲解</div>
  	</div>  
  
  <my-section></my-section>

  <div class="detail-tab-group">
      <div class="choose-tab"  ref="tab" >
        <div class="tab-item" data-id="timelineGroup" >行程介绍</div>
        <div class="tab-item" data-id="costGroup" >费用说明</div>
        <div class="tab-item" data-id="instructionGroup">使用说明</div>
      </div>
  </div>
 <div v-for="item in bannerInfo" :key="item.id">
	<main>
    <div class="my-journey">
      <div class="my-journey-header" >
        <div class="my-journey-title">
          <span class="iconfont">&#xe624;</span>
          <span>交通</span>
          <div>汽车往返</div>    
        </div>
        <div class="my-journey-title">
          <span class="iconfont">&#xe624;</span>
          <span>用餐</span>
          <div>餐食自理</div>
        </div>
      </div>
      <div class="my-journey-center">
        <h3>行程亮点</h3>
      </div>
      <div class="my-journey-last">
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
        <p>{{item.p3}}</p>     
      </div>
      <h3 class="route-headtext">行程安排</h3>
      <my-role></my-role>

      <div class="moreoutter">
       <div class="mp-card-more mp-border-bottom">
      查看详细产品介绍<span class="iconfont">F</span>
       </div>
      </div>
    </div>	
  </main> 
 </div>
   <footer>
      <div class="counsel">
        <i class=" iconfont">&#xe624;</i>
        <b>咨询</b>
      </div>
      
      <div class="immediately">
      <router-link :to="'/skiseason'">
        <a href="">立即购票</a>
        </router-link>
      </div>
      
      <div>    
      </div>
    </footer>
  </div>
</template>
<script>
import MyRole from './myjourney.vue'
import MySection from './mysection.vue'
export default {
  components: {
    MyRole,
    MySection
  },
  data () {
    return {
      bannerInfo: [],
      scroll: ''
    }
  },
  methods: {
    getData () {
      this.$http.get('/static/oneDayTour.json').then(this.handleGetSucc.bind(this))
    },
    handleGetSucc (res) {
      const body = res.body
      if (body && body.data) {
        this.bannerInfo = body.data.banner
      }
    },
    menu () {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop
      if (scroll > 10) {
        this.$refs.scrollEvent.style.display = 'block'
      } else {
        this.$refs.scrollEvent.style.display = 'none'
      }
      if (scroll > 400) {
        this.$refs.tab.style.position = 'fixed'
        this.$refs.tab.style.top = '0.88rem'
      } else {
        this.$refs.tab.style.position = 'relative'
        this.$refs.tab.style.top = 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.menu)
  },
  created () {
    this.getData()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.menu, false)
  }
}
</script>
<style scoped>
  body {
  	background: #f5f5f5;
  }
  .qunatop {
  	height: 0.88rem;
  	width: 100%;
  	position: fixed;
  	top:0;
    z-index: 1;
    display: none;
  	background: #12bcd5;
  }
  .icon {
  	font-size: 0.28rem;
  	height: 0.88rem;
  	width: 0.88rem;
  	line-height: 0.88rem;
  	margin-right: 0.2rem;
  	text-align: center;
  	float: left;
  	color: #edffff;
  }
  .bank {
  	font-size: 0.28rem;
  	width: 5.33rem;
  	line-height: 0.88rem;
  	text-align: center;
  	float: left;
  	color: #edffff;
  	white-space: nowrap;
  	overflow: hidden;
  	text-overflow: ellipsis;
  }
  .detail-tab-group {
    margin-top: .2rem;
    padding: .01rem 0;
    min-height: .6rem;
    background-color: #fff;
  }
  .choose-tab {
    display: flex;
    justify-content: space-around;
    width: 100%;
    z-index: 99;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #ddd
  }
  .tab-item {
    display: block;
    height: .4rem;
    width:33%;
    padding: .2rem 0;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
    text-align: center;
  }
  main {
	  flex: 1;
    overflow: hidden;
  }
  .my-journey {
    box-sizing: border-box;
    padding:0.26rem 0.2rem 0;
    background: #fff;
  }
  .my-journey-header {
    border-radius: 0.15rem;
    background: #f5f5f5;
  }
  .my-journey-title {
    padding:0.24rem 0 0.3rem 0.2rem;
    display: flex;
  }
  .my-journey-title span:first-child {
    font-size: 0.26rem;
    margin-right: 0.22rem;
    color: #8e8e8e;
  }
  .my-journey-title span:last-child {
    font-size: 0.26rem;
    color: #282828;
  }
  .my-journey-title>div {
    font-size: 0.26rem;
    margin-left: 0.2rem;
    color: #606060;
  }
  .my-journey-center>h3 {
    font-size: 0.38rem;
    margin:0.35rem 0;
    color: #5f5f5f;
  }
  .my-journey-last {
    padding-bottom: 0.2rem;
    border-bottom: 0.01rem dashed #ccc;
  }
  .my-journey-last>p {
    font-size: 0.24rem;
    line-height: 0.44rem;
    color: #676767;
  }
  footer {
    width: 100%;
    height: 0.96rem;
    z-index: 1;
    position:fixed;
    bottom: 0;
    background: #f19d38;
    display: flex;
  }
  .route-headtext {
    font-size: 0.36rem;
    padding: 0.3rem 0;
    color: #575757;
  }
  .counsel {
    width: 1rem;
    height: 0.96rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center; 
    background: #fff
  }
  .counsel > b {
    font-size: 0.18rem;
    color: #616161;
  }
  .immediately {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .immediately a {
    font-size: 0.38rem;
    color: #fff; 
  }
</style>