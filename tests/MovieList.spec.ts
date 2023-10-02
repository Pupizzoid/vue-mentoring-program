import { mount } from '@vue/test-utils';
// @ts-ignore
import MovieList from '../src/components/MovieList.vue';
import { createPinia, setActivePinia } from 'pinia';
import { MOVIES } from '../src/mockData/mockMovies';
// @ts-ignore
import MovieCard from '../src/components/MovieCard.vue';

describe('MovieList', () => {
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  it('renders properly', () => {
    const wrapper = mount(MovieList, {
      props: {
        movies: MOVIES,
      },
    });
    const movie = wrapper.findAllComponents(MovieCard).at(0);
    expect(movie?.exists()).toBeTruthy();
    const movies = wrapper.findAllComponents(MovieCard);
    expect(movies).toHaveLength(9);
  });
});
