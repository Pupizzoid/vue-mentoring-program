import { mount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

const props = { text: 'Hello Vitest', size: 'small' };

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, { props });

    expect(wrapper.text()).toContain('Hello Vitest');
    expect(wrapper.props().size).toBe('small');
  });

  it('should call emit', () => {
    const wrapper = mount(Button, { props });

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('searchData')).toBeTruthy();
  });
});
