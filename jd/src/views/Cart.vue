<template>
	
	<div id="cart">
		<top-bar>
			<div class="title">购物车</div>
		</top-bar>
		<div style="height: 1rem;"></div>
		
		<!-- <check-box v-model="all"> {{all}} </check-box> -->
		
		
		<!-- 总数-总价-结算的组件 -->
		<!-- <total-sum-bar v-model="all"  :sum="234"  :count="0" ></total-sum-bar> -->
		
	</div>
	
</template>

<script>
	import TopBar from "@/components/TopBar";
	// import CheckBox from "@/components/CheckBox";
	// import TotalSumBar from "@/components/TotalSumBar";
	
	export default{
		data(){
			return {
				all:false
			};
		},
		components:{
			TopBar,
			// CheckBox,
			// TotalSumBar,
		}
	}
	
</script>

<style>
</style>