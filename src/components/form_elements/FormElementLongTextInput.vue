<template>
  <div>    
    <b-form-textarea
      v-model="textarea"
      :placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''"
      :rows="3"
        >
    </b-form-textarea>
  </div>
</template>


<script>

  export default {
    name: 'LongTextInput',
    props: ['currentField'],
    data() {
    	return {
    		textarea: ''
    	}
    }
  }
</script>