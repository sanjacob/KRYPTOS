<script setup lang="ts">
const t = `𝐊𝐑𝐘𝐏𝐓𝐎𝐒`;
useHead({
  titleTemplate: (c) => c ? `${c} - ${t}` : t,
});

useSeoMeta({
  description: 'Based on the work by Jim Sanborn, 1998'
});
</script>

<template>
  <VitePwaManifest />
  <main style="padding: 2rem">
    <NuxtPage />
  </main>
</template>
