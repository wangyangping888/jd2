<template>

	<div class="btn-bar flex">

		<div class="icon kefu">
			<span>联系客服</span>
		</div>
		<div class="icon shop">
			<span>进店</span>
		</div>
		<div class="icon cart">
			<span>购物车</span>
		</div>

		<div class="btn add-cart flex-item" @click="show=true">加入购物车</div>
		<div class="btn buy-now flex-item" @click="show=true">立即购买</div>

		<transition name="slide">
			<div class="sku" v-show="show">

				<div class="header">
					<img src="../assets/images/product_1.jpg">
					<p class="price">

						￥ <em>399</em>.00

						<span>￥459</span>

					</p>

					<p class="choose-option">
						<span>已选：</span> {{colorArr[colorIndex]}},{{sizeArr[sizeIndex]}},{{count}}个
					</p>

					<span class="close" @click="show=false"></span>
				</div>

				<div class="body">

					<div class="choose">

						<div class="sku-kind">颜色</div>

						<div class="sku-option clear">

							<span :class="{active:index==colorIndex}" @click="colorIndex = index;" v-for="(item,index) in colorArr" v-text="item" :key="index"></span>

						</div>
						
						<div class="sku-kind">尺寸</div>

						<div class="sku-option clear">
							<span :class="{active:index==sizeIndex}" @click="sizeIndex = index;" v-for="(item,index) in sizeArr" v-text="item" :key="index"></span>
						</div>
						
						<div class="sku-kind">数量
						
						<div class="count-wrap right">
								<i class="reduce" @click="count = count<=1?1:--count;" >-</i>
								<i class="number" v-text="count"></i>
								<i class="add" @click="count++;">+</i>
							</div>
						</div>
					</div>

				</div>

				<div class="ok-btn" @click="show=false">确认</div>

			</div>
		</transition>
		<div class="mask" v-show="show" @click="show=false"></div>

	</div>

</template>

<script>
	export default {

		data() {
			return {
				show: false,
				count:1,
				colorArr:['红色','黄色','黑色','白色'],
				sizeArr:['S','M','L','XL','XXL'],
				colorIndex:0,
				sizeIndex:0
			};
		}

	}
</script>

