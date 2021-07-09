<template>
    <div>    	
      <b-input 
    		:placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''">	
    	</b-input>
    </div>
</template>

<script>
  export default {
    name: 'TextInput',
    props: ['currentField']
  }
</script>