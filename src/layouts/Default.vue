<template>
	<el-container>
		<el-header>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
			  <el-menu-item index="/">Diseño</el-menu-item>
			  <el-menu-item index="/Preview">Vista Previa</el-menu-item>
			</el-menu>
		</el-header>

	  	<el-container>
	    	<el-main>
	    		<slot />
	    	</el-main>
	  	</el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
	      return {
	        activeIndex: '/'
	      };
	    }
	}
</script>


<!-- https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05 -->