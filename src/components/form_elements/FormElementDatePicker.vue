<template>
  <div>
    <b-form-datepicker
      v-model="date"
      menu-class="w-100"
      calendar-width="100%"
      class="mb-2"
      placeholder="Seleccione Fecha"
    >      
    </b-form-datepicker>
  </div>
</template>


<script>
  export default {
    name: 'DatePicker',
    data() {
    	return {
    		date: ''
    	}
    }
  }
</script>