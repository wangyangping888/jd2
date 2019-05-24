<template>
	
	<div id="category">
		
		<top-bar></top-bar>
		<div class="select flex">
			<div class="select_left" ref="select_left"  @touchstart="ontouchstart" @touchmove="ontouchmove" @touchend="ontouchend" @touchcancel="ontouchcancel">
				<ul :style="{top:tmp+'px'}" :class="{transition:transition}" ref="scroll">
					<li v-for="(item,index) in 100"  :class="{active:navIndex==index}" @click="onClick(index)" :key="index" >分类{{item}}</li>
				</ul>
			</div>
			<div class="select_right">
                <img src="https://img13.360buyimg.com/mcoss/jfs/t1/20167/38/5982/51492/5c46af5dE7736fc55/b27a8ed4e61b2291.png"/>
				<div class="content"></div>

			</div>
		</div>
		<nav-bar></nav-bar>
	</div>
	
</template>

<script>
    import TopBar from "@/components/TopBar";
	import NavBar from "@/components/NavBar";
	
export default {

		data() {

			return {
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
			},

		},
		components: {
			TopBar,
			NavBar
		},
		mounted() {

			// 计算滑动到底部的限定值
			this.limitTop = this.$refs['select_left'].offsetHeight - this.$refs['scroll'].offsetHeight - 150;

		},
		
	}
</script>

<style lang="less">
   #category{
	   background-color:white;
	   width: 100%;
	   height: 100%;
	   padding: 0.9rem 0rem 0.9rem;
	   .select{
		   height:100%;
		  .select_left{
		   width: 1.72rem;
		   height: 100%;
		   background-color: white;
		   overflow: hidden;
		   position: relative;
            ul{
				line-height: 0.92rem;
				width: 100%;
				text-align: center;
				position: absolute;
				li{
					border-bottom: solid 1px #aaa;
					border-right: solid 1px #aaa;
					
					&.active{
						color: #e93b3d;
					}
				}
			}
		  }
		  .select_right{
			  width:6.36rem;
			   img{
				 display: block;
				 height:2.06rem;
				 width:5.7rem;
				 margin-left: 0.1rem;
				 margin-top: 0.1rem;
			  }
		  }
		  .transition {
			transition: top 0.3s linear;
		}
	   }
	   
   }
</style>