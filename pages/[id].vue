<script setup lang="ts">
const route = useRoute();
const page = route.params.id[1];

const input = tools.s(k[page]);
const cipher = ref(input);
const width = ref(8);

useHead({ title: route.params.id });
</script>

<template>
<div id="split">
  <aside>
    <h1>k{{page}}</h1>
    <KryptosSolution v-if="page != 4"/>
    <KryptosPipeline :input @change="cipher = $event;"/>
    <KryptosResize v-model="width"/>
    <KryptosNav />
  </aside>
  <KryptosGrid id="grid" :cipher :col="width" />
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
  min-width: min(300px, calc(100lvw - 4rem));
}

#grid {
  flex: 3 0;
  width: 100%;
  min-width: min(400px, calc(100lvw - 4rem));
  max-width: calc(100lvw - 4rem);
}
</style>
