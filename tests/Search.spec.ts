import { mount, VueWrapper } from '@vue/test-utils';
// @ts-ignore
import Search from '../src/components/Search.vue';
import { createPinia, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';
// @ts-ignore
import Button from '../src/components/Button.vue';
import useSearchStore from '../src/store/search';
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
    const store = useSearchStore();
    expect(store.searchString).toEqual('some value');
  });
});
