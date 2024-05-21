<script setup lang="ts">
const route = useRoute();
const page = route.params.id[1];

const input = tools.s(k[page]);
const cipher = ref(input);
</script>

<template>
<div id="split">
  <aside>
    <h1>k{{page}}</h1>
    <KryptosSolution />
    <KryptosPipeline :input @change="cipher = $event;"/>
  </aside>
  <KryptosGrid id="grid" :cipher :row="3" />
</div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
}

div#split {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 4rem;
}

aside {
  flex: 1 0;
  width: 100%;
  min-width: min(300px, calc(100lvw - 2rem));
}

#grid {
  flex: 3 0;
  width: 100%;
  min-width: 400px;
}
</style>
