import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import IdentificationForm from '@/components/forms/IdentificationForm.vue';
import BaseInput from '@/components/base/inputs/BaseInput.vue';
import ImageInput from '@/components/base/inputs/ImageInput.vue';
import { useIdentificationForm } from '@/composables/form/useIdentificationForm';

vi.mock('@/composables/form/useIdentificationForm', () => {
    const form = {
        value: {
            name: '',
            phone: '',
            age: 0,
            email: '',
            avatar: null,
        },
    } as { [key: string]: any };

    return {
        useIdentificationForm: () => ({
            form: form as { [key: string]: any },
            updateFormValue: (field: string, value: any) => {
                form.value[field] = value;
            }
        }),
    };
});

describe('IdentificationForm', () => {
    it('renderiza o componente BaseInput com os labels corretos', () => {
        const wrapper = mount(IdentificationForm);

        const baseInputComponents = wrapper.findAllComponents(BaseInput);

        expect(baseInputComponents[0].props().label).toBe('Nome *');
        expect(baseInputComponents[1].props().label).toBe('Telefone');
        expect(baseInputComponents[2].props().label).toBe('Idade *');
        expect(baseInputComponents[3].props().label).toBe('Email *');
    });

    it('renderiza o componente ImageInput condicionalmente para mobile e desktop', () => {
        const wrapper = mount(IdentificationForm);

        const mobileDiv = wrapper.find('.md\\:hidden');
        expect(mobileDiv.exists()).toBe(true);
        expect(mobileDiv.findComponent(ImageInput).exists()).toBe(true);

        const desktopDiv = wrapper.find('.hidden.md\\:block');
        expect(desktopDiv.exists()).toBe(true);
        expect(desktopDiv.findComponent(ImageInput).exists()).toBe(true);
    });


    it('atualiza o valor do v-model corretamente', async () => {
        const wrapper = mount(IdentificationForm);

        const nameInput = wrapper.findComponent(BaseInput);

        await nameInput.vm.$emit('update:modelValue', 'John Doe');

        const { form } = useIdentificationForm();

        expect(form.value.name).toBe('John Doe');
    });

});