<style lang="less">
	.btn-bar {
		height: 1rem;
		position: fixed;
		bottom: 0;
		width: 100%;
		border-top: 1px solid #ddd;
		background-color: hsla(0, 0%, 100%, .95);
		.icon {
			width: 14%;
			font-size: 0.2rem!important;
			color: #999;
			display: block;
			line-height: 0.4rem;
			padding-top: 0.6rem;
			background-size: auto 0.4rem;
			background-position: center 0.1rem;
			background-repeat: no-repeat;
			text-align: center;
			&.kefu {
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTGZmZmZmZmZmZmZmZmdnZ2ZmZmhoaGZmZmxsbGZmZmlpaWdnZ2ZmZmZmZmZmZk19Qx8AAAAPdFJOUwD05pRtRbwrqwzXG1eDylNiP4YAAAGTSURBVCjPrVNNSwJRFL3mx6ijIWoJQYwuXLgaF64iMle2NFqHtYuCDInW1cLtmAqt+wX6EwxatMuKVi0ShLbiCINIeXpvPnTMrW915/DOfeece4doGcd3eJ4If39U7Zi7BP2sF2aYqwlsnFQegPGuhQl9jPK8uFQwuTDBHDZbRiW+ImqSMWpZJFGB0eAL7Vn7AH71l7FmF7IPrqCGQi5tQc6oGynOHgYQskAH2lnOl1N+dC2QlTWVd+44Zi8xUpB9edFyMm3ClqT2mPBcWsQ1raomj524XspdWtEMqztSuGdYLMXJMaKMXWeFlBD5NWraA5uQEiePSkWbpZcYNbvkRMs1mKZYHxREpElAhx4nptCGnKQgN99PkVBSt1l693vSsEp3Y95lyJJS2DwSQISJyv4w0Muv+w5OZTZNPfIjHrY8l2dxrM+5bE/eJcUMh7JtRiXVdHKFiIWWcUbTGWt546IUnTYS3/iGZKoUtLf3PcssziR5tLm1E57eb/DpH/5fR6GJ4wWQ6hJGi6vbuI0s4w/4A2i0n3aDtHpAAAAAAElFTkSuQmCC);
			}
			&.shop {
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmBAMAAABE2sQuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTGZmZmlpaWZmZmdnZ2ZmZmdnZ2pqamZmZmZmZmZmZmdnZ2ZmZsMDXTsAAAAMdFJOUwDiIfJNxIoRtGqfP2fZSMkAAAEbSURBVCjPzZKhT8NAFMY/yhhsQZAMDDlBArgJIAFMBUNPALqiAVuxBEWYQCArcJgK8GhAIOhKWbu8P4p7dwl7rw7HJ971frl7X/O+A9AxJJSfgNUnpYmDiYbfDoazEX4VmIKXFh1DaEjcdImeJFygO+ezJWHHOSWVZFgO2cl8KYgkZ581Da+t0wo9aNi1TuNipGFAU2QzNJTWiCZN+FEinDbhuEDo/miwPq/DAlHJHyafV0syioE2yVrbeZSntxFR+ebrTkRndoA82TrlWmUuEDugXRdMl7dxi09ccOP33sYj8No7vARuzvfv8TddxXLXPvJp7km46NIEfUq4Sv8BqpT6HppKPKYgddPHi360PvJtDQ/8jWfJNm2vHx2SsNH4ChcMAAAAAElFTkSuQmCC);
			}
			&.cart {
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTGZmZmpqamZmZmdnZ2ZmZmZmZmZmZmZmZmZmZmZmZkpWnhIAAAAKdFJOUwDpHqZGaoS60pfVa5fYAAAA+UlEQVQoz5WSKRPCMBSEQ2i5FIeLgsGhAIlCoKrAMVXVVWgUAw6FRlHoAfsraZMUkjTDDE807TdNdt++kBDZkJjFgEsFhkC3AomDexUSllhg+LDASWSBLRh1zKFrwlcOqQm5BtONhmnx3OtGPW7xGmvQ559+qsEF3+hlGjzfLO5FQB2oiVLsREtLBbqYFksTawW2ERRLQ8te/uLioMCaOMzBTU1SyFJtIB6kM3Ug/lP2oPa5l/0tMnW4STn7j1G6KQUmWvBB2YQxIV7bLzstyd817s2l+GxQZksZIvE+AvoS1nOBqWhDXgWe1kreXBZ70S9o3W4VMi29AabPf4enbQFkAAAAAElFTkSuQmCC);
			}
		}
		.btn {
			text-align: center;
			line-height: 1rem;
			background: linear-gradient(138deg, #ffa600, #ffb000 77%, #ffbc00);
			color: #fff;
			font-size: 14px;
			&.buy-now {
				background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
			}
		}
		.sku {
			width: 100%;
			min-height: 7.5rem;
			max-height: 9.5rem;
			background-color: #FFFFFF;
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: 9999;
			.header {
				height: 1.4rem;
				position: relative;
				padding: 0 0 0.2rem 2.2rem;
				img {
					position: absolute;
					width: 1.8rem;
					height: 1.8rem;
					top: -0.4rem;
					left: 0.2rem;
				}
				p.price {
					margin: 0;
					line-height: 0.8rem;
					color: #e4393c;
					font-size: 0.2rem!important;
					em {
						font-size: 0.32rem;
					}
					span {
						text-decoration: line-through;
						color: #999;
						font-size: 0.24rem;
					}
				}
				p.choose-option {
					margin: 0;
					word-break: break-all;
					font-size: 0.24rem;
					color: #333;
					line-height: 1.4em;
					padding-right: 0.2rem;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					span {
						color: #999999;
					}
				}
				span.close {
					position: absolute;
					top: 0;
					right: 0;
					width: 0.3rem;
					height: 0.3rem;
					padding: 0.2rem;
					background-size: 0.22rem 0.22rem;
					background-position: center;
					background-repeat: no-repeat;
					background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaAgMAAADUJKRdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURQAAAAAAAEdwTAAAAA+kCggAAAAEdFJOUyoFADPFB4o9AAAAbklEQVQI11WPoRXAIAxET1VVVLMFe8R1gWrWyQKIGJiiin26Qa88ThTz3yM/yQVb52tA/hg3rJB+wBNpF2KwnCsahRgVnYInkoIVMgZLZMtUyW5nmvS9TMbTf9T/8tSnOZq79mivciiXcir3uuMFX3BjVwgV70oAAAAASUVORK5CYII=);
				}
			}
			.body {
				max-height: 8.1rem;
				overflow-y: auto;
				.sku-kind {
					font-size: 0.24rem;
					color: #999;
					margin: 0 0.2rem;
					height: 0.8rem;
					line-height: 0.8rem;
				}
				.sku-option {
					margin-bottom: 0.06rem;
					span {
						display: inline-block;
						padding: 0 0.2rem;
						min-width: 0.4rem;
						max-width: 5.4rem;
						overflow: hidden;
						height: 0.6rem;
						line-height: 0.6rem;
						float: left;
						text-align: center;
						margin-left: 0.2rem;
						margin-bottom: 0.2rem;
						border-radius: 0.08rem;
						font-size: 0.28rem;
						background-color: #f7f7f7;
						color: #333;
						&.active{
							color: #fff;
							background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
						}
					}
				}
				
				.count-wrap{
					/*width: 2.2rem;*/
					i{
						display: inline-block;
						width: 0.6rem;
						height: 0.6rem;
						text-align: center;
						line-height: 0.6rem;
						background-color:#f7f7f7;
						color: #333;
						font-size: 0.36rem;
						.number{
							font-size: 0.24rem;
						}
					}
				}
			}
			.ok-btn {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				line-height: 1rem;
				text-align: center;
				color: #FFFFFF;
				font-size: 0.32rem;
				background: linear-gradient(-41deg,#ff4f18,#ff2000 24%,#f10000);
			}
		}
		.mask {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: rgba(0, 0, 0, 0.7);
		}
		.slide-enter {
			transform: translateY(100%);
		}
		.slide-enter-active {
			transition: all 0.3s linear;
		}
		.slide-enter-to {
			transform: translateY(0%);
		}
		.slide-leave {
			transform: translateY(100%);
		}
		.slide-leave-active {}
		.slide-leave-to {
			transform: translateY(100%);
		}
	}
</style>