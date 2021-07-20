<template>
  <b-container>
    <b-tabs content-class="mt-3">
      <b-tab title="Tipo de Equipo" active>
        <br/> Tipo de equipo
        <asset-type/>
      </b-tab>

      <b-tab title="Caracteristicas" >
        <br />Caracteristica {{$store.state.asset_type}}
        
			<home/>
      </b-tab>
      <b-tab title="Vista Previa">
        <br />vista previa
			<preview/>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
import Home from "../views/Home.vue"
import Preview from "../views/Preview.vue"
import AssetType from '../views/asset-type.vue'

export default {
	components:{
		Home,Preview,AssetType,
AssetType
	},
  data() {
    return {
      activeIndex: "/",
    };
  },
};
</script>


<!-- https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05 -->