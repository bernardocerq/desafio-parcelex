<template>
  <Field
    v-slot="{ field, errorMessage }"
    v-model="value"
    :name="name"
    :rules="rules"
  >
    <div class="flex flex-col gap-1 w-full mb-1">
      <label class="font-400 text-dark text-sm"
        >{{ props.label
        }}<span v-if="props.mandatory" class="ml-1 text-[#52C076]"
          >*</span
        ></label
      >
      <div class="relative">
        <div
          v-if="$slots.icon"
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <slot name="icon" />
        </div>
        <div
          v-if="$slots.suffix"
          class="absolute inset-y-0 end-0 flex items-center px-3"
        >
          <slot name="suffix" />
        </div>
        <input
          v-bind="field"
          :min="min"
          v-model="value"
          v-maska="maska"
          :data-maska="mask"
          class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg transition focus:ring-par-secondary focus:border-par-secondary focus:outline-none"
          :class="{
            'border-par-danger': errorMessage,
            'border-par-gray-light': !errorMessage,
            'bg-par-gray-lightest': props.disabled,
            'ps-10': $slots.icon,
          }"
          :type="props.type"
          :placeholder="props.placeholder"
          :disabled="disabled"
          @change="change"
        />
      </div>
      <div v-if="errorMessage" class="mx-2 mt-[-5px]">
        <span class="text-par-danger text-sm">{{ errorMessage }}</span>
      </div>
    </div>
  </Field>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { Field, defineRule } from "vee-validate";
import * as validations from "@/utils/validators";

const objValid: any = validations;

Object.keys(objValid).forEach((x: string) => {
  defineRule(x, objValid[x]);
});

const props = defineProps<{
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  mask?: string;
  min?: number;
  valueInput?: string;
  mandatory?: boolean;
  disabled?: boolean;
  error?: Boolean;
  errorMessage?: string;
  rules?: string;
  modelValue?: any;
}>();

const value = ref(props.modelValue);

const maska = reactive({
  masked: "",
  unmasked: "",
  completed: false,
});

watch(value, () => {
  if (!props.mask) emit("update:modelValue", value.value);
});

watch(
  () => props.modelValue,
  () => {
    value.value = props.modelValue;
  }
);

watch(
  maska,
  () => {
    emit("update:modelValue", maska.unmasked);
  },
  {
    deep: true,
  }
);

function change(value: any) {
  emit("change", value);
}

const emit = defineEmits(["update:modelValue", "change"]);
</script>
