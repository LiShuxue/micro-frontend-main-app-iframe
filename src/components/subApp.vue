<template>
    <iframe v-bind:id="id" class="sub-app" v-bind:src="src"></iframe>
</template>

<script>
export default {
  props: {
    id: String,
    src: String
  }
}
</script>

<style lang="scss" scoped>
  .sub-app {
    position: absolute;
    top: 0;
    left: calc(15vw + 10px);
    width: calc(85vw - 10px);
    height: 100vh;
    border: none;
    visibility: hidden;
  }
  .show{
    visibility: visible;
  }
</style>


