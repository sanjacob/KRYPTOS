<script setup lang="ts">
import KryptosStepVigenere from './Vigenere.vue';
import KryptosStepRotate from './Rotate.vue';
import KryptosStepReverse from './Reverse.vue';

const emit = defineEmits(['change', 'remove']);

const output = ref('');
const mode = ref(0);

const props = defineProps({
  index: Number,
  input: String
});

const onChange = (event) => {
  output.value = event;
  emit('change', event);
};

const modes = [
  KryptosStepVigenere,
  KryptosStepRotate,
  KryptosStepReverse
];
</script>

<template>
<li class="step">
  <div class="title">
    <button @click="emit('remove')">x</button>
    <h4>Step {{ index }}</h4>
  </div>
  <KryptosStepMode v-model="mode"/>
  <component :is="modes[mode]" @change="onChange" :input/>
  <label style="display: flex; flex-flow: column nowrap;">
    Out
    <textarea style="margin-top: 1rem;" disabled>{{ output }}</textarea>
  </label>
</li>
</template>

<style scoped>
li > div.title {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

li > div.title > h4 {
  margin: 0 1rem;
}

li > div.title > button {
  border: none;
  height: 50%;
  background-color: none;
}

li {
  display: flex;
  flex-flow: column;
  grid-gap: 1rem;
  min-width: 0;
}

textarea {
  background-color: black;
  color: white;
  padding: 0.2rem;
  font-size: 0.8rem;
  outline: none;
  border: none;
  border-radius: 2px;
  resize: none;
  min-height: 4rem;
}
</style>

<style>
li.step input {
  text-transform: lowercase;
}

li.step > label > :is(input, textarea) {
  flex: 2;
  width: 100%;
}

li.step > label {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  grid-gap: 1rem;
}
</style>
