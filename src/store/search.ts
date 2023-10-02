import { defineStore } from 'pinia';
import useMoviesStore from './movies.ts';
import { Movie } from '../interfaces/Movie.ts';

const useSearchStore = defineStore('search', {
  state: () => ({
    searchString: '',
    searchBy: 'title',
  }),

  actions: {
    setSearchBy(value: string) {
      this.searchBy = value;
    },
  },
  getters: {
    getFilteredMovies(state) {
      const moviesState = useMoviesStore();
      if (!this.searchString) {
        return moviesState.movies;
      }
      return moviesState.movies.filter((movie: Movie) => {
        const searchedProperty = movie[state.searchBy as keyof Movie];
        const searchValue = state.searchString.toLowerCase();
        if (typeof searchedProperty === 'string') {
          return (searchedProperty as string).toLowerCase().includes(searchValue);
        } else {
          return (searchedProperty as string[]).some(x => x.toLowerCase().includes(searchValue));
        }
      });
    },
  },
});

export default useSearchStore;
