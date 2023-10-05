import Spinner from '../src/components/Spinner.vue';
import { mount } from '@vue/test-utils';

describe('Spinner', () => {
  it('should contain div', () => {
    const wrapper = mount(Spinner);
    const div = wrapper.find('.spinner');
    expect(div.exists()).toBe(true);
  });
});
