<template>
	<div class="main__wrapper">
		<b-container fluid>
			<b-row>
				<b-col md="5" >
					<div class="wrapper--forms">
						<!-- Show empty state if empty -->
						<div v-if="forms.length == 0" class="emptyState">
							<p class="emptyState__p">Arrastrar elementos a esta área</p>
						</div>

						<draggable
							:list="forms"
							class="dragArea"
							:options="sortElementOptions"
						>
							<div
								v-for="(form, index) in forms"
								:key="index"
								v-bind="form"
								class="form__group"
								:class="{ 'is--active': form === activeForm }"
							>
								<!-- En caso de ser seleccionado, muestra el tipo de dato -->
								<span class="form__selectedlabel">{{ form.fieldType }}</span>
								<!-- Etiqueta  -->
								<div @click="editElementProperties(form)">
									<label
										class="form__label"
										v-show="form.hasOwnProperty('label')"
										>{{ form.label }}</label
									>
									<!-- Componente -->
									<component
										:is="form.fieldType"
										:currentField="form"
										class="form__field"
									>
									</component>
									<!-- Bloque de ayuda -->
									<small
										class="form__helpblock"
										v-show="form.isHelpBlockVisible"
										>{{ form.helpBlockText }}
									</small>
								</div>

								<!-- Actions list -->
								<div class="form__actiongroup">
									<!-- Boton Mover -->
									<b-button
										variant="primary"
										pill
										size="sm"
										class="form__actionitem--move"
									>
										<b-icon icon="arrows-move"> </b-icon>
									</b-button>

									<!-- Boton clonar -->
									<b-button-group class="form__actionlist">
										<b-button
											size="sm"
											variant="primary"
											@click="cloneElement(index, form)"
											v-show="!form.isUnique"
										>
											<b-icon icon="plus-circle-fill"> </b-icon>
										</b-button>
										<!-- Boton Eliminar -->
										<b-button
											size="sm"
											variant="danger"
											@click="deleteElement(index)"
										>
											<b-icon icon="trash-fill"> </b-icon>
										</b-button>
									</b-button-group>
								</div>
							</div>
						</draggable>
					</div>
				</b-col>
				<b-col md="7">
					<b-card>
						<b-tabs type="border-card" v-model="activeTabForFields">
							<b-tab title="Elementos">
								<elements />
							</b-tab>

							<b-tab name="properties" title="Propiedades">
								<properties
									v-show="Object.keys(activeForm).length > 0"
								></properties>
							</b-tab>

							<!-- <b-tab title="Estilos">
								<theming></theming>
							</b-tab> -->
						</b-tabs>
					</b-card>
					<b-container>
						<!-- <el-main> -->
						<!-- <el-main :style="cssProps"> Añadir la propiedad en caso de estilos personalizados  -->
						<!-- Se muestra la division donde esta el json resultante -->
						<!-- </el-main> -->
						<!-- <el-aside class="wrapper--sidebar" width="450px"> -->
						
						
						<!-- </el-aside> -->
					</b-container>
				</b-col>
			</b-row>
			<b-row class="mt-5 mb-5" >
				<br/> Botones de accion
				<b-button  @click="saveAction">  
					Guardar
				</b-button>
				<b-button variant="danger">
					Cancelar
				</b-button>
			</b-row>

			<b-row>        
				<b-col md="6">
						forms:
					<div class="wrapper--snippet">
						<pre>{{ forms }}</pre>
					</div>
				</b-col>
				<b-col md="6">
				<br />Actual Form:
						<div class="wrapper--snippet">
								<pre>{{ activeForm }}</pre>
						</div>
				</b-col>
			</b-row>

		</b-container>

	</div>
</template>

<script>
import { FormBuilder } from "@/components/form_elements/formbuilder";
import axios from 'axios'

