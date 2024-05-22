<script setup lang="ts">
const emit = defineEmits(['change']);
const props = defineProps({input: String});

const jump = ref(0);
const shift = ref(0);

const { result } = useJump(toRef(() => props.input), jump, shift);

const propagate = () => emit('change', result.value);
onMounted(propagate);
watch(result, propagate);
</script>

<template>
<label>
Shift
<input v-model="shift" type="number" />
</label>
<label>
Jump
<input v-model="jump" type="number" />
</label>
</template>
