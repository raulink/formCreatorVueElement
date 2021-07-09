<template>
  <div>
    <b-input-group class="mb-2">
      <b-input-group-prepend is-text> # </b-input-group-prepend>
      <b-form-input
        tag-variant="primary"
        placeholder="Numero Entero"
        type="number"
        step="1"
        :state="validateInteger"
        v-model="number"
      ></b-form-input>
      <b-input-group-append is-text> 0 </b-input-group-append>
    </b-input-group>
  </div>
</template>


<script>
export default {
  name: "NumberInput",
  data() {
    return {
      number: null,
    };
  },
  computed: {
    validateInteger() {
      if (
        Number.isInteger(parseFloat(this.number)) &&
        parseFloat(this.number) > 0
      )
        return true;
      else return this.number === null ? null : false;
    },
  },
};
</script>