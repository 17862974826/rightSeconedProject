<template>
	<div>
		<div class="search_res">
			<ul class="listSucc">
				<li v-for='item in findCitySucc'>{{item}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'searchResult',
	  props: ['findCitySucc']
	}
</script>
<style scoped>
.search_res {
	position: fixed;
	z-index: 10;
	width: 100%;
	height: 100%;
	background: #fff;
	overflow: auto;
}
.listSucc {
	margin-top: 1.6rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.listSucc > li {
	line-height: 0.74rem;
    padding-left: 0.22rem;
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
    box-sizing: border-box;
    color: #616161;
    font-size: 0.26rem;
}
</style>