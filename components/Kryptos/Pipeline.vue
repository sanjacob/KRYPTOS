<script setup lang="ts">
const props = defineProps({ input: String });
const emit = defineEmits(['change']);

const steps = reactive([]);

const push = () => {
  const tail = steps[steps.length - 1];
  const first = steps.length == 0;

  steps.push({
    id: first ? 0 : tail.id + 1,
    output: first ? props.input : tail.output
  });
};

const remove = (i) => {
  steps.splice(i, 1);
  if (steps.length === 0) {
    emit('change', props.input);
  } else {
    emit('change', steps[steps.length - 1].output);
  }
};

const update = (i, event) => {
  steps[i].output = event;

  if (i === steps.length - 1) {
    emit('change', event);
  }
};

</script>

<template>
<ul>
  <KryptosStepBase v-for="(s, i) in steps" :key="s.id"
               @remove="remove(i)" @change="update(i, $event)"
               :input="i ? steps[i-1].output : props.input" :index="i+1" />
</ul>
<button @click="push">Add step</button>
</template>

<style scoped>
ul {
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  margin: 2rem 0;
}

button {
  width: 100%;
}
</style>
