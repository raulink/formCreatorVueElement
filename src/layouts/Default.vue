<template>
  <b-container>
    <b-tabs content-class="mt-3">
      <b-tab title="Diseño" active>
        <br />Contenido
			<home/>
      </b-tab>
      <b-tab title="Vista Previa" active>
        <br />vista previa
			<preview/>
      </b-tab>
    </b-tabs>

    <!-- 		<el-header>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
			  <el-menu-item index="/">Diseño</el-menu-item>
			  <el-menu-item index="/Preview">Vista Previa</el-menu-item>
			</el-menu>
		</el-header>

	  	<el-container>
	    	<el-main>
	    		<slot />
	    	</el-main>
	  	</el-container> -->
  </b-container>
</template>


<script>
import Home from "../views/Home.vue";
import Preview from "../views/Preview.vue";
export default {
	components:{
		Home,Preview
	},
  data() {
    return {
      activeIndex: "/",
    };
  },
};
</script>


<!-- https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05 -->