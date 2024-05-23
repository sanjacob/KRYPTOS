<script setup lang="ts">
const props = defineProps({
  page: Number
});
</script>

<template>
<details v-if="page != 4">
<summary>Official Solution</summary>
<ol>
<li v-for="s in solutions[page]">{{s}}</li>
</ol>
</details>
</template>

<style scoped>
details {
  border: 2px solid black;
  padding: 1rem;
}

details > summary {
  font-size: 1.2rem;
  text-decoration: underline;
}
</style>
