<template>
  <div class="el-tabs__inner">
    <b-form v-model="fieldProperties" @submit.stop.prevent>
      <b-form-group
        label="Etiqueta"
        v-show="activeForm.hasOwnProperty('label')"
      >
        <b-form-input v-model="activeForm.label">
          {{ activeForm.label }}
        </b-form-input>
      </b-form-group>
      <b-form-group
        label="Texto de Fondo"
        v-show="activeForm.hasOwnProperty('isPlaceholderVisible')"
      >
        <b-form-checkbox
          v-model="activeForm.isPlaceholderVisible"
          switch
          size="lg"
        ></b-form-checkbox>
        <b-form-input
          v-show="activeForm.isPlaceholderVisible"
          v-model="activeForm.placeholder"
        >
          {{ activeForm.placeholder }}
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Texto del Boton"
        v-show="activeForm.hasOwnProperty('buttonText')"
      >
        <b-form-input v-model="activeForm.buttonText">
          {{ activeForm.buttonText }}
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Campo Requerido"
        v-show="activeForm.hasOwnProperty('isRequired')"
      >
        <b-form-checkbox
          v-model="activeForm.isRequired"
          switch
          size="lg"
        ></b-form-checkbox>
      </b-form-group>

      <b-form-group
        label="Bloque de Descripcion"
        v-show="activeForm.hasOwnProperty('isHelpBlockVisible')"
      >
        <b-form-checkbox switch size="lg"
          v-model="activeForm.isHelpBlockVisible"
        ></b-form-checkbox>
        <b-input
          v-show="activeForm.isHelpBlockVisible"
          v-model="activeForm.helpBlockText"
        >
          {{ activeForm.helpBlockText }}
        </b-input>
      </b-form-group>

      <b-form-group label="Opciones" v-show="activeForm.options">
        <ul>
          <li
            v-for="(item, index) in activeForm.options"
            :key="index"
            class="optionslist"
          >
            <b-row :gutter="5">
              <b-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                <b-input v-model="item.optionValue">{{
                  item.optionValue
                }}</b-input>
              </b-col>
              <b-col :xs="4" :sm="4" :md="4" :lg="4" :xl="3">
                <b-button
                  type="button"
                  @click="deleteOption(activeForm.options, index)"
                  v-show="activeForm.options.length > 1"
                >
                  <i class="el-icon-error"></i>
                </b-button>
              </b-col>
            </b-row>
          </li>
        </ul>

        <b-button type="text" @click="addOption(activeForm.options)">
          <i class="el-icon-plus"></i>
          Añadir
        </b-button>
      </b-form-group>
    </b-form>

  </div>
</template>

<script>
export default {
  name: "Properties",
  //store: ["activeForm"], // Get the form data from Home AvtiveForm tiene todo el lienzo para añadir comandos
  data() {
    return {
      labelPosition: "top",
      fieldProperties: {},
      rules: {},
    };
  },
  computed:{    
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
    deleteOption(option, index) {
      this.$delete(option, index);
    },

    addOption(option) {
      let count = option.length + 1;

      option.push({
        optionLabel: "Option " + count,
        optionValue: "Option " + count,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.optionslist {
  margin-bottom: 5px;
}
</style>