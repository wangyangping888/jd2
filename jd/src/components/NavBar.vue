<template>

	<ul class="nav-bar">
		
		<li v-for="(item,index) in nav" v-bind:key="index">
			<Router-Link :to="item.url">
				<img :src="(item.url==current)?item.active_icon:item.icon" />
			</Router-Link>
		</li>
		
	</ul>

</template>

<script>
	export default {
		data() {
			return {
				current: '/',
				nav: [{
						url: "/",
						icon: require('@/assets/images/icons/home.png'),
						active_icon: require('@/assets/images/icons/home_active.png')
					},
					{
						url: "/category",
						icon: require('@/assets/images/icons/category.png'),
						active_icon: require('@/assets/images/icons/category_active.png')
					},
					{
						url: "/pin",
						icon: require('@/assets/images/icons/pin.png'),
						active_icon: require('@/assets/images/icons/pin_active.png')
					},
					{
						url: "/cart",
						icon: require('@/assets/images/icons/cart.png'),
						active_icon: require('@/assets/images/icons/cart.png')
					},
					{
						url: "/user",
						icon: require('@/assets/images/icons/user.png'),
						active_icon: require('@/assets/images/icons/user_active.png')
					},
				]
			};
		},
		mounted() {
			// 当前路由对象  this.$route
			// 获取当前的路径
			this.current = this.$route.path;
		}
	}
</script>

<style lang="less">
	.nav-bar {
		position: fixed;
		z-index: 9999;
		bottom: 0;
		width: 100%;
		background-color: #FFFFFF;
		box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		li {
			float: left;
			width: 20%;
			text-align: center;
		}
		img {
			width: 1.2rem;
		}
	}
</style>