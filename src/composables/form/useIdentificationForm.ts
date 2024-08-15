import { ref } from 'vue'
import { IdentificationForm } from '@/types/form/IdentificationFormType'

export const useIdentificationForm = () => {
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
  
  return {
    form,
    resetForm,
  }
}