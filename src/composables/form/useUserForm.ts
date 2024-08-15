import { computed, ref } from 'vue'
import { useIdentificationForm } from './useIdentificationForm'
import { useToast } from 'vue-toastification'

const idForm = useIdentificationForm()
const toast = useToast()

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

const loading = ref(false)

const submitForm = async () => {
    try {
        loading.value = true
        await new Promise((resolve) => setTimeout(resolve, 1000))
        toast.success('Usuário cadastrado com sucesso!')
    } catch (error) {
        toast.error('Erro ao cadastrar usuário!')
    } finally {
        loading.value = false
    }
}

const resetForm = () => {
    idForm.resetForm()
}

export const useUserForm = () => {
    return {
        form,
        loading,
        submitForm,
        resetForm
    }
}