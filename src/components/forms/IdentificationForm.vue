<template>
  <div class="md:flex gap-10">
    <div class="md:hidden flex justify-center">
      <ImageInput label="Avatar" v-model="idForm.form.value.avatar" />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-12">
        <BaseInput
          v-model="idForm.form.value.name"
          label="Nome *"
          name="name"
          placeholder="Digite seu nome"
          class="mb-4"
          rules="required"
        />
      </div>
      <div class="col-span-6">
        <BaseInput
          v-model="idForm.form.value.phone"
          label="Telefone"
          name="phone"
          placeholder="Digite seu telefone"
          class="mb-4"
          mask="(##) #####-####"
          rules="validatePhone"
        />
      </div>
      <div class="col-span-6">
        <BaseInput
          v-model.number="idForm.form.value.age"
          label="Idade"
          name="age"
          type="number"
          placeholder="Digite sua idade"
          class="mb-4"
          rules="minValue:18"
        />
      </div>
      <div class="col-span-12">
        <BaseInput
          v-model="idForm.form.value.email"
          label="Email *"
          name="email"
          placeholder="Digite seu email"
          class="mb-4"
          rules="required|email"
        />
      </div>
    </div>
    <div class="hidden md:block">
      <ImageInput label="Avatar" v-model="idForm.form.value.avatar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/base/inputs/BaseInput.vue";
import ImageInput from "@/components/base/inputs/ImageInput.vue";
import { useIdentificationForm } from "@/composables/form/useIdentificationForm";

const idForm = useIdentificationForm();
</script>

<style scoped></style>
