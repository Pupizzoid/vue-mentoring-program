import { mount, VueWrapper } from '@vue/test-utils';
import Search from '../src/components/Search.vue';
import { createPinia, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';
import Button from '../src/components/Button.vue';

describe('Search', () => {
  let wrapper: VueWrapper<any, any>;

  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);

    wrapper = mount(Search, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
  });

  it('should contain button', () => {
    const button = wrapper.findComponent(Button);
    expect(button.exists()).toBe(true);
  });

  it('should change value', async () => {
    const textInput = wrapper.find('.input');
    await textInput.setValue('some value');
    expect(wrapper.vm.searchString).toEqual('some value');
  });

  it('calls handleSearch when Enter key is pressed in the input', async () => {
    const input = wrapper.find('.input');
    const handleSearch = jest.spyOn(wrapper.vm, 'handleSearch');

    await input.setValue('Test Search');
    await input.trigger('keyup.enter');

    expect(handleSearch).toHaveBeenCalled();
  });
});
