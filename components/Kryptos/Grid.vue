<script setup lang="ts">
const props = defineProps({
  cipher: String,
  col: {
    type: Number,
    default: 8
  }
});
</script>

<template>
<ul :style="`grid-template-columns: repeat(${props.col}, 1fr);`">
  <li v-for="c in cipher.split('')">{{ c }}</li>
</ul>
</template>

<style scoped>
ul {
  display: grid;

  font-size: 3rem;
  align-content: start;
  gap: 1px;
}

li {
  border: 1px solid black;
  text-align: center;
  aspect-ratio: 1/1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
</style>
