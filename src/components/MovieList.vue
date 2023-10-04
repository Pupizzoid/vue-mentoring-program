<script setup lang="ts">
import MovieCard from './MovieCard.vue';
import { Movie } from '../interfaces/Movie.ts';
import router from '@/router';

defineProps<{
  movies: Movie[];
}>();

const handleSelectMovie = (id: number) => {
  router.push({ name: 'movie-details', params: { id } });
};
</script>

<template>
  <div class="movies-list">
    <MovieCard v-for="movie in movies" :card-data="movie" :key="movie.id" @click="handleSelectMovie(movie.id)" />
  </div>
</template>

<style scoped lang="scss">
.movies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  padding: 40px;
  justify-content: center;
  max-width: 1280px;
  margin: auto;
}
</style>
