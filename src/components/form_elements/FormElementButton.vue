<template>
    <div>
    	<b-button type="primary" class="form__button">{{ currentField.buttonText }}</b-button>      
    </div>
</template>

<script>
  export default {
    name: 'Button',
    props: ['currentField']
  }
</script>