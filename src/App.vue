<template>
  <div
    :class="{ pageMask: inputIsInvalid }"
    @invalid-input="onChangeInputIsInvalid"
  >
    <header>
      <the-header></the-header>
    </header>
    <window-selector></window-selector>
    <keep-alive>
      <component :is="windowIsActive" @add-resource="addResource"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import WindowSelector from "./components/WindowSelector.vue";
import AddResource from "./components/AddResource.vue";
import StoredResources from "./components/StoredResources.vue";
import * as Vue from "vue";

export default {
  components: {
    TheHeader,
    WindowSelector,
    AddResource,
    StoredResources,
  },
  data() {
    return {
      windowIsActive: "stored-resources",
      resources: [],
      inputIsInvalid: false,
    };
  },
  provide() {
    return {
      selectWindow: this.changeWindow,
      providedResources: Vue.computed(() => this.resources),
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    addResource(resource) {
      this.resources.push(resource);
    },
    changeWindow(activeWindow) {
      this.windowIsActive = activeWindow;
    },
    deleteResource(resourceTitle) {
      this.resources = this.resources.filter(
        (resource) => resource.title !== resourceTitle
      );
    },
    onChangeInputIsInvalid() {
      this.inputIsInvalid = true;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

div {
  display: grid;
  place-items: center;
  grid-row: auto;
  gap: 2rem;
}
.pageMask {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
