<template>
    <div>
        <component v-for="form in forms" :is="form.name" :key="`form-${form.name}`" v-bind="form.props" />
    </div>
</template>

<script setup lang="ts">
import IdentificationForm from '@/components/forms/IdentificationForm.vue';

import { computed } from 'vue';

const forms = computed(() => {
    return [
        {
            name: IdentificationForm, props: {},
        },
    ];
});

</script>

<style scoped>

</style>