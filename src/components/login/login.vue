<template>
	<div class="login-wrap">
		<el-form class="login-from" label-position="top" label-width="80px" :model="formdata">
			<h2>用户登录</h2>
			<el-form-item label="用户名">
			    <el-input v-model="formdata.username"></el-input>
			</el-form-item>
			<el-form-item label="密码">
			    <el-input v-model="formdata.password"></el-input>
			</el-form-item>
			<el-button @click.prevent="handleLogin()" class="login-btn" type="primary">登录</el-button>
		</el-form>
	</div>
</template>

<script>
export default{
	data(){
		return {
	        formdata: {
		        username: '',
		        password: ''
	        }
	    }
	},
//	methods:{
//		//登录请求
//		handleLogin(){
//			//接口文件上写的，请求路径：login，请求参数，username,password
//			this.axios.post('login',this.formdata)
//				.then((res)=>{
//					const{
//						data,
//						meta:{msg,status}
//					} = res.data
//					
//					//判断
//					//如果提交成功
//					if(status===200){
//						this.$message.success(msg);
//						this.$router.push({name:"home"})
//					}else{
//						//如果提交失败
//						this.$message.error(msg);
//					}
//					
//					
//				})
//		}
//	}
	
	
	
	methods:{
		//登录请求
		async handleLogin(){
			const res = await this.axios.post('login',this.formdata)
					
			const{
				data,
				meta:{msg,status}
			} = res.data
			
			if(status===200){
				//存token,一参取的key名，二参后台传过来的token数据
				localStorage.setItem('token',data.token)
				//跳转路由
				this.$router.push({name:"home"})
				//提示成功
				this.$message.success(msg);
			}else{
				this.$message.error(msg);
			}
					
		}
	}
	
	
	
}
</script>

<style>
h2{font-size: 18px; font-weight: bold;}
.login-wrap{width: 100%;height: 100%; background: #2b4b6b;}
.login-from{ width: 450px; height: 300px; background: #fff; padding: 20px; border-radius: 10px;position:fixed;margin:auto;left:0; right:0; top:0; bottom:0; }
.login-btn{width: 100%;}
</style>