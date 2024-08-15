import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ImageInput from '@/components/base/inputs/ImageInput.vue';
import BaseIconBtn from '@/components/base/buttons/BaseIconBtn.vue';

describe('ImageInput', () => {
    it('renderiza o label corretamente', () => {
        const wrapper = mount(ImageInput, {
            props: {
                label: 'Faça o upload de uma imagem',
            },
        });

        expect(wrapper.find('label').text()).toBe('Faça o upload de uma imagem');
    });

    it('renderiza o slot de placeholder corretamente quando nenhuma imagem é carregada', () => {
        const wrapper = mount(ImageInput, {
            props: {
                label: 'Faça o upload de uma imagem',
            },
            slots: {
                placeholder: '<p>Faça o upload de uma imagem aqui</p>',
            },
        });

        expect(wrapper.find('p').text()).toBe('Faça o upload de uma imagem aqui');
    });

    it('renderiza o slot de placeholder padrão corretamente quando nenhuma imagem é carregada', () => {
        const wrapper = mount(ImageInput, {
            props: {
                label: 'Faça o upload de uma imagem',
            },
        });

        expect(wrapper.find('p').text()).toBe('Clique ou arraste uma imagem');
    }); 
});