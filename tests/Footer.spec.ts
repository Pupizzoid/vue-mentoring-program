import { mount } from '@vue/test-utils';
import Footer from '../src/components/Footer.vue';

describe('Footer', () => {
  it('renders properly', () => {
    const wrapper = mount(Footer);

    expect(wrapper.text()).toContain('netflix');
    expect(wrapper.text()).toContain('roulette');
  });
});
