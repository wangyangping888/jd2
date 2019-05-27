<template>
	
	<div>
		
		<div class="box"></div>
		<h1>我的登录状态：{{$store.state.login}}</h1>
		<nav-bar></nav-bar>
	</div>
	
</template>

<script>
	import NavBar from "@/components/NavBar";
	
	export default{
		components:{
			NavBar	
		}
	}
</script>

<style>
</style>