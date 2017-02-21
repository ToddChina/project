<template>
	<ul>
		<li v-for="order in orders">
			<p>团队:{{order.team}}</p>
			<p>价格:{{order.price}}</p>
			<p><router-link to="/orderinfo">订单详情</router-link></p>
			<p><router-link to="/orderedit">编辑</router-link></p>
		</li>
	</ul>
</template>

<script>
	export default {
		data(){
			return {
				orders:[
					{team:"haha",price:100},
					{team:"hehe",price:200},
					{team:"xixi",price:300},
					{team:"heihei",price:400},
					{team:"lee",price:500}
				]
			}
		}
	}
</script>

<style>
	p{
		font-size: 0.3rem;
	}
</style>