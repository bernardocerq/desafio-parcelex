import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BaseLoader from '../base/loaders/BaseLoader.vue';

describe('BaseLoader', () => {
    it('aplica as classes base corretas no componente', () => {
        const wrapper = mount(BaseLoader, {
            props: {
                size: 20,
                color: 'primary',
            },
        });

        expect(wrapper.classes()).toContain('flex');
        expect(wrapper.classes()).toContain('items-center');
        expect(wrapper.classes()).toContain('justify-center');
        expect(wrapper.classes()).toContain('transform');
        expect(wrapper.classes()).toContain('-translate-x-1/2');
        expect(wrapper.classes()).toContain('-translate-y-1/2');
        expect(wrapper.classes()).toContain('ml-12');
    });

    it('aplica a cor correta com base na propriedade color', () => {
        const wrapperPrimary = mount(BaseLoader, {
            props: {
                size: 20,
                color: 'primary',
            },
        });

        const primaryColorClass = 'border-l-par-primary';
        expect(wrapperPrimary.findAll('div')[1].classes()).toContain(primaryColorClass);
        expect(wrapperPrimary.findAll('div')[2].classes()).toContain(primaryColorClass);
        expect(wrapperPrimary.findAll('div')[3].classes()).toContain(primaryColorClass);

        const wrapperSecondary = mount(BaseLoader, {
            props: {
                size: 20,
                color: 'secondary',
            },
        });

        const secondaryColorClass = 'border-l-par-secondary';
        expect(wrapperSecondary.findAll('div')[1].classes()).toContain(secondaryColorClass);
        expect(wrapperSecondary.findAll('div')[2].classes()).toContain(secondaryColorClass);
        expect(wrapperSecondary.findAll('div')[3].classes()).toContain(secondaryColorClass);

        const wrapperWhite = mount(BaseLoader, {
            props: {
                size: 20,
                color: 'white',
            },
        });

        const whiteColorClass = 'border-l-white';
        expect(wrapperWhite.findAll('div')[1].classes()).toContain(whiteColorClass);
        expect(wrapperWhite.findAll('div')[2].classes()).toContain(whiteColorClass);
        expect(wrapperWhite.findAll('div')[3].classes()).toContain(whiteColorClass);
    });

    it('aplica o tamanho correto com base na propriedade size', () => {
        const size = 30;
        const wrapper = mount(BaseLoader, {
          props: {
            size,
            color: 'primary',
          },
        });
    
        const divs = wrapper.findAll('div');
    
        const targetDivs = divs.filter(div => div.attributes('style'));
    
        targetDivs.forEach(div => {
          const style = div.attributes('style');
          expect(style).toContain(`width: ${size}px`);
          expect(style).toContain(`height: ${size}px`);
        });
      });

    it('aplica as classes de animação corretas no componente', () => {
        const wrapper = mount(BaseLoader, {
            props: {
                size: 20,
                color: 'primary',
            },
        });

        const divs = wrapper.findAll('div');
        expect(divs[1].classes()).toContain('animate-rotate');
        expect(divs[2].classes()).toContain('animate-rotateOpacity1');
        expect(divs[3].classes()).toContain('animate-rotate');
    });
});