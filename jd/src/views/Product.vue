<template>
  <div id="product">
    <top-bar>
      <div class="nav-tab">
        <ul class="flex">
          <li
            class="flex-item"
            :class="{active:index==navIndex}"
            v-for="(item,index) in nav"
            @click="navIndex=index; scrollTop(item.top)"
            v-bind:key="index"
          >
            <span v-text="item.title"></span>
          </li>
        </ul>
      </div>
    </top-bar>
    <div style="height: 0.9rem;"   >
    </div>
   
    <div style="height: 1000px;" ref="product"> <swiper-bar></swiper-bar></div>
    <div style="height:1000px" ref="comment">
      <h1>评价</h1>
    </div>
    <div style="height:1000px" ref="detail">
      <h1>详情</h1>
    </div>
    <div style="height:1000px" ref="recommend">
      <h1>推荐</h1>
    </div>
    <return-bar></return-bar>
    <btn-bar></btn-bar>

    <!-- <h1>{{ $route.params.id  }}</h1> -->
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import BtnBar from "@/components/BtnBar";
import SwiperBar from "@/components/SwiperBar";
import { setInterval, clearInterval } from 'timers';
import { timeout } from 'q';
import ReturnBar from "@/components/ReturnBar";
export default {
  data() {
    return {
      navIndex: 0,
      nav: [
        { title: "商品",top:0 },
        { title: "评价",top:0 },
        { title: "详情",top:0  },
        { title: "推荐",top:0  }
      ]
    };
  },
  components: {
    TopBar,
    BtnBar,
    SwiperBar,
    ReturnBar,
  },
  methods:{
     getTopOffset(){
       this.nav[0].top=this.$refs['product'].offsetTop;
       this.nav[1].top=this.$refs['comment'].offsetTop;
       this.nav[2].top=this.$refs['detail'].offsetTop;
       this.nav[3].top=this.$refs['recommend'].offsetTop;
       console.log(this.nav)

     },
     scrollTop(val){
       let scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
       let target=val-50;
       let duration=300;
       let count=50;
       let timeOut=duration/count;
       let step=(target-scrollTop)/count;
       let t=setInterval(()=>{
               scrollTop+=step;
               document.documentElement.scrollTop=scrollTop;
               count--;
               if(count<=0){
                 clearInterval(t);
               }
       },timeout);
        document.documentElement.scrollTop=val-50;
     }
  },
  created(){
    window.addEventListener('scroll',()=>{
      var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
      this.nav.forEach((item,index)=> {
        if(Math.abs(item.top-scrollTop)<100){
          this.navIndex=index;
        }
      });
    })
  },
  mounted(){
    this.getTopOffset();
    }
};
</script>

<style lang="less">
.nav-tab {
  padding: 0 0.6rem;
  line-height: 0.9rem;
  text-align: center;
  li.active span {
    color: #e4393c;
    padding-left: 0.26rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==);
    background-size: 0.16rem;
    background-repeat: no-repeat;
    background-position: left center;
  }
}
</style>