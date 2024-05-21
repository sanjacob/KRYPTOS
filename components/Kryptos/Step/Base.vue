<script setup lang="ts">
const emit = defineEmits(['change', 'remove']);

const output = ref('');

const props = defineProps({
  index: Number,
  input: String
});

const onChange = (event) => {
  output.value = event;
  emit('change', event);
};
</script>

<template>
<li class="step">
  <div class="title">
    <button @click="emit('remove')">x</button>
    <h4>Step {{ index }}</h4>
  </div>
  <KryptosStepMode class="mode"/>
  <KryptosStepVigenere @change="onChange" :input/>
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
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  background-color: black;
  color: white;
  padding: 0.2rem;
  font-size: 0.8rem;
  outline: none;
  border: none;
  border-radius: 2px;
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
