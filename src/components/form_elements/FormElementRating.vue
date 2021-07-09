<template>
  <div>
    <div class="rating">
      <input type="radio" name="rating" @click="click(5)" id="5" />
      <label for="5">☆</label>
      <input type="radio" name="rating" @click="click(4)" id="4" />
      <label for="4">☆</label><input type="radio" name="rating" @click="click(3)" id="3" />
      <label for="3">☆</label><input type="radio" name="rating" @click="click(2)" id="2" />
      <label for="2">☆</label><input type="radio" name="rating" @click="click(1)" id="1" />
      <label for="1">☆</label><input type="radio" name="rating" @click="click(1)" id="1" />
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
    },
  },
};
</script>

<style scoped>
.rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}

.rating > input {
  display: none;
}

.rating > label {
  position: relative;
  width: 1em;
  font-size: 3vw;
  color: #ffd600;
  cursor: pointer;
}

.rating > label::before {
  content: "\2605";
  position: absolute;
  opacity: 0;
}

.rating > label:hover:before,
.rating > label:hover ~ label:before {
  opacity: 1 !important;
}

.rating > input:checked ~ label:before {
  opacity: 1;
}

.rating:hover > input:checked ~ label:before {
  opacity: 0.4;
}
</style>