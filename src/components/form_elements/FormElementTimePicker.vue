<template>
  <div>
    <b-form-timepicker
    v-model="time"      
    label-no-time-selected="--"
    placeholder="Seleccione Hora"
    >
    </b-form-timepicker>    
  </div>
</template>


<script>
  export default {
    name: 'TimePicker',
    data() {
    	return {
    		time: ''
    	}
    }
  }
</script>