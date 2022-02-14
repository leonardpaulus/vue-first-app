<template>
  <div>
    <button
      @click="onSetActiveWindow('stored-resources')"
      :class="{ active: activeWindow === 'stored-resources' }"
    >
      Stored Resources
    </button>
    <button
      @click="onSetActiveWindow('add-resource')"
      :class="{ active: activeWindow === 'add-resource' }"
    >
      Add Resource
    </button>
  </div>
</template>

<script>
export default {
  inject: ["selectWindow"],
  data() {
    return {
      activeWindow: "stored-resources",
    };
  },
  methods: {
    onSetActiveWindow(activeWindow) {
      this.activeWindow = activeWindow;
      this.selectWindow(activeWindow);
    },
  },
};
</script>

<style scoped>
div {
  height: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
button:nth-child(2) {
  justify-self: start;
}
button:nth-child(1) {
  justify-self: end;
}
button {
  border: 1px solid #eee;
  width: 10rem;
  height: 3rem;
  background-color: transparent;
  color: darkred;
}
.active {
  background-color: darkred;
  color: white;
}
</style>
