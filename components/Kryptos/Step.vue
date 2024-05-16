<script setup lang="ts">
const emit = defineEmits(['change', 'remove']);

const props = defineProps({
  index: Number,
  input: String
});

const key = ref('KRYPTOS');
const passphrase = ref('PALIMPSEST');
const output = computed(() => vigenere.decode(passphrase.value.toUpperCase()));

const vigenere = reactive(
  useVigenere(toRef(() => props.input), key, passphrase)
);

const decode = () => emit('change', vigenere.decode(passphrase.value.toUpperCase()));

onMounted(decode);
watch(toRef(() => props.input), decode);
</script>

<template>
<li>
  <div class="title">
    <button @click="emit('remove')">x</button>
    <h4>Step {{ index }}</h4>
  </div>
  <KryptosStepMode class="mode"/>
  <label>
    Key
    <input id="key" type="text" v-model="key" @change="decode"/>
  </label>
  <label>
    Alphabet
    <input id="alphabet" type="text" :title="vigenere.alphabet"
           v-model="vigenere.alphabet" disabled/>
  </label>
  <label>
    Passphrase
    <input id="passphrase" type="text" v-model="passphrase" @change="decode"/>
  </label>
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
}

li {
  display: flex;
  flex-flow: column;
  grid-gap: 1rem;
  min-width: 0;
}

li > label {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

input {
  text-transform: lowercase;
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
