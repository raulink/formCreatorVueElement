/* eslint-disable no-alert, no-console */
<template>
	<div>
		<!-- ini prueba  -->
		<b-form-select
			v-model="$store.state.asset_type"
			:options="itemsMarca"
			value-field="id"
			text-field="name"
			@change="fetchFields"
		>
		</b-form-select>
		<p>{{ $store.state.asset_type }}</p>
	</div>
</template>

<script>
//import { core } from "../../config/pluginInit";
import axios from "axios";
import modalForm from "./components/modalForm.vue";
export default {
	name: "assetType",
	components: {
		modalForm,
	},
	data() {
		return {
			// id: "Marca",
			items: [], // Los items que se cargan de la solicitud
			itemsMarca: [], // Los items que se cargan de la solicitud

			marca: {},
			modelo: {},
			trademarks: [],
		};
	},
	computed: {
		cargadoMarcas() {
			return !(Object.keys(this.marca).length > 0);
		},

		totalItems() {
			return [...this.items];
		},

		forms: {
			get() {
				return this.$store.state.forms;
			},
			set(value) {
				this.$store.state.forms = value;
			},
		},
		activeForm: {
			get() {
				return this.$store.state.activeForm;
			},
			set(value) {
				this.$store.state.activeForm = value;
			},
		},
	},
	mounted() {
		//core.index();
		axios.defaults.baseURL = "http://localhost:8000"; // TODO Verificar el host
		this.cargarMarcas();
	},

	methods: {
		cambioMarca(id, obj) {
			// Si el id es de marca, añadir el objeto marca
			// console.log(`Cambio Evt: ${id} : ${obj}`);
			this.marca = obj;
		},

		fetchFields(evt) {
			console.log("fetch Fields:", evt);
			this.api = `/api/v1/asset-type/fields/${evt}`;
			axios.get(this.api).then((response) => {
                this.forms =response.data.rows[0].asset_fields
				console.log(this.forms);
			});
		},

		deleteMarca(item) {},
		cambioModelo(id, obj) {
			// console.log(`Cambio Modelo: ${id} : `);
			this.modelo = obj[0];
		},
		creaModelo(item) {},
		updateModelo(item) {},
		deleteModelo(item) {},

		cargarMarcas() {
			this.api = "/api/v1/asset-type/";
			axios.get(this.api).then((response) => {
				this.itemsMarca = response.data.data;
				console.log(this.itemsMarca);
			});
		},
	},
};
</script>
