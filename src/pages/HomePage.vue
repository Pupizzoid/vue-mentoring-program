<script setup lang="ts">
import BaseLayout from '../components/BaseLayout.vue';
import StatusBar from '../components/StatusBar.vue';
import HomePageHeader from '../components/HomePageHeader.vue';
import MovieList from '../components/MovieList.vue';
import Footer from '../components/Footer.vue';
import { useMovies } from '../composables/movies.ts';
import Spinner from '../components/Spinner.vue';
import { reactive } from 'vue';

const context = reactive({ searchBy: 'title', sortBy: 'release date' });
const searchData = (event: string) => {
  context.searchBy = event;
};

const sortData = (event: string) => {
  context.sortBy = event;
};

const { state, getMovies } = useMovies();
getMovies();

const { movies, loading, error } = state;
</script>

<template>
  <base-layout>
    <template v-slot:header>
      <HomePageHeader @search="searchData($event)" />
    </template>

    <template v-slot:main>
      <StatusBar :count="movies.length" label="movie found" @sort="sortData($event)" />
      <Spinner v-if="loading" />
      <MovieList :movies="movies" />
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </base-layout>
</template>

<style scoped></style>
