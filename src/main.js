import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import Home from './components/home/container.vue';
import Engineering from './components/engineering/container.vue';
import Team from './components/team/container.vue';
import User from './components/user/container.vue';

import OrderList from './components/user/order-list.vue';
import OrderInfo from './components/user/orderinfo.vue';
import OrderEdit from './components/user/orderedit.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.debug = true;

const router = new VueRouter({
	routes:[
		{path:'/home',component:Home},
		{path:'/engineering',component:Engineering},
		{path:'/team',component:Team},
		{path:'/user',component:User},
		{path:'/orderlist',component:OrderList},
		{path:'/orderinfo',component:OrderInfo},
		{path:'/orderedit',component:OrderEdit}
	]
})



new Vue({
	el:'#app',
	router,
	components:{App}
})