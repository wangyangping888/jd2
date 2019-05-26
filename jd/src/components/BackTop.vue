<template>

	<div class="back-top" v-show="show" @click="backTop"></div>

</template>

<script>
	export default {
		data() {
			return {
				show:true
			};
		},
		methods: {
			backTop() {
				document.documentElement.scrollTop = 0;
			}
		},
		created(){
			//添加滚动事件监听
			window.addEventListener('scroll',()=>{
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				if(scrollTop>450){
					this.show = true;
				}else{
					this.show = false;
				}
			})
		}
	}
</script>

<style>
	.back-top {
		width: 0.8rem;
		height: 0.8rem;
		background: rgba(0,0,0,0.7) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMAEs64yCwYosRLAAAAf0lEQVQ4y+2LOw6AIBBEMUZrgyegsdY7eACPYCjm/kcQMhsTYLGxwcRp9vPmmdYzIs35RN6n26cKsXAVZYHXJeuxOF1xsKoUvghUVQwi1hSDyDUlkFLiB2wUSiSlxBvs5ApJLskFaaUKSS71skN6602GjRMc82GSkDA/+RhpLBdlCiXsyNDDDQAAAABJRU5ErkJggg==);
		background-size: 0.5rem;
		background-position: center;
		background-repeat: no-repeat;
		position: fixed;
		right: 0;
		bottom: 1.6rem;
		border-radius: 3px 0 0 3px;
	}
</style>