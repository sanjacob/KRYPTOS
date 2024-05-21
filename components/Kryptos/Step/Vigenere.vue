<script setup lang="ts">
const emit = defineEmits(['change']);

const props = defineProps({input: String});

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
</template>
