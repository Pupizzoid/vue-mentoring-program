<script setup lang="ts">
import MovieCard from './MovieCard.vue';
import { Movie } from '../interfaces/Movie.ts';

defineProps<{
  movies: Movie[];
}>();
</script>

<template>
  <div class="movies-list">
    <MovieCard v-for="movie in movies" :card-data="movie" :key="movie.id" />
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
