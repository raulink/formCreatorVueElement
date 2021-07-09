<template>
  <div>
    <el-date-picker
      v-model="date"
      type="datetime"
      placeholder="Seleccionar Fecha y Hora">
    </el-date-picker>
  


  </div>
</template>


<script>
  export default {
    name: 'DatetimePicker',
    data() {
    	return {
    		date: '',
        
    	}
    }
  }
</script>