<template>
  <div>
    <CardForm button-text="Submit" :loading="userForm.loading.value" @on-submit="handleSubmit">
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

const userForm = useUserForm();

const handleSubmit = async () => {
  userForm.submitForm();
};
</script>
