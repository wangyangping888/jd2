<template>
  <div class="weui-slider-box">
    <div class="weui-slider">
      <div id="sliderInner" ref="linear"  class="weui-slider__inner" @touchmove= "touchmove"  @touchend ="touchend" >
        <div id="sliderTrack" :style="{width:n/max*100+'%'}" class="weui-slider__track"></div>
        <div id="sliderHandler" :style="{left:n/max*100+'%'}" class="weui-slider__handler" @touchstart = "touchstart" ></div>
      </div>
    </div>
    <div id="sliderValue" class="weui-slider-box__value" v-text="val"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
      tmp:0,
      start:0,
      length:0,
    };
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    max:{
        type:Number,
        default:100,
    }
  },
  watch: {
    value(val) {
        this.n = val;
        this.tmp = val;
    }
  },
  computed:{
      val(){
          return Math.floor(this.n/this.max*100);
      }
  },
  methods:{
  	touchstart(e){
  		this.start = e.changedTouches[0].clientX;
  	
  	 	// 获取线的总长度
  	 	this.length = this.$refs['linear'].offsetWidth;
  	},
  	touchmove(e){
  			//  滑动的差值(单位：px)
  			let x =  e.changedTouches[0].clientX-this.start;
  			
  			// 计算n 的大小
  			this.n = Math.floor(this.tmp + (x/this.length*this.max));
  			
  			// 防止越界操作
  			this.n = this.n<=1?1:this.n;
  			this.n = this.n>=this.max?this.max:this.n;
  	},
  	touchend(e){
  		// 结束滑动，把值传出去
  		this.tmp = this.n;
  		this.$emit('input',this.n);
  	},
  },
  created() {
    this.n = this.value;
    this.tmp = this.value;
  }
};
</script>
<style>
</style>
