<template>
  <div class="el-tabs__inner">
    <el-row :gutter="10" class="row-bg" >
      <draggable :list="fields"
                 :clone="clone"
                 class="dragArea"
                 :options="dropElementOptions"
                 @start="onStart">
        <el-col :span="12" 
                :class="{ 'is-disabled': checkStopDragCondition(field) }"
                v-for="(field, index) in fields" 
                :key="index">
          <el-button class="button__sidebar" 
                     type="info">
            {{ field.text }}
          </el-button>
        </el-col>
      </draggable>
    </el-row>
  </div>
</template>

<script>
  import { FormBuilder } from '@/components/form_elements/formbuilder'
  import draggable       from 'vuedraggable'

  export default {
    name: 'Elementos',
    store: ['forms', 'activeForm'],
    components: { draggable },
    data() {
      return {
        fields: FormBuilder.$data.fields,
        dropElementOptions: FormBuilder.$data.dropElementOptions
      };
    },
    methods: {
      clone(field){
        var newField  = { 
          fieldType: field.name,
          isUnique: field.isUnique 
        } 

        // Show placeholder
        if (field.isPlaceholderVisible){
          newField ["isPlaceholderVisible"] = false;
          newField ["placeholder"] = 'Introducir Texto';
        }

        // Decide whether display label, required field, helpblock
        if (field.group == "form"){
          newField ["label"] = "Introduzca Etiqueta";
          newField ["isHelpBlockVisible"] =  false;
          newField ["helpBlockText"] = 'Introduzca su texto de ayuda...';
          newField ["isRequired"] = false;
        }

        if (field.group == "button"){
          newField ["buttonText"] = "Enviar Formulario";
        }

        if (field.name == "TextEditor"){
          newField ["fieldText"] = "Introducir Texto";
        }
        // Add dummy options for loading the radio/checkbox
        if (field.hasOptions){
          newField ["options"] = [
            { optionLabel: "Option 1", optionValue: "Option 1" },
            { optionLabel: "Option 2", optionValue: "Option 2" }
          ]
        }

        return newField;
      },
      onStart(){
        console.log("starting")
      },
      checkStopDragCondition(field){
        var form = this.forms,
            formArray = [];
        for (var key in form) {
          formArray.push(form[key]['fieldType'])
        }
        // Check if the fieldname exist in formArray
        // And when the field.isUnique too
        return _.includes(formArray, field.name) && field.isUnique; //No permite modificar el texto
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button__sidebar {
    width: 100%;
    margin-bottom: 10px;

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
  }
</style>