import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BaseBtn from '@/components/base/buttons/BaseBtn.vue';
import BaseLoader from '@/components/base/loaders/BaseLoader.vue';

describe('BaseBtn', () => {
    it('renderiza botão com diferentes variantes e cores', () => {
        const wrapper = mount(BaseBtn, {
            props: {
                variant: 'outline',
                color: 'primary',
            },
        });
        expect(wrapper.classes()).toContain('text-par-primary');
        expect(wrapper.classes()).toContain('border-par-primary');
    });

    it('renderiza botão com loading state', () => {
        const wrapper = mount(BaseBtn, {
            props: {
                loading: true,
                variant: 'contained',
                color: 'primary',
            },
        });
        expect(wrapper.findComponent(BaseLoader).exists()).toBe(true);
        expect(wrapper.find('div[style="visibility: hidden;"]').exists()).toBe(true);
    });

    it('renderiza botão sem loading state', () => {
        const wrapper = mount(BaseBtn, {
            props: {
                loading: false,
                variant: 'contained',
                color: 'primary',
            },
        });
        expect(wrapper.findComponent(BaseLoader).exists()).toBe(false);
        expect(wrapper.find('div[style="visibility: visible;"]').exists()).toBe(true);
    });

    it('renderiza slot de icone corretamente', () => {
        const wrapper = mount(BaseBtn, {
            props: {
                variant: 'contained',
                color: 'primary',
            },
            slots: {
                icon: '<svg class="icon"></svg>',
            },
        });
        expect(wrapper.find('.icon').exists()).toBe(true);
    });

    it('renderiza slot default corretamente', () => {
        const wrapper = mount(BaseBtn, {
            props: {
                variant: 'contained',
                color: 'primary',
            },
            slots: {
                default: 'Button Text',
            },
        });
        expect(wrapper.text()).toContain('Button Text');
    });

    it('emite evento de click', async () => {
        const wrapper = mount(BaseBtn, {
            props: {
                variant: 'contained',
                color: 'primary',
            },
        });
        await wrapper.trigger('click');
        expect(wrapper.emitted().click).toBeTruthy();
    });
});