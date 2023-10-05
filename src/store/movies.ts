import { defineStore } from 'pinia';
import { Movie } from '../interfaces/Movie.ts';
import { httpClient } from '@/global/httpClient.ts';
import useSearchStore from '@/store/search.ts';
import useSortStore from '@/store/sort.ts';

const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [] as Movie[],
    loading: false,
    error: null,
    selectedMovie: {} as Movie,
  }),
  actions: {
    async getMovies() {
      this.loading = true;
      return httpClient
        .get(`https://tame-erin-pike-toga.cyclic.app/movies${this.getRequestUrlParams()}`)
        .then((res: Movie[]) => (this.movies = res))
        .catch((error: null) => (this.error = error))
        .finally(() => (this.loading = false));
    },

    async getMovie(id: string) {
      this.loading = true;
      return httpClient
        .get(`https://tame-erin-pike-toga.cyclic.app/movies/${id}`)
        .then((res: Movie) => (this.selectedMovie = res))
        .catch((error: null) => (this.error = error))
        .finally(() => (this.loading = false));
    },

    getRequestUrlParams() {
      const { searchBy, searchString } = useSearchStore();
      const { sortBy } = useSortStore();
      let params = `?_sort=${sortBy}&_order=desc`;
      if (searchString) {
        params = params + `&${searchBy}_like=${searchString}`;
      }
      return params;
    },
  },
});

export default useMoviesStore;
