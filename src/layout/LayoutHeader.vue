<template>
  <div>
    <div class="header">
      <h1 class="header__title">Test Beer Vue</h1>
      <a
        href="https://github.com/Ivan239/vue-beer-test"
        class="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button-ui>Repo</button-ui>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.header__title {
  margin: 0;
  margin-top: auto;
  margin-bottom: auto;
}

.header {
  margin: auto;
  max-width: 1200px;
  color: rgb(240, 240, 240);
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 52px;
}

.link {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
