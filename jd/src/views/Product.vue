<template>
	
	<div id="product">
		<top-bar>
			
			<div class="nav-tab">
				
				<ul class="flex">
					<li class="flex-item" 
						:class="{active:index==navIndex}" 
						v-for="(item,index) in nav" 
						@click="navIndex=index;scrollTop(item.top); " :key="index">
						<span v-text="item.title"></span>
					</li>
				</ul>
				
			</div>
			
		</top-bar>
		
		<div style="height: 0.9rem;"  ref="product" ></div>
		
		<swiper></swiper>
		
		<div style="height: 1000px;"></div>
		
		<div ref="comment" style="height: 1000px;"  >
			
			<h1>评价</h1>
			
		</div>
		
		<div ref="detail" style="height: 1000px;"  >
			
			<h1>详情</h1>
			
		</div>
		
		
		<div ref="recommend" style="height: 1000px;"  >
			
			<h1>推荐</h1>
			
		</div>
		
		<btn-bar></btn-bar>
	</div>
	
</template>

<script>
	
	import TopBar from "@/components/TopBar";
	import BtnBar from "@/components/BtnBar";
	import Swiper from "@/components/ProductSwiper";
	
	
	export default{
		data(){
			return {
				navIndex:0,
				nav:[{title:'商品',top:0},{title:'评价',top:0},{title:'详情',top:0},{title:'推荐',top:0}]
			};
		},
		components:{
			TopBar,
			BtnBar,
			Swiper
		},
		methods:{
			
			getTopOffset(){
				this.nav[0].top = this.$refs['product'].offsetTop;
				this.nav[1].top = this.$refs['comment'].offsetTop;
				this.nav[2].top = this.$refs['detail'].offsetTop;
				this.nav[3].top = this.$refs['recommend'].offsetTop;
				console.log(this.nav);
			},
			
			scrollTop(val){
				
				// 当前值
				let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				// 目标值
				let target = val - 50;
				// 动画时长
				let duration = 300;
				// 动画次数
				let count = 50;
				// 时间片
				let timeOut = duration / count;
				// 步进值
				let step = (target - scrollTop)/count;
				
				let t = setInterval(()=>{
					scrollTop+=step;
					document.documentElement.scrollTop = scrollTop;
					count--;
					if(count<=0){
						clearInterval(t);
					}
				
				},timeOut);
				
				document.documentElement.scrollTop = val - 50;
			}
		},
		created(){
			//添加滚动事件监听
			window.addEventListener('scroll',()=>{
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				
				// 判断法滑动的位置
				this.nav.forEach((item,index)=>{
					
					if( Math.abs(item.top-scrollTop) <100){
						this.navIndex = index;
					}
				});
				
			})
		},
		mounted(){
			this.getTopOffset();
		}
	}
	
	
</script>

<style lang="less">
	
	.nav-tab{
		padding: 0 0.6rem;
		line-height: 0.9rem;
		text-align: center;
		
		li.active span{
			color:  #e4393c;
			padding-left: 0.26rem;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==);;
			background-size: 0.16rem;
			background-repeat: no-repeat;
			background-position: left center;
		}
	}
	
</style>