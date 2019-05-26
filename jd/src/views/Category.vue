<template>

	<div id="category">
		<top-bar></top-bar>

		<div class="wrap flex">

			<aside class="aside" ref="aside"  @touchstart="ontouchstart" @touchmove="ontouchmove" @touchend="ontouchend" @touchcancel="ontouchcancel">
				<ul :style="{top:tmp+'px'}" :class="{transition:transition}" ref="scroll">
					<li v-for="(item,index) in 100"  :class="{active:navIndex==index}" @click="onClick(index)" >分类{{item}}</li>
				</ul>
			</aside>

			<div class="content flex-item"></div>
		</div>

		<nav-bar></nav-bar>
	</div>

</template>

<script>
	import NavBar from "@/components/NavBar";
	import TopBar from "@/components/TopBar";
	export default {

		data() {
			return {
				navIndex:0,
				tmp: 0,
				offsetTop: 0,
				limitTop: 0,
				startY: 0,
				transition: false
			};
		},
		methods: {
			ontouchstart(e) {
				// 获取开始的位置
				this.startY = e.changedTouches[0].clientY;
				this.transition = false;
			},
			ontouchmove(e) {
				let y = e.changedTouches[0].clientY;
				// 计算滑动的距离
				this.tmp = this.offsetTop + y - this.startY;
				// 限定滑动的长度（150）
				this.tmp = this.tmp > 150 ? 150 : this.tmp;
				this.tmp = this.tmp < this.limitTop ? this.limitTop : this.tmp;
			},
			ontouchend(e) {
				// 返回顶部
				this.tmp = this.tmp > 0 ? 0 : this.tmp;
				this.tmp = this.tmp < (this.limitTop + 150) ? (this.limitTop + 150) : this.tmp;
				this.offsetTop = this.tmp;
				this.transition = true;
			},
			ontouchcancel(e) {
				// 返回顶部
				this.tmp = this.tmp > 0 ? 0 : this.tmp;
				this.tmp = this.tmp < (this.limitTop + 150) ? (this.limitTop + 150) : this.tmp;
				this.offsetTop = this.tmp;
				this.transition = true;
			},
			onClick(index){
				this.navIndex = index;
				// 根据 索引值计算滚动的距离
				this.tmp =  this.$refs['scroll'].offsetHeight*(this.navIndex / 100)*-1;
			
				// 越界处理
				this.tmp = this.tmp > 0 ? 0 : this.tmp;
				this.tmp = this.tmp < (this.limitTop + 150) ? (this.limitTop + 150) : this.tmp;
				this.offsetTop = this.tmp;
				this.transition = true;
			}
		},
		components: {
			TopBar,
			NavBar
		},
		mounted() {
			// 计算滑动到底部的限定值
			this.limitTop = this.$refs['aside'].offsetHeight - this.$refs['scroll'].offsetHeight - 150;
		}
	}
</script>

<style lang="less">
	#category {
		width: 100%;
		height: 100%;
		background-color: red;
		padding: 0.9rem 0 0.9rem;
		box-sizing: border-box;
		.wrap {
			height: 100%;
		}
		aside {
			height: 100%;
			overflow: hidden;
			position: relative;
			width: 1.72rem;
			background: #f8f8f8;
			ul {
				position: absolute;
				width: 100%;
				text-align: center;
				line-height: 0.92rem;
				font-size: 0.28rem;
				color: #333;
				
				li{
					border-bottom: solid 1px #aaa;
					
					&.active{
						color: #e93b3d;
					}
				}
				
				
				
			}
		}
		.transition {
			transition: top 0.3s linear;
		}
	}
</style>