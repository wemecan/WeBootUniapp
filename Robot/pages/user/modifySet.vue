<template>
	<view class="user">
		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
	<view class="content modifySet">
		<!-- 
		<view class="pageTitle">
			<h1>用户中心</h1>
			<text>放大你的朋友圈价值</text>
		</view>
		 -->
		
		<view class="">
			<uni-list v-for="(item,index) in usesSetList" :key="index" >
				<uni-list-item :title="item.title":rightText="item.rightText" @tap="goNavigator(item.title,index)" show-switch="true" :show-arrow="false" v-if="item.showSwitch == true"></uni-list-item>
				<uni-list-item :title="item.title":rightText="item.rightText" @tap="goNavigator(item.title,index)" :show-arrow="true" v-else></uni-list-item>
			</uni-list>
		</view>

	</view>
	</view>
</template>

<script>
	var utils = require('../../utils/util.js');
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	import uniList from "@/components/uni-list/uni-list.vue";
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue";
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		components: {
			uniNavBar,
			uniIcons,
			uniList,
			uniListItem
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		onLoad(option){
			// console.log(option);
			let count = utils.count;
			console.log(count(4));
			
			// console.log(getCurrentPages());
		},
		onShow(option) {
			// console.log('page onShow');
			// console.log(option);
			utils.navStyle();  // 顶部导航设置
		},
		data() {
			return {
				pageTitle:'设置',
				usesSetList:[
					{
						title:'关于我们',
						icon:'../../static/img/icon/user/my_sign.png',
						rightText:'',
						path: "./about",
						showSwitch:false
						
					},
					{
						title:'公益广告',
						icon:'../../static/img/icon/user/my_wallet.png',
						rightText:'',
						path: "",
						showSwitch:true
					},
					{
						title:'今日头条',
						icon:'../../static/img/icon/user/my_card.png',
						rightText:'',
						path: "",
						showSwitch:true
					},
					{
						title:'版本更新',
						icon:'../../static/img/icon/user/my_order.png',
						rightText:'v0.2版本',
						path: "",
						showSwitch:false
					},
					{
						title:'用户协议',
						icon:'../../static/img/icon/user/my_order.png',
						rightText:'',
						path: "",
						showSwitch:false
					}
				],
			}
		},
		methods: {
			switchChange(e){
				console.log(e);
			},
			/*
			titleNViewWebview() {
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#ff0000',
					animation: {
						duration: 400,
						timingFunc: 'easeIn'
					}
				})
			},
			*/
			onNavigationBarButtonTap(e) {   // 导航栏 右边按钮
				console.log(e);  
				uni.showToast({
					icon: 'success',
					title:'保存成功！'
				});
			} ,
			goNavigator (e,i){
				console.log(e,i);
				if (e == '头像' && i == undefined){
					uni.navigateTo({
						url: '../user/modifyUserInfo',
					});
				}else if(this.usesSetList[i].path == '' ){
					uni.showToast({
						icon: 'none',
						title:'【' + e + '】未完善！'
					});
				}else{
					uni.navigateTo({
						url: this.usesSetList[i].path,
					});
				}
			},
			...mapMutations(['logout']),
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			}
		}
	}
</script>

<style>
.modifySet{
	padding: 0px;
}
.modifySet .uni-list-item{
	border-bottom:1px solid #EAEAEA;
}
</style>
