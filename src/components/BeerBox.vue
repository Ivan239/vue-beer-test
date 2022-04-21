<template>
  <div class="beerbox">
    <h2>Your beer</h2>
    <img class="image" src="@/assets/bottle.jpg" alt="beer bottle" />
    <div v-if="!isBeerLoading" class="content">
      <div>
        <p>{{ beer.brand }}</p>
      </div>
      <div>
        <p>{{ beer.name }}</p>
      </div>
      <div>
        <p>{{ beer.alcohol }}</p>
      </div>
    </div>
    <div v-else class="content"><p>Loading...</p></div>
    <button-ui class="beer__btn" @click="fetchBeer">New Beer</button-ui>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      beer: {
        name: "",
        brand: "",
        alcohol: "",
      },
      isBeerLoading: false,
    };
  },
  methods: {
    async fetchBeer() {
      try {
        this.isBeerLoading = true;
        const response = await axios.get(
          "https://random-data-api.com/api/beer/random_beer"
        );
        this.beer = response.data;
        if (
          this.beer.name.length > 25 ||
          this.beer.name.length + this.beer.brand.length > 33
        ) {
          this.fetchBeer();
        } else {
          this.isBeerLoading = false;
        }
      } catch (e) {
        alert("Error");
      }
    },
  },
  mounted() {
    this.fetchBeer();
  },
};
</script>

<style lang="css" scoped>
.image {
  width: 40%;
}
.beerbox {
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 650px) {
  .beerbox {
    width: 100%;
  }
}
.content {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;
  height: 20%;
  max-width: 36.9%;
  width: 100%;
  top: 54%;
  left: 31.1%;
  padding: 0 0.5%;
  background: linear-gradient(
    to right,
    rgb(70, 70, 70),
    rgb(240, 240, 240),
    rgb(70, 70, 70)
  );
  text-align: center;
}
p {
  margin: 0;
  font-weight: bold;
}
h2 {
  text-align: center;
}
.beer__btn {
  border: 1.5px solid rgb(40, 40, 40);
  margin: auto;
}
</style>
