<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const defaultLayout = 'default-layout'

const layout = computed(() => {
  return route.meta.layout || defaultLayout;
});

</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
