import { mount, VueWrapper } from '@vue/test-utils';
import MovieCard from '../src/components/MovieCard.vue';
import { createPinia, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';
const lazyLoadDirective = jest.fn();
describe('MovieCard', () => {
  let wrapper: VueWrapper<any, any>;
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);

    wrapper = mount(MovieCard, {
      props: {
        cardData: {
          title: 'Test Movie',
          genres: ['criminal', 'drama'],
          posterurl: '/src/assets/error-image.jpg',
          id: 1,
          year: '2023',
        },
      },
      global: {
        plugins: [createTestingPinia()],
      },
      directives: {
        lazyload: lazyLoadDirective,
      },
    });
  });

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Test Movie');
    expect(wrapper.text()).toContain('criminal');
    expect(wrapper.text()).toContain('2023');
  });
});
