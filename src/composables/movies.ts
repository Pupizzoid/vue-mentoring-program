import { httpClient } from '../global/httpClient.ts';
import { reactive, toRefs } from 'vue';

export const useMovies = () => {
  const state = reactive({
    movies: [],
    loading: false,
    error: null,
  });

  const getMovies = () => {
    state.loading = true;
    httpClient
      .get('https://tame-erin-pike-toga.cyclic.app/movies')
      .then(res => (state.movies = res))
      .catch(error => (state.error = error))
      .finally(() => (state.loading = false));
  };

  return {
    state: toRefs(state),
    getMovies,
  };
};
