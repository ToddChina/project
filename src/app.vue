<template>
	<div>
		<p v-on:click="back">后退</p>
		<router-view></router-view>
		<ul class="nav">
			<li><router-link to="/home">主页</router-link></li>
			<li><router-link to="/engineering">工程</router-link></li>
			<li><router-link to="/team">团队</router-link></li>
			<li><router-link to="/user">我的</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		methods:{
			back(){
				history.go(-1);
			}
		}
	}
</script>

<style>
	.nav{
		position:fixed;
		width:100%;
		bottom:0;
	}
	.nav li{
		height:0.6rem;
		border:1px solid red;
		float: left;
		width:25%;
		font-size: 0.3rem;
		text-align: center;
		line-height: 0.6rem;
	}
</style>