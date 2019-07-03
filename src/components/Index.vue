<template>
	<div>
		<!--头部-->
		<header class="top_tips">
			<span class="tips_num">{{level}}</span>
		</header>
		<!--中间的葡萄之家的图片-->
		<div>
			<div class="home_logo common_middle"></div>
			<router-link to='/item' class="start"></router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				level:this.$store.state.level,
			}
		}
	}
</script>

<!--scoped 样式只在本组件中起作用 less,是使用的css语法-->
<style scoped="scoped" lang="less">
	/*头部提示开始*/
	
	.top_tips {
		width: 4rem;
		height: 6rem;
		background: url(../assets/WechatIMG2.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		right: 1.5rem;
		/*第一周样式*/
		.tips_num {
			font-size: 0.65rem;
			display: inline-block;
			width: 3.8rem;
			height: 1.4rem;
			position: absolute;
			top: 4.2rem;
			text-align: center;
			line-height: 1.4rem;
			color: #9F9164;
			font-weight: lighter;
		}
	}
	/*头部提示结束*/
	/*首页中间开始*/
	
	.home_logo {
		background: url(../assets/1-2.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.common_middle {
		width: 12rem;
		height: 10rem;
		position: absolute;
		top: 6rem;
		left: 50%;
		margin-left: -6rem;
	}
	
	.start {
		width: 4rem;
		height: 2rem;
		background: url(../assets/1-4.png) no-repeat;
		background-size: 100% 100%;
		display: block;
		position: absolute;
		top: 16rem;
		left: 50%;
		margin-left: -2rem;
	}
	/*首页中间结束*/
</style>