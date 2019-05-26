<template>

	<div class="empty-cart">

		<img src="@/assets/images/empty.png" />
		<p>登录后可同步购物车中商品</p>

		<div class="login">登录</div>
	</div>

</template>

<script>
</script>

<style lang="less">
	.empty-cart {
		padding: 0.6rem 0 0.3rem;
		background-color: #f7f7f7;
		text-align: center;
		img {
			width: 1.8rem;
		}
		p {
			font-size: 0.32rem;
			color: rgba(51, 51, 51, .66);
			line-height: 0.48rem;
			margin: 0.22rem 0;
		}
		.login {
			width: 1.2rem;
			height: 0.6rem;
			border: 1px solid #e93b3d;
			color: #e93b3d;
			font-size: 0.28rem;
			line-height: 0.6rem;
			border-radius: 0.08rem;
			margin: 0 auto 0.3rem;
		}
	}
</style>