<script setup lang="ts">
const emit = defineEmits(['change']);
const props = defineProps({input: String});

const col = ref(8);
const angle = ref(0);

const { result } = useRotate(toRef(() => props.input), col, angle);

const propagate = () => emit('change', result.value);
onMounted(propagate);
watch(result, propagate);
</script>

<template>
<label>
  Columns
  <input v-model="col" id="alphabet" type="number" min="1" step="1"/>
</label>
<label>
  Turns
  <input v-model="angle" id="alphabet" type="number" min="0" max="270" step="90"/>
</label>
</template>
