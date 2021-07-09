<template>
  <div>
    <b-checkbox-group v-model="checkList">
      <b-checkbox v-for="(item, index) in currentField.options"
              :key="item.optionValue"
              :label="index">
        {{ item.optionValue }}
      </b-checkbox>
    </b-checkbox-group>
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: ['currentField'],
    data() {
    	return {
    		checkList: [0]
    	}
    }
  }
</script>