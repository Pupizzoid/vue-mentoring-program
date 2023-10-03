import { mount } from '@vue/test-utils';
// @ts-ignore
import Header from '../src/components/Header.vue';
import { createTestingPinia } from '@pinia/testing';
import useMoviesStore from '../src/store/movies';
import { createPinia, setActivePinia } from 'pinia';

describe('Header', () => {
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  it('renders properly', () => {
    const wrapper = mount(Header);

    expect(wrapper.text()).toContain('netflix');
    expect(wrapper.text()).toContain('roulette');
  });

  it('renders properly', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const store = useMoviesStore();
    wrapper.find('p').trigger('click');

    expect(store.resetSelectedMovie).toHaveBeenCalled();
  });
});
