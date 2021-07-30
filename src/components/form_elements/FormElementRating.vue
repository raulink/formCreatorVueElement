<template>
  <div>
    <div class="rating">
      <b-form-rating v-model="value"></b-form-rating>      
    </div>
  </div>
</template>

<script>
export default {
  name: "Rating",
  data() {
    return {
      value: null,
    };
  },
  methods: {
    click(val) {
      this.value = val;
      console.log(this.value)
    },
  },
};
</script>

