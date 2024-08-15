import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import UserForm from '@/components/forms/UserForm.vue';
import IdentificationForm from '@/components/forms/IdentificationForm.vue';

describe('UserForm', () => {
  it('renderiza IdentificationForm corretamente', () => {
    const wrapper = mount(UserForm);

    const identificationForm = wrapper.findComponent(IdentificationForm);
    expect(identificationForm.exists()).toBe(true);
  });

  it('passa as props corretamente para o IdentificationForm', () => {
    const wrapper = mount(UserForm);

    const identificationForm = wrapper.findComponent(IdentificationForm);
    expect(identificationForm.props()).toEqual({});
  });

  it('renderiza multiplos IdentificationForm corretamente', () => {
    const wrapper = mount(UserForm);

    const identificationForm = wrapper.findComponent(IdentificationForm);
    expect(identificationForm.exists()).toBe(true);

    const components = wrapper.findAllComponents(IdentificationForm);
    expect(components.length).toBe(1);
  });
});
