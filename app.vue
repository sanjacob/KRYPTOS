<script setup lang="ts">
const t = `𝐊𝐑𝐘𝐏𝐓𝐎𝐒`;
useHead({
  titleTemplate: (c) => c ? `${c} - ${t}` : t
});
</script>

<template>
  <main style="padding: 2rem">
    <NuxtPage />
  </main>
</template>
