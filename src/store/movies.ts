import { defineStore } from 'pinia';
import moviesApi from './../api/movies.ts';
import { Movie } from '../interfaces/Movie.ts';

const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
    loading: false,
    error: null,
    selectedMovie: null,
  }),
  actions: {
    async getMovies() {
      this.loading = true;
      return moviesApi
        .getMovies()
        .then(res => (this.movies = res))
        .catch(error => (this.error = error))
        .finally(() => (this.loading = false));
    },

    selectMovie(id: number) {
      this.selectedMovie = this.movies.find((movie: Movie) => movie.id === id) || null;
    },

    resetSelectedMovie() {
      this.selectedMovie = null;
    },
  },
});

export default useMoviesStore;
