<script setup lang="ts">
import BaseLayout from '../components/BaseLayout.vue';
import StatusBar from '../components/StatusBar.vue';
import HomePageHeader from '../components/HomePageHeader.vue';
import MovieList from '../components/MovieList.vue';
import Footer from '../components/Footer.vue';
import Spinner from '../components/Spinner.vue';
import { reactive } from 'vue';
import useMoviesStore from '../store/movies.ts';
import { storeToRefs } from 'pinia';
import useSortStore from '../store/sort.ts';

const context = reactive({ searchBy: 'title', sortBy: 'release date' });
const searchData = (event: string) => {
  context.searchBy = event;
};

const sortData = (event: string) => {
  context.sortBy = event;
};
const { loading } = storeToRefs(useMoviesStore());
const { getMovies } = useMoviesStore();
getMovies();
const { getSortedMovies } = storeToRefs(useSortStore());
</script>

<template>
  <base-layout>
    <template v-slot:header>
      <HomePageHeader @search="searchData($event)" />
    </template>

    <template v-slot:main>
      <StatusBar :count="getSortedMovies.length" label="movie found" @sort="sortData($event)" />
      <Spinner v-if="loading" />
      <MovieList v-else :movies="getSortedMovies" />
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </base-layout>
</template>

<style scoped></style>
