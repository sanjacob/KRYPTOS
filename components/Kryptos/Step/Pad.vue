<script setup lang="ts">
const emit = defineEmits(['change']);
const props = defineProps({input: String});

const pad = ref('');
const side = ref(0);

const { result } = usePad(toRef(() => props.input), pad, side);

const propagate = () => emit('change', result.value);
onMounted(propagate);
watch(result, propagate);
</script>

<template>
<label>
Text
<input v-model="pad" type="text"/>
</label>
<label>
Side
<select v-model="side" style="flex: 1;">
<option value="0">start</option>
<option value="1">end</option>
</select>
</label>
</template>
