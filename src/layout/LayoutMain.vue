<template>
  <div>
    <div class="main">
      <beer-box />
      <profile-box />
    </div>
  </div>
</template>

<script>
import BeerBox from "@/components/BeerBox.vue";
import ProfileBox from "@/components/ProfileBox.vue";

export default {
  components: {
    BeerBox,
    ProfileBox,
  },
};
</script>

<style lang="css" scoped>
.main {
  max-width: 1200px;
  margin: auto;
  padding: 0 10px;
  display: flex;
}
@media (max-width: 650px) {
  .main {
    flex-direction: column;
  }
}
</style>
