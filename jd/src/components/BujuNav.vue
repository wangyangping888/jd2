<template>
  <div class="product_nav">
    <div class="product_top">
      <img src="@/assets/product_img/1-1.png">
    </div>
    <div class="clear product_center">
      <ul class="left" v-for="(item,index) in nav" :key="index">
        <router-link :to="'/product/'+item.id">
          <li>
            <img :src="item.img">
          </li>
          <li v-text="item.title"></li>
        </router-link>
        <li class="clear">
          <span v-text="item.stp" class="product_nav_left"></span>
          <span v-text="item.stm" class="product_nav_right"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

 
<script>
export default {
  data: function() {
    return {
      nav: [
        {
          id: 1,
          title:
            "海尔（Haier） 冰箱 十字对开门多门风冷无霜变频 冰箱新品 BCD-471WDCD",
          img: require("@/assets/product_img/2-1.jpg"),
          stp: "￥4599",
          stm: "找相似"
        },
        {
          id: 2,
          title:
            "【选择1元颜色下单付款即是1元】禄凯撞色宽肩带单肩包女士背包韩版撞色小方包潮流背包斜挎包手提包 一元颜色随机",
          img: require("@/assets/product_img/2-2.jpg"),
          stp: "￥69.9",
          stm: "找相似"
        },
        {
          id: 3,
          title:
            " 【送货上楼】中雀麻将机全自动过山车麻将桌餐桌式机麻免推牌调试棋牌机 尚品过山车麻将机 ct3香槟色 【全国通用】44-136/144",
          img: require("@/assets/product_img/2-3.jpg"),
          stp: "￥2499",
          stm: "找相似"
        },
        {
          id: 4,
          title:
            "亿色(ESR)iphone xs max钢化膜 苹果xs max钢化膜 高清一体成型全玻璃6.5英寸防爆裂非全屏覆盖前膜-含神器",
          img: require("@/assets/product_img/2-4.jpg"),
          stp: "￥28.9",
          stm: "找相似"
        },
        {
          id: 5,
          title:
            "【送货上楼】中雀全自动超薄静音麻将机四口机家用棋牌室usb餐桌两用静音麻机麻 蓝色 【全国通用】44-136/144",
          img: require("@/assets/product_img/2-5.jpg"),
          stp: "￥3180",
          stm: "找相似"
        },
        {
          id: 6,
          title:
            "玉兰油OLAY护肤套装水感透白光塑精华露护肤品礼盒(光感小白瓶精华液30ml+面膜水100ml) 补水保湿 美白精华露",
          img: require("@/assets/product_img/2-6.jpg"),
          stp: "￥239",
          stm: "找相似"
        }
      ]
    };
  }
};
</script>


<style lang="less">
.product_nav {
  width: 100%;
  background-color: white;
  padding-bottom: 60px;

  .product_top {
    width: 100%;
    height: 0.8rem;
    margin: 0.1rem 0 0 0;

    img {
      width: 100%;
    }
  }

  .product_center {
    width: 100%;

    ul {
      width: 50%;
      text-align: center;
      li:nth-child(1) {
        width: 96%;
        margin: 0 2%;
        img {
          width: 100%;
        }
      }

      li:nth-child(2) {
        width: 100%;
        height: 0.7rem;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.26rem;
        color: #232326;
        line-height: 0.32rem;
        padding: 0.1rem;
        box-sizing: border-box;
      }

      li:nth-child(3) {
        padding: 0 0.2rem;
        box-sizing: border-box;
        margin-top: 0.1rem;
      }

      span.product_nav_left {
        font-size: 0.32rem;
        color: #f23030;
        display: block;
        float: left;
      }

      span.product_nav_right {
        display: block;
        width: 1rem;
        height: 0.35rem;
        float: right;
        font-size: 0.22rem;
        color: #666;
        border: 1px solid #bfbfbf;
        text-align: center;
        line-height: 0.35rem;
        
      }
    }
  }
}
</style>
