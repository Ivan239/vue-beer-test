<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-ui",
};
</script>

<style lang="css" scoped>
button {
  cursor: pointer;
  align-self: flex-end;
  padding: 10px 15px;
  background-color: white;
  color: rgb(40, 40, 40);
  border: none;
  border-radius: 6px;
  transition-property: background-color;
  transition-duration: 0.25s;
  transition-timing-function: ease;
}

button:hover {
  background-color: rgb(200, 200, 200);
}
</style>
