<template>

	<div class="product-list">

		<ul class="clear">

			<li v-for="(item,index) in products">

				<div class="product">
					<!-- 传入一个字符串 -->
					<!--<router-link :to="'/product/'+item.id">-->
					<!-- 通过path 跳转    query可以传递参数 params不行   -->
					<!--<router-link :to="{path:'/product/'+item.id,query:{uid:123}}">-->
					<!-- 通过name进行跳转 query可以传递参数 params 也可以传递参数 -->
					<router-link :to="{name:'product',query:{uid:123},params:{id:item.id,a:123,b:456}}">
					
					<div class="product-image">
						<img :src="item.image" />
					</div>
					
					<div class="product-title" v-text="item.title"></div>
					</router-link>
					<div class="product-info clear">
						<div class="product-price left">
							￥<span v-text="item.price"></span> 
							<span class="tag" v-text="item.tag" v-if="item.tag!=''"></span>
						</div>
						<span class="similar right">看相似</span>
					</div>
					<div class="product-info"></div>
				</div>

			</li>

		</ul>

	</div>

</template>

<script>
	export default {

		data() {
			return {

				products: [{
						id: 1,
						title: '【送货上楼】中雀全自动超薄静音麻将机四口机家用棋牌室usb餐桌两用静音麻机麻 蓝色 【全国通用】44-136/144',
						image: require('@/assets/images/product_1.jpg'),
						price: 3138,
						tag:'拼购'
					},
					{
						id: 2,
						title: '绝地求生时尚潮流同款吃鸡三级包电脑背包学生男士双肩书包 活动颜色随机发',
						image: require('@/assets/images/product_2.jpg'),
						price: 59,
						tag:''
					},
					{
						id: 3,
						title: '【拉斐官方旗舰店】拉斐庄园2005珍酿原酒进口红酒窖藏干红葡萄酒 红酒整箱6支U醒酒器装750ml*6',
						image: require('@/assets/images/product_3.jpg'),
						price: 498,
						tag:''
					},
					{
						id: 4,
						title: '夏季冰丝汽车腰靠夏季居家办公室车用座椅清凉透气按摩靠垫腰靠腰枕 冰丝腰靠 黑色腰靠',
						image: require('@/assets/images/product_4.jpg'),
						price: 19,
						tag:'满减'
					}
				]

			};
		},

	}
</script>

<style lang="less">
	.product-list {
		background-color: blue;
		ul {
			padding: 0px 0.2rem;
			li {
				box-sizing: border-box;
				width: 50%;
				float: left;
				padding: 0 2px 4px 0;
				&:nth-child(2n) {
					padding: 0 0 4px 2px;
				}
			}
			.product {
				background-color: #FFFFFF;
				.product-image img {
					width: 100%;
				}
				a{
					display: block;
				}
				.product-title {
					box-sizing: border-box;
					height: 0.62rem;
					font-size: 0.26rem;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-break: break-word;
					color: #232326;
					margin-top: 0.1rem;
					line-height: 0.32rem;
					margin-bottom: 0.06rem;
					padding: 0 0.08rem;
				}
				.product-info {
					height: 0.52rem;
					padding: 0 0.16rem 0 0.08rem;
					background-color: #FFFFFF;
				}
				.product-price {
					color: #f23030;
					display: inline-block;
					padding: 0 0.1rem 0 0.08rem;
					top: 1px;
					height: 0.5rem;
					line-height: 0.5rem;
					span {
						font-size: 0.32rem;
					}
				}
				.similar {
					text-align: center;
					color: #686868;
					font-size: 0.24rem;
					width: 0.98rem;
					height: 0.48rem;
					line-height: 0.5rem;
					border: 1px solid #bfbfbf;
				}
				.tag{
					border: 1px solid #e4393c;
				    color: #e4393c;
				    font-size: 0.2rem!important;
				    padding: 0 0.06rem;
				    margin:0 0.1rem 0;
				}
			}
		}
	}
</style>