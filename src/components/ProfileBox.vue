<template>
  <div class="profilebox">
    <h2>Your profile</h2>
    <div v-if="!isUserLoading" class="profile">
      <img class="image" :src="profile.avatar" alt="avatar" />
      <div class="content">
        <div class="profile__item">
          <p>Name:</p>
          <p class="content__right">
            {{ profile.first_name }} {{ profile.last_name }}
          </p>
        </div>
        <div class="profile__item">
          <p>Age:</p>
          <p class="content__right">{{ getAge() }}</p>
        </div>
        <div class="profile__item">
          <p>Position:</p>
          <p class="content__right">{{ profile.employment.title }}</p>
        </div>
        <div class="profile__item">
          <p>Address:</p>
          <p class="content__right">
            {{ profile.address.country }}, {{ profile.address.state }},
            {{ profile.address.city }}, {{ profile.address.street_name }},
            {{ profile.address.street_address }}, {{ profile.address.zip_code }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="content"><p>Loading...</p></div>
    <button-ui class="user__btn" @click="fetchUser">New User</button-ui>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      profile: {
        first_name: "",
        last_name: "",
        date_of_birth: "",
        avatar: "",
        address: {
          country: "",
          state: "",
          city: "",
          street_name: "",
          street_address: "",
          zip_code: "",
        },
        employment: {
          title: "",
        },
      },
      isUserLoading: false,
    };
  },
  methods: {
    async fetchUser() {
      try {
        this.isUserLoading = true;
        const response = await axios.get(
          "https://random-data-api.com/api/users/random_user"
        );
        this.profile = response.data;
      } catch (e) {
        alert("Error");
      } finally {
        this.isUserLoading = false;
      }
    },
    getAge() {
      var today = new Date();
      var birthDate = new Date(this.profile.date_of_birth);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
  mounted() {
    this.fetchUser();
  },
};
</script>

<style lang="css" scoped>
.image {
  width: 36%;
  height: 36%;
  border: 1px solid rgb(40, 40, 40);
  margin-right: 12px;
  border-radius: 12px;
}
.profilebox {
  width: 50%;
}
@media (max-width: 650px) {
  .profilebox {
    width: 100%;
  }
}
.profile {
  display: flex;
  padding-bottom: 12px;
}
.content {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.profile__item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.content__right {
  text-align: right;
  width: 70%;
}
p {
  margin: 0;
}
h2 {
  text-align: center;
}
.user__btn {
  border: 1.5px solid rgb(40, 40, 40);
  margin: auto;
  margin-bottom: 12px;
}
</style>
