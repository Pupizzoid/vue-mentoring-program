<script setup lang="ts">
import MovieCard from './MovieCard.vue';
import { Movie } from '../interfaces/Movie.ts';

const props = defineProps<{
  movies: Movie[];
}>();
</script>

<template>
  <div class="movies-list">
    <MovieCard v-for="movie in props.movies" :card-data="movie" />
  </div>
</template>

<style scoped lang="scss">
.movies-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  background-color: var(--bs-dark);
  padding: 40px;
}
</style>
