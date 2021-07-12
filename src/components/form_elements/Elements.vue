<template>
  <b-container fluid>  
  <div class="el-tabs_inner">
    <b-row cols="12">
      <draggable
        :list="fields"
        :clone="clone"
        class="dragArea"
        :options="dropElementOptions"
        @start="onStart"
      >
        <b-col 
          :span="20"
          
          v-for="(field, index) in fields"
          :key="index"
        >
          <b-button class="button__sidebar" type="info">
            {{ field.text }}
          </b-button>
        </b-col>
      </draggable>
    </b-row>
  </div>
  </b-container>
</template>

<script>
import { FormBuilder } from "@/components/form_elements/formbuilder";
import draggable from "vuedraggable";

export default {
  name: "Elementos",
  //store: ["forms", "activeForm"], // Aqui solo se utiliza forms


  components: { draggable },
  data() {
    return {
      fields: FormBuilder.$data.fields,
      dropElementOptions: FormBuilder.$data.dropElementOptions,
    };
  },
  computed:{
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
  },
  methods: {
    clone(field) {
      var newField = {
        fieldType: field.name,
        isUnique: field.isUnique,
      };

      // Texto de fondo
      if (field.isPlaceholderVisible) {
        newField["isPlaceholderVisible"] = false;
        newField["placeholder"] = "Introducir Texto";
      }

      // Decidir que se va mostrar,
      if (field.group == "form") {
        newField["label"] = "Introduzca Etiqueta";
        newField["isHelpBlockVisible"] = false;
        newField["helpBlockText"] = "Introduzca su texto de ayuda...";
        newField["isRequired"] = false;
      }

      if (field.group == "button") {
        newField["buttonText"] = "Enviar Formulario";
      }

      if (field.name == "TextEditor") {
        newField["fieldText"] = "Introducir Texto";
      }
      // Opciones por defecto de las opciones
      if (field.hasOptions) {
        newField["options"] = [
          { optionLabel: "Opcion 1", optionValue: "Opcion 1" },
          { optionLabel: "Opcion 2", optionValue: "Opcion 2" },
        ];
      }

      return newField;
    },
    onStart() {
      console.log("Iniciando");
    },
    /* checkStopDragCondition(field) {
      var form = this.forms,
        formArray = [];
      for (var key in form) {
        formArray.push(form[key]["fieldType"]);
      }
      // Verifica que el campo exista en el array
      // verificar que es unico
      return _.includes(formArray, field.name) && field.isUnique; //No permite modificar el texto
    }, */
  },
};
</script>

<style lang="scss" scoped>
.button__sidebar {
  width: 100%;
  margin-bottom: 5px;
  .is-disabled & {
    opacity: 0.4;
  }
}

// Display this ghost in <main> only
.wrapper--forms .sortable__ghost {
  position: relative;
  width: 100%;
  border-bottom: 2px solid black;
  margin-top: 2px;
  margin-bottom: 2px;

  [type="button"] {
    display: none;
  }

  &:before {
    content: "Colocar aqui";
    background-color: black;
    color: white;
    position: absolute;
    left: 50%;
    font-size: 12px;
    border-radius: 10px;
    line-height: 15px;
    padding: 0 10px;
    top: -6px;
    transform: translateX(-50%);
  }
  .el-tabs_inner {
		padding: 20px;
	}
}
</style>