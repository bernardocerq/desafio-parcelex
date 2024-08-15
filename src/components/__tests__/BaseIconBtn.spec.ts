import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BaseIconBtn from '@/components/base/buttons/BaseIconBtn.vue';

describe('BaseIconBtn', () => {
  it('renderiza o botão com o tipo padrão "button"', () => {
    const wrapper = mount(BaseIconBtn);

    expect(wrapper.find('button').attributes('type')).toBe('button');
  });

  it('renderiza o botão com o tipo "submit"', () => {
    const wrapper = mount(BaseIconBtn, {
      props: {
        type: 'submit',
      },
    });

    expect(wrapper.find('button').attributes('type')).toBe('submit');
  });

  it('renderiza o botão com o tipo "reset"', () => {
    const wrapper = mount(BaseIconBtn, {
      props: {
        type: 'reset',
      },
    });

    expect(wrapper.find('button').attributes('type')).toBe('reset');
  });

  it('renderiza o slot padrão corretamente', () => {
    const wrapper = mount(BaseIconBtn, {
      slots: {
        default: 'Enviar',
      },
    });

    expect(wrapper.find('button').text()).toBe('Enviar');
  });

  it('renderiza o slot de ícone corretamente', () => {
    const wrapper = mount(BaseIconBtn);

    const button = wrapper.find('button');
    expect(button.classes()).toContain('flex');
    expect(button.classes()).toContain('items-center');
    expect(button.classes()).toContain('justify-center');
    expect(button.classes()).toContain('p-1');
    expect(button.classes()).toContain('rounded-md');
    expect(button.classes()).toContain('bg-par-secondary');
    expect(button.classes()).toContain('text-white');
  });
});
