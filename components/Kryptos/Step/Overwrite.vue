<script setup lang="ts">
const emit = defineEmits(['change']);
const props = defineProps({input: String});

const modded = ref(props.input);

const propagate = () => emit('change', modded.value);
onMounted(propagate);
watch(modded, propagate);
</script>

<template>
<textarea v-model="modded"/>
</template>
