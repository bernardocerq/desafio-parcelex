<template>
    <button :type="props.type" class="flex items-center justify-center p-1 rounded-md bg-par-secondary text-white">
        <slot/>
    </button>
</template>

<script setup lang="ts">
interface IProps {
    type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<IProps>(), {
    type: 'button',
});
</script>

<style scoped>
/* Estilos personalizados aqui */
</style>