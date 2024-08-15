<template>
  <button
    :type="props.type"
    :class="[
      classes.base,
      classes.size[props.size],
      props.fullWidth && classes.fullWidth,
      props.loading
        ? variants[props.variant][props.color].loading
        : variants[props.variant][props.color].base,
    ]"
  >
    <div v-if="props.loading">
      <BaseLoader
        v-if="props.loading"
        :size="20   "
        :color="props.variant === 'outline' ? color : 'white'"
      />
    </div>
    <div v-if="$slots.icon" class="mr-2.5">
      <slot name="icon" />
    </div>
    <div :style="{ visibility: props.loading ? 'hidden' : 'visible' }">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
import BaseLoader from "@/components/base/loaders/BaseLoader.vue";

interface IProps {
  fullWidth?: boolean;
  color?: "primary" | "secondary";
  variant?: "outline" | "contained";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  type?: "button" | "submit";
}

const props = withDefaults(defineProps<IProps>(), {
  fullWidth: false,
  color: "primary",
  variant: "contained",
  size: "md",
  loading: false,
  type: "button",
});

const variants = {
  contained: {
    primary: {
      base: `bg-par-primary text-black font-bold border border-primary`,
      loading: `bg-par-primary text-black font-bold border border-primary`,
    },
    secondary: {
      base: `bg-par-secondary text-white font-bold border border-blue-secondary`,
      loading: `bg-par-secondary text-white font-bold border border-blue-secondary`,
    },
  },
  outline: {
    primary: {
      base: `bg-transparent text-par-primary font-bold border border-par-primary`,
      loading: `bg-transparent text-par-primary font-bold border border-par-primary`,
    },
    secondary: {
      base: `bg-transparent text-par-secondary font-bold border border-par-secondary`,
      loading: `bg-transparent text-par-secondary font-bold border border-par-secondary`,
    },
  },
} as any;

const classes = {
  base: `rounded-md text-sm font-400 relative focus:outline-none transition ease-in-out duration-300 flex justify-center items-center`,
  size: {
    sm: `px-4 py-2`,
    md: `px-6 py-3`,
    lg: `px-8 py-3`,
    xl: `px-20 py-4`,
  },
  fullWidth: `w-full`,
};
</script>
