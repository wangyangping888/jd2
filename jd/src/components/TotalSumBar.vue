<template>

	<div class="total-sum-bar flex">

		<div class="select-all">
			<check-box :val="all"  @input="onChange"  ></check-box>
			全选
		</div>

		<div class="sum flex-item">
			总计：<strong>{{sum}} </strong>
		</div>
		<div class="pay" :class="{active:count>0}">
			去结算<span>({{count}}件)</span>
		</div>
	</div>

</template>

<script>
	import CheckBox from "@/components/CheckBox";
	export default {
		data() {
			return {
				all:false
			};
		},
		props: {
			sum: {
				type: Number,
				default: 0
			},
			count: {
				type: Number,
				default: 0
			},
			value:{
				type:Boolean,
				default:false
			}
		},
		watch:{
			value(val){
				this.all = val;
			}
		},
		methods:{
			onChange(val){
				this.all = val;
				this.$emit("input",val);
			}
		},
		components: {
			CheckBox
		},
		created(){
			this.all = this.value;
		}

	}
</script>

<style lang="less">
	.total-sum-bar {
		height: 1rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background: hsla(0, 0%, 100%, .95);
		color: #333;
		font-size: 0.28rem;
		border-bottom: solid 1px #DDDDDD;
		.select-all {
			position: relative;
			width: 0.8rem;
			padding-top: 0.64rem;
			line-height: 0.36rem;
			font-size: 0.2rem!important;
			text-align: center;
			.check-box {
				position: absolute;
				top: 0.12rem;
				left: 0.2rem;
			}
		}
		.sum {
			font-size: 0.32rem;
			font-weight: 700;
			text-align: right;
			line-height: 1rem;
			padding-right: 0.2rem;
			strong {
				color: #e93b3d;
			}
		}
		.pay {
			width: 2.2rem;
			height: 1rem;
			line-height: 1rem;
			font-size: 0.32rem;
			text-align: center;
			font-weight: 700;
			color: #fff;
			background: #d7d7d7;
			&.active {
				background: #e4393c;
			}
			span {
				font-weight: 400;
				font-size: 0.24rem;
			}
		}
	}
</style>