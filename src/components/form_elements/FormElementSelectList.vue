<template>
  <div>
    <b-form-select v-model="value" class="mb-3" placeholder="Seleccione Opcion">
      <b-form-select-option v-for="(item, index) in currentField.options" :value="item.optionLabel" :key="index">
        <span :key="index">
        {{item.optionValue}}
        </span>
      </b-form-select-option>
    </b-form-select>
  

  </div>
</template>


<script>
  export default {
    name: 'SelectList',
    props: ['currentField'],
    data(){
    	return {
    		value: ""
    	}
    }
  }
</script>