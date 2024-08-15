import { ref } from 'vue'
import { IdentificationForm } from '@/types/form/IdentificationFormType'

const form = ref<IdentificationForm>({
  name: '',
  phone: '',
  email: '',
  age: 0,
  avatar: null,
})

const resetForm = () => {
  form.value = {
    name: '',
    phone: '',
    email: '',
    age: 0,
    avatar: null,
  }
}

export const useIdentificationForm = () => {
  return {
    form,
    resetForm,
  }
}