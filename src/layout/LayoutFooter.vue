<template>
  <div>
    <div class="footer">
      <a
        href="https://github.com/Ivan239"
        class="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/github.png" alt="github" class="logo" />
      </a>
      <a
        href="https://innopolis.hh.ru/resume/805199d0ff098806f50039ed1f6330376c396b"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
      >
        <img src="@/assets/hh.png" alt="hh" class="logo" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.footer {
  margin: auto;
  max-width: 1200px;
  height: 64px;
  padding: 0 10px;
}

.link {
  cursor: pointer;
  color: rgb(240, 240, 240);
}

.logo {
  margin-right: 8px;
  height: 30px;
  border-radius: 4px;
  margin-top: 17px;
  transition-property: box-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease;
}

.logo:hover {
  box-shadow: rgba(240, 240, 240, 0.2) 1px 1px 4px;
}
</style>
