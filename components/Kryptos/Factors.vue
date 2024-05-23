<script setup lang="ts">
const props = defineProps({
  n: Number
});

const emit = defineEmits(['click']);

const factors = computed(() => {
  const result = [];
  const sq = Math.floor(Math.sqrt(props.n));

  for (let i = 1; i <= sq; i++) {
    if ((props.n % i) == 0) {
      const d = Math.round(props.n/i);
      result.push(i);
      result.push(d);
    }
  }

  result.sort((a, b) => (a-b));
  return result;
});

const onClick = (f) => {
  if (f <= 24) {
    emit('click', f);
  }
};
</script>

<template>
<label>
  Factors
  <ul>
    <li v-for="f in factors" @click="onClick(f)">
      {{ f }}
    </li>
  </ul>
</label>
</template>

<style scoped>
label {
  display: flex;
  flex-flow: row wrap;
  grid-gap: 2rem;
}

ul {
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  grid-gap: 1px;
}

li {
  aspect-ratio: 1/1;
  padding: 0.2rem;
  text-decoration: underline;
}
</style>
