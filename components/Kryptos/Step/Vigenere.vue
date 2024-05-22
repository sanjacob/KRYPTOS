<script setup lang="ts">
const emit = defineEmits(['change']);
const props = defineProps({input: String});

const key = ref('KRYPTOS');
const passphrase = ref('');

const { alphabet, result } = useVigenere(
  toRef(() => props.input), key, passphrase
);

const propagate = () => emit('change', result.value);
onMounted(propagate);
watch(result, propagate);
</script>

<template>
<label>
  Key
  <input v-model="key" id="key" type="text" @change="decode"/>
</label>
<label>
  Alphabet
  <input v-model="alphabet" id="alphabet" type="text" :title="alphabet" disabled/>
</label>
<label>
  Passphrase
  <input v-model="passphrase" id="passphrase" type="text" @change="decode"/>
</label>
</template>
