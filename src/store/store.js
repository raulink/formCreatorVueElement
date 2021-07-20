import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({  
  state: {
	forms: [],
	activeForm: [],
	activeTabForFields: 0,
	asset_type:"",
	themingVars: {
		globalFontFamily: "Arial",
		globalFontColor: "#777777",
		globalLinkColor: "#206C92",
		globalFontSize: "16",

		labelFontWeight: "700",
		labelFontSize: "16",
		labelMarginBottom: "10",

		helpTextColor: "#cccccc",
		helpTextFontSize: "12",
		helpTextMarginTop: "10",


		inputBorderRadius: "6",
		inputBorderColor: "#dcdfe6",
		inputHoverBorderColor: "#c0c4cc",
		inputFocusBorderColor: "#000000",
		inputShadowColor: "#9D9D9D",

		buttonBackground: "#000000",
		buttonBorderColor: "#000000",
		buttonColor: "#FFFFFF"
	}
  },
  mutations: {
	updateForms(state,payload){
		state.forms = payload
	},
	updateActiveForm(state,payload){
		state.activeForm = payload
	},
	updateTab(state,payload){
		state.activeTabForFields = payload
	},
	updateAssetType(state,payload){
		state.asset_type = payload
	}
  },
  actions: {
  },
  getters: {
  }
})