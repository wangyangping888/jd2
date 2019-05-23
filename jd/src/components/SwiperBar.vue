<template>
    <div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in images" :key="index">
				<img :src="item" />
			</div>
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";

	export default {
		data() {
			return {
				swiper: null,
				images: [require('@/assets/images/product_5.jpg'), require('@/assets/images/product_6.jpg'), require('@/assets/images/product_7.jpg'), require('@/assets/images/product_8.jpg')]
			};
		},
		methods: {},
		created() {},
		// 渲染完成
		mounted() {
			this.swiper = new Swiper('.swiper-container', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});
		}
	}
</script>
<style lang="less">
.swiper-container {
		width: 100%;
	}
	
	.swiper-container img {
		width: 100%;
	}
</style>