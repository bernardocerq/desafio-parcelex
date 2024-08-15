import { computed } from 'vue'
import { useIdentificationForm } from './useIdentificationForm'

const idForm = useIdentificationForm()

const form = computed(() => {
    const formData = new FormData()
    
    formData.append('name', idForm.form.value.name)
    formData.append('phone', idForm.form.value.phone)
    formData.append('email', idForm.form.value.email)
    formData.append('age', idForm.form.value.age.toString())
    if (idForm.form.value.avatar) {
        formData.append('avatar', idForm.form.value.avatar)
    }

    return formData
})

const handleSubmit = () => {
    console.log(form.value)
}

const resetForm = () => {
    idForm.resetForm()
}

export const useUserForm = () => {
    return {
        form,
        handleSubmit,
        resetForm
    }
}