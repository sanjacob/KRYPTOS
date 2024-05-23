<script setup lang="ts">
const route = useRoute();
const page = parseInt(route.params.id[0]);

const input = tools.s(k[page]);
const cipher = ref(input);
const width = ref(8);

useHead({ title: 'K' + route.params.id });
</script>

<template>
<div id="split">
  <aside>
    <KryptosNav />
    <header>
      <h1>k{{page}}</h1>
      <sub>({{cipher.length}})</sub>
    </header>
    <KryptosSolution :page/>
    <KryptosPipeline :input @change="cipher = $event"/>
    <KryptosResize v-model.number="width"/>
    <KryptosFactors :n="cipher.length" @click="width = $event"/>
  </aside>
  <KryptosGrid id="grid" :cipher :col="width"/>
</div>
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
