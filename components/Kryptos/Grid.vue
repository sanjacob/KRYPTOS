<script setup lang="ts">
const props = defineProps({
  cipher: {
    type: String,
    default: ''
  },
  col: {
    type: Number,
    default: 8
  }
});
</script>

<template>
<ul :style="`grid-template-columns: repeat(${props.col}, minmax(1rem, 4rem));`">
  <li v-for="c in cipher.split('')">
    <span>{{ c }}</span>
  </li>
</ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-gap: 1px;
  align-content: start;
  justify-content: center;
}

li {
  border: 1px solid black;
  text-align: center;
  aspect-ratio: 1/1;
  container-type: inline-size;
}

li > span {
  font-size: 70cqw;
}
</style>
