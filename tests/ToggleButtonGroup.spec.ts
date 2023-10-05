import { mount, VueWrapper } from '@vue/test-utils';
import ToggleButtonGroup from '../src/components/ToggleButtonGroup.vue';

describe('ToggleGroup', () => {
  let wrapper: VueWrapper<any, any>;

  beforeEach(() => {
    const label = 'Sort by';
    const options = ['Option 1', 'Option 2'];
    wrapper = mount(ToggleButtonGroup, {
      props: { label, options },
    });
  });

  it('adds "active" class to selected option', async () => {
    const input = wrapper.find('input[type="radio"]');
    await (input as any).setChecked(true);

    expect(wrapper.find('.label.active').exists()).toBe(true);
  });
});
