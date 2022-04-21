<template>
  <div class="app">
    <layout-header class="app__header" />
    <layout-main class="app__main" />
    <layout-footer class="app__footer" />
  </div>
</template>

<script>
import LayoutHeader from "@/layout/LayoutHeader.vue";
import LayoutMain from "@/layout/LayoutMain.vue";
import LayoutFooter from "@/layout/LayoutFooter.vue";

export default {
  name: "App",
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: sans-serif;
  box-sizing: border-box;
}

#app {
  height: 100%;
}

.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.app__main {
  flex-grow: 1;
}

.app__header {
  background-color: rgb(40, 40, 40);
}

.app__footer {
  background-color: rgb(24, 24, 24);
}
</style>
