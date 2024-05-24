<script setup lang="ts">
const props = defineProps({
  page: Number,
  length: Number
});
</script>

<template>
<header>
  <sub v-if="!page">...</sub>
  <h1 v-if="page">k{{page}}</h1>
  <sub v-if="page">({{length}})</sub>
</header>
</template>

<style scoped>
header {
  display: flex;
  flex-flow: row nowrap;
  margin: 2rem 0;
  justify-content: center;
  align-items: stretch;
}

sub {
  vertical-align: sub;
  display: inline;
}

h1 {
  font-size: 2rem;
  margin: 0;
}
</style>