export default {
	name: "Home",

	data() {
		return {
			payload:{},
			sortElementOptions: FormBuilder.$data.sortElementOptions,
		};
	},

	computed: {

		forms:{
			get(){
				return this.$store.state.forms
			},
			set(value){
				this.$store.state.forms = value
			}      
		},
		activeForm:{
			get(){
				return this.$store.state.activeForm
			},
			set(value){
				this.$store.state.activeForm = value
			}      
		},
		activeTabForFields:{
			get(){
				return this.$store.state.activeTabForFields
			},
			set(value){
				this.$store.state.activeTabForFields = value
			}      
		}
		/* cssProps() {
			// Return an object that will generate css properties key
			// to match with the themingVars
			//
			// Example output: { '--theme-primary-color': this.themingVars.primaryColor }
			var result = {},
				themingVars = this.themingVars;

			for (var v in themingVars) {
				if (themingVars.hasOwnProperty(v)) {
					var newV = "--theme-" + _.kebabCase(v),
						suffix = "";

					// Add px to the value if the default value contain 'px'
					//if (_.includes(newV, "size")) suffix = "px";
					//else if (_.includes(newV, "margin")) suffix = "px";
					//else if (_.includes(newV, "radius")) suffix = "px";

					result[newV] = themingVars[v] + suffix;
				}
			}

			console.log("result", result);

			return result;
		}, */
	},

	mounted() {
		console.log("forms ->", this.forms);
		console.log("activeform ->", this.activeForm);
		console.log("activeTabForFields ->", this.activeTabForFields);
		console.log ("asset :",this.$store.state.asset_type)
	},

	components: FormBuilder.$options.components,

	methods: {
		saveAction(){      
			this.forms.forEach(async (res) => {
				var payload = new Object      
				var opciones = JSON.stringify(res.options)        
				payload = JSON.parse(JSON.stringify(res))                
				payload.fk_asset_type = this.$store.state.asset_type
				payload.created_by = 1
				payload.updated_by = 1
				payload.options = opciones
				console.log("SaveAction: ",payload)
				try {
					console.log(await axios.post(`/api/v1/asset-field/${res.id}`,payload))
				} catch (error) {
					console.log(error)
				}        
			})
			
		},
		deleteElement(index) {
			//FormBuilder.deleteElement(index);
			this.activeForm=[]
			this.activeTabForFields=0
			this.$delete(this.forms,index)
		},

		cloneElement(index, form) {
			//FormBuilder.cloneElement(index, form);

			var cloned = _.cloneDeep(form)
			this.forms.splice(index,0,cloned)
		},

		editElementProperties(form) {
			//FormBuilder.editElementProperties(form);
			this.$store.state.activeForm = form      
			this.activeTabForFields = 1
		},
	},
};
</script>

<!-- Se añade "scoped" para limitar CSS solo a este componente -->
<style lang="scss" scoped>
.main__wrapper {
	height: 100%;
}

.emptyState {
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

.dragArea {
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
	position: relative;
	min-height: 10px;
	z-index: 2;
}

.form__selectedlabel {
	display: none;
	background: lighten(black, 20%);
	padding: 3px 5px;
	color: white;
	font-size: 12px;
	position: absolute;
	top: -18px;
	right: 15px;
}

.form__actionitem--move {
	position: absolute;
	right: -14px;
	top: 50%;
	transform: translateY(-50%);
	visibility: hidden;

	&:active,
	&:focus,
	&:hover {
		border-color: lighten(black, 50%);
		background: lighten(black, 50%);
	}
}

.form__actionlist {
	position: absolute;
	margin-top: 10px;
	visibility: hidden;
	z-index: 3;
	right: 0;
	box-shadow: 4px 4px 0 0 lighten(black, 80%);
	border-radius: 2px;
}

.form__group {
	margin-bottom: 25px;
	border: 2px solid transparent;
	position: relative;

	&:hover {
		border-color: lighten(black, 80%);

		.form__actionitem--move {
			visibility: visible;
		}
	}

	&.is--active {
		border-color: lighten(black, 50%);
		background: lighten(black, 95%);

		.form__actionlist {
			visibility: visible;
		}
		.form__selectedlabel {
			display: inline-block;
		}
	}
}
</style>
