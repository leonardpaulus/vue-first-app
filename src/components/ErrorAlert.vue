<template>
  <div></div>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {};
</script>

<style scoped>
dialog {
  display: grid;
  position: fixed;
  margin: 0 auto;
  width: 50%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 0.5rem;
  padding: 0;
  border: none;
  overflow: hidden;
  z-index: 10;
}
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
