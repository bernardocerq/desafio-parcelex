<template>
    <Form class="bg-white shadow-lg rounded-xl px-6 py-8 max-w-[48rem] m-4" @submit="handleSubmit">
        <h2 class="text-2xl font-semibold">{{ props.title }}</h2>
        <div>
            <slot/>
        </div>
        <BaseBtn full-width type="submit" color="secondary" :loading="props.loading" class="mt-8">{{ props.buttonText || 'Enviar' }}</BaseBtn>
    </Form>
</template>

<script setup lang="ts">
import BaseBtn from '@/components/base/buttons/BaseBtn.vue'
import { Form } from 'vee-validate'
import { computed } from 'vue';

interface IProps {
    title?: string;
    buttonText?: string;
    loading?: boolean;
    size: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<IProps>(), {
    size: 'md',
});

const emit = defineEmits(['onSubmit'])

const handleSubmit = () => {
    emit('onSubmit')
}

</script>

<style scoped>

</style>