<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h3>Title</h3>
      <input type="text" v-model="resource.title" />
      <h3>Description</h3>
      <input type="text" v-model="resource.description" />
      <h3>Link</h3>
      <input type="url" v-model="resource.link" />
      <input type="submit" value="Add Resource" class="addResourceButton" />
    </form>
    <error-alert v-if="inputIsInvalid">
      <header>
        <h2>Invalid Input</h2>
      </header>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
      <button @click="onChangeInputIsInvalid">Okay</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  data() {
    return {
      resource: {
        title: "",
        description: "",
        link: "",
      },
      inputIsInvalid: false,
    };
  },
  components: {
    ErrorAlert,
  },
  methods: {
    handleSubmit() {
      const enteredTitle = this.resource.title;
      const enteredDescription = this.resource.description;
      const enteredLink = this.resource.link;

      if (enteredTitle || enteredDescription || enteredLink === "") {
        this.inputIsInvalid = true;
        console.log(this.inputIsInvalid);
      } else {
        this.$emit("add-resource", { ...this.resource });
        this.resource.title = "";
        this.resource.description = "";
        this.resource.link = "";
      }
    },
    onChangeInputIsInvalid() {
      this.inputIsInvalid = false;
      this.$emit("invalid-input", this.inputIsInvalid);
    },
  },
  emits: ["add-resource"],
};
</script>

<style scoped>
h2 {
  margin: 0;
}
h3 {
  margin: 0.5rem;
}

form {
  display: grid;
  width: 90%;
}

form input[type="submit"] {
  margin-top: 1rem;
  width: fit-content;
}

div {
  width: 70vw;
  height: 20rem;
  border-radius: 3vw;
  box-shadow: 10px 10px 17px 1px rgba(0, 0, 0, 0.3);
}

.addResourceButton {
  border: none;
  width: 10rem;
  height: 3rem;
  background-color: darkred;
  color: white;
}
button {
  justify-self: end;
  border: none;
  width: 6rem;
  height: 3rem;
  background-color: darkred;
  color: white;
  margin: 1rem;
}
header {
  width: 100%;
  height: 4rem;
  background-color: darkred;
  color: white;
  padding: 1rem;
}
p {
  margin: 1rem;
}
</style>
