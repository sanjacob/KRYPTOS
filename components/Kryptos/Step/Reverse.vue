<script setup lang="ts">
const emit = defineEmits(['change']);
const props = defineProps({input: String});

const { result } = useReverse(toRef(() => props.input));

const propagate = () => emit('change', result.value);
onMounted(propagate);
watch(result, propagate);
</script>
<template>
</template>
