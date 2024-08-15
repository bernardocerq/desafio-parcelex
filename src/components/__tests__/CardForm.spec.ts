import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CardForm from '@/components/base/cards/CardForm.vue';
import BaseBtn from '@/components/base/buttons/BaseBtn.vue';
import { Form } from 'vee-validate';

describe('CardForm', () => {
  it('renderiza o título corretamente', () => {
    const wrapper = mount(CardForm, {
      props: {
        title: 'Test Form',
        size: 'md',
      },
    });

    expect(wrapper.find('h2').text()).toBe('Test Form');
  });

  it('renderiza o botão com o texto padrão "Enviar"', () => {
    const wrapper = mount(CardForm, {
      props: {
        size: 'md',
      },
    });

    const button = wrapper.findComponent(BaseBtn);
    expect(button.text()).toBe('Enviar');
  });

  it('renderiza o botão com o texto personalizado', () => {
    const wrapper = mount(CardForm, {
      props: {
        buttonText: 'Submit Now',
        size: 'md',
      },
    });

    const button = wrapper.findComponent(BaseBtn);
    expect(button.text()).toBe('Submit Now');
  });

  it('renderiza o botão com o loading ativado', () => {
    const wrapper = mount(CardForm, {
      props: {
        loading: true,
        size: 'md',
      },
    });

    const button = wrapper.findComponent(BaseBtn);
    expect(button.props('loading')).toBe(true);
  });

  it('emite o evento de submit ao clicar no botão',async () => {
    const wrapper = mount(CardForm, {
        props: {
          size: 'md',
        },
      });
    
      await wrapper.findComponent(Form).trigger('submit.prevent');
    
      expect(wrapper.emitted().onSubmit).toBeTruthy();

  });

  it('renderiza o slot padrão corretamente', () => {
    const wrapper = mount(CardForm, {
      props: {
        size: 'md',
      },
      slots: {
        default: '<div class="slot-content">Form Content</div>',
      },
    });

    expect(wrapper.find('.slot-content').exists()).toBe(true);
    expect(wrapper.find('.slot-content').text()).toBe('Form Content');
  });

  it('renderiza o formulário com as classes corretas', () => {
    const wrapper = mount(CardForm, {
      props: {
        size: 'md',
      },
    });

    const form = wrapper.find('form');
    expect(form.classes()).toContain('bg-white');
    expect(form.classes()).toContain('shadow-lg');
    expect(form.classes()).toContain('rounded-xl');
    expect(form.classes()).toContain('px-6');
    expect(form.classes()).toContain('py-8');
    expect(form.classes()).toContain('max-w-[48rem]');
    expect(form.classes()).toContain('m-4');
  });
});