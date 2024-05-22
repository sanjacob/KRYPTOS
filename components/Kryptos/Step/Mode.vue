<script setup lang="ts">
const model = defineModel();
</script>

<template>
<select v-model="model">
  <option value="0">Vigenère</option>
  <option value="1">Rotate</option>
</select>
</template>

<style scoped>
.mode {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: black;
  color: white;
}
</style>
