<template>
  <form class="newFriendForm" @submit.prevent="handleSubmit">
    <input type="text" placeholder="First name" v-model="firstname" />
    <input type="text" placeholder="Last name" v-model="lastname" />
    <input type="text" placeholder="Phone number" v-model="phone" />
    <input type="text" placeholder="Email adress" v-model="email" />
    <input class="button" type="submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      friend: {
        id: "",
        name: "",
        phone: "",
        email: "",
        isFavorite: false,
      },
    };
  },
  emits: ["post-friend"],
  methods: {
    handleSubmit() {
      this.friend.name = this.firstname + " " + this.lastname;
      this.friend.id = this.firstname;
      this.friend.phone = this.phone;
      this.friend.email = this.email;
      this.postNewFriend();
    },
    postNewFriend() {
      this.$emit("post-friend", this.friend);
      this.resetFriendToPost();
    },
    resetFriendToPost() {
      this.friend = {
        id: "",
        name: "",
        phone: "",
        email: "",
        isFavorite: false,
      };
      this.firstname = "";
      this.lastname = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>

<style>
.newFriendForm {
  display: grid;
  width: 20%;
  margin: 0 auto;
  row-gap: 0.5rem;
}
</style>
