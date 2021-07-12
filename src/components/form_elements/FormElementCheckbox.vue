<template>
  <div>

 <b-form-checkbox-group
      v-model="checkList"
      :options="currentField.options"
      class="mb-3"
      value-field="optionValue"
      text-field="optionLabel"
      disabled-field="notEnabled"
    ></b-form-checkbox-group>
    
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: ['currentField'],
    data() {
    	return {
    		checkList: [],
        selected:[],
    	}
    }
  }
</script>