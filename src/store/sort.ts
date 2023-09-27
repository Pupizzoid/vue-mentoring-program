import { defineStore } from 'pinia';
import { Movie } from '../interfaces/Movie.ts';
import useSearchStore from './search.ts';

const useSortStore = defineStore('sort', {
  state: () => ({
    sortBy: 'releaseDate',
  }),
  getters: {
    getSortedMovies(state) {
      const { getFilteredMovies } = useSearchStore();
      if (state.sortBy === 'releaseDate') {
        return getFilteredMovies.sort((a: Movie, b: Movie) =>
          new Date(a[state.sortBy as keyof Movie] as string) > new Date(b[state.sortBy as keyof Movie] as string) ? 1 : -1,
        );
      } else {
        return getFilteredMovies.sort((a: Movie, b: Movie) => (a[state.sortBy as keyof Movie] > b[state.sortBy as keyof Movie] ? 1 : -1));
      }
    },
  },
});

export default useSortStore;
