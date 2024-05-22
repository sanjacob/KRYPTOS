<script setup lang="ts">
const model = defineModel();
</script>

<template>
<select v-model="model">
  <option value="0">Vigenère</option>
  <option value="1">Rotate</option>
  <option value="2">Reverse</option>
  <option value="3">Pad</option>
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
