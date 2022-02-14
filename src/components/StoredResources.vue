<template>
  <div>
    <div
      v-for="resource in providedResources.value"
      :key="resource.title"
      class="resourceCards"
    >
      <button @click="deleteResource(resource.title)">Delete</button>
      <h2>
        {{ resource.title }}
      </h2>
      <p>{{ resource.description }}</p>
      <a :href="resource.link" target="_blank">View Resource</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  inject: ["providedResources", "deleteResource"],
};
</script>

<style scoped>
.resourceCards {
  width: 70vw;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 3vw;
  box-shadow: 10px 10px 17px 1px rgba(0, 0, 0, 0.3);
  gap: 0.5rem;
}
.resourceCards h2,
p,
a {
  justify-self: start;
}

a {
  color: orange;
  text-decoration: none;
}
</style>
