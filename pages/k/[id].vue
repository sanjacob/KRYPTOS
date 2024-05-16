<script setup lang="ts">
const cipher = ref(k[1]);
</script>

<template>
<div id="split">
  <aside>
    <KryptosPipeline :input="k1" @change="cipher = $event;"/>
  </aside>
  <KryptosGrid id="grid" :cipher :row="3" />
</div>
</template>

<style scoped>
div#split {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 4rem;
}

aside {
  flex: 1 0;
  width: 100%;
  min-width: 0;
}

#grid {
  flex: 3 0;
  width: 100%;
}
</style>
