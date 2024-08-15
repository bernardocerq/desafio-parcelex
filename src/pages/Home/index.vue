<template>
  <div>
    <CardForm button-text="Submit" :loading="loading" @on-submit="handleSubmit">
      <template #default>
        <UserForm />
      </template>
    </CardForm>
  </div>
</template>

<script setup lang="ts">
import CardForm from "@/components/base/cards/CardForm.vue";
import UserForm from "@/components/forms/UserForm.vue";
import { useUserForm } from "@/composables/form/useUserForm";
import { ref } from "vue";

const userForm = useUserForm();

const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000)); // para fins de demonstração
  userForm.handleSubmit();
  loading.value = false;
};
</script>
