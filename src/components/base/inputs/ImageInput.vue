<template>
  <div class="flex flex-col mb-6">
    <label class="text-sm mb-4">{{ props.label }}</label>
    <div class="relative">
      <input
        ref="fileInput"
        name="avatar"
        type="file"
        @change="onFileChange"
        accept="image/*"
        class="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
      />
      <div
        v-if="!imageUrl"
        class="flex items-center justify-center w-48 h-48 text-center text-gray-400 border-2 border-dashed border-gray-300 rounded-full"
      >
        <slot name="placeholder">
          <p>Clique ou arraste uma imagem</p>
        </slot>
      </div>
      <div v-else class="relative">
        <BaseIconBtn class="absolute z-20 top-0 right-0" @click="handleClose">
          <CloseIcon class="w-4 h-4 text-white" />
        </BaseIconBtn>
        <img
          :src="imageUrl"
          alt="Imagem"
          class="w-48 h-48 object-cover rounded-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import BaseIconBtn from "@/components/base/buttons/BaseIconBtn.vue";

interface IProps {
  label: string;
}

const props = defineProps<IProps>();

const imageUrl = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

const emit = defineEmits(["update:modelValue"]);

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file && file.type.startsWith("image/")) {
    imageUrl.value = URL.createObjectURL(file);
  } else {
    imageUrl.value = null;
  }
  
  emit("update:modelValue", imageUrl.value);
};

const handleClose = () => {
  imageUrl.value = null;
  if (fileInput.value) {
    fileInput.value.value = "";
  }
};
</script>

<style scoped></style>
