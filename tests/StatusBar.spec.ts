import { mount, VueWrapper } from '@vue/test-utils';
import StatusBar from '../src/components/StatusBar.vue';
import { createPinia, setActivePinia } from 'pinia';
import ToggleButtonGroup from '../src/components/ToggleButtonGroup.vue';
import { createTestingPinia } from '@pinia/testing';

describe('StatusBar', () => {
  let wrapper: VueWrapper<any, any>;
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);

    wrapper = mount(StatusBar, {
      props: {
        label: 'test',
        count: 1,
      },
      global: {
        plugins: [createTestingPinia()],
      },
    });
  });

  it('renders text properly', () => {
    expect(wrapper.text()).toContain('test');
  });

  it('renders StatusBar properly', () => {
    const toggleGroup = wrapper.findComponent(ToggleButtonGroup);
    expect(toggleGroup.exists()).toBe(true);
  });

  it('renders text properly', async () => {
    const sortHandlerMock = jest.fn();
    wrapper.vm.sortHandler = sortHandlerMock;

    await wrapper.findComponent(ToggleButtonGroup).vm.$emit('input', 'rating');
    expect(sortHandlerMock).toHaveBeenCalled();
  });
});
