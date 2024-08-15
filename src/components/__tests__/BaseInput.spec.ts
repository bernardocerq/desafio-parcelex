import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BaseInput from '@/components/base/inputs/BaseInput.vue';

describe('BaseInput', () => {
  it('renderiza o label corretamente', () => {
    const wrapper = mount(BaseInput, {
      props: {
        label: 'label teste',
        name: 'test-input',
        rules: 'required',
      },
    });

    expect(wrapper.find('label').text()).toBe('label teste');
  });

  it('renderiza o input com os atributos corretos', () => {
    const wrapper = mount(BaseInput, {
      props: {
        name: 'test-input',
        type: 'text',
        placeholder: 'Insira o texto',
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('text');
    expect(input.attributes('placeholder')).toBe('Insira o texto');
  });

  it('emite evento com o valor do input', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        name: 'test-input',
        modelValue: '',
      },
    });

    const input = wrapper.find('input');
    await input.setValue('valor')

    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['valor']);
  });

  it('renderiza slot de ícone e sufixo corretamente', () => {
    const wrapper = mount(BaseInput, {
      props: {
        name: 'test-input',
      },
      slots: {
        icon: '<span class="icon-slot">Icone</span>',
        suffix: '<span class="suffix-slot">Sufixo</span>',
      },
    });

    expect(wrapper.find('.icon-slot').exists()).toBe(true);
    expect(wrapper.find('.suffix-slot').exists()).toBe(true);
  });

  it('aplica classes corretas quando o input está desabilitado', () => {
    const wrapper = mount(BaseInput, {
      props: {
        name: 'test-input',
        disabled: true,
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('disabled')).toBeDefined();
    expect(input.classes()).toContain('bg-par-gray-lightest');
  });
});
