<script setup lang="ts">
interface IProps {
  isFixed?: boolean;
  hasBackground?: boolean;
  size: number;
  color: "primary" | "secondary" | "white";
}

const props = withDefaults(defineProps<IProps>(), {
  isFixed: false,
  size: 10,
  color: "primary",
});

const wrapper_classes = {
  base: "flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 ml-12",
};

const effects_classes = {
  base: "rounded-full border-[3px] border-transparent border-solid box-border border-l-[3px]",
  effect_1: "absolute animate-rotate 1s",
  effect_2: "absolute animate-rotateOpacity1",
  effect_3: "animate-rotateOpacity2",
};

const color_classes = {
  primary: "border-l-par-primary",
  secondary: "border-l-par-secondary",
  white: "border-l-white",
};
</script>

<template>
  <div
    :class="[
      wrapper_classes.base,
    ]"
  >
    <div
      :class="[
        effects_classes.base,
        effects_classes.effect_1,
        color_classes[color],
      ]"
      :style="{ width: `${props.size}px`, height: `${props.size}px` }"
    />
    <div
      :class="[
        effects_classes.base,
        effects_classes.effect_2,
        color_classes[color],
      ]"
      :style="{ width: `${props.size}px`, height: `${props.size}px` }"
    />
    <div
      :class="[
        effects_classes.base,
        effects_classes.effect_1,
        color_classes[color],
      ]"
      :style="{ width: `${props.size}px`, height: `${props.size}px` }"
    />
  </div>
</template>
