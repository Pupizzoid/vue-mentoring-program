<script setup lang="ts">
import BaseLayout from '../components/BaseLayout.vue';
import StatusBar from '../components/StatusBar.vue';
import HomePageHeader from '../components/HomePageHeader.vue';
import MovieList from '../components/MovieList.vue';
import Footer from '../components/Footer.vue';
import Spinner from '../components/Spinner.vue';
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import useMoviesStore from '../store/movies.ts';
import useSearchStore from '@/store/search.ts';

const route = useRoute();
const searchStore = useSearchStore();
const context = reactive({ searchBy: 'title', sortBy: 'release date' });
const { loading, movies } = storeToRefs(useMoviesStore());
const { getMovies } = useMoviesStore();

const handleQueryParams = () => {
  if (route.query.title || route.query.genres) {
    const result = Object.entries(route.query);
    searchStore.searchBy = result[0][0];
    searchStore.searchString = result[0][1];
  }
};

const searchData = (event: string) => {
  context.searchBy = event;
};

const sortData = (event: string) => {
  context.sortBy = event;
};

handleQueryParams();

getMovies();
</script>

<template>
  <base-layout>
    <template v-slot:header>
      <HomePageHeader @search="searchData($event)" />
    </template>

    <template v-slot:main>
      <StatusBar :count="movies.length" label="movie found" @sort="sortData($event)" />
      <Spinner v-if="loading" />
      <p class="empty-request-message" v-else-if="!movies.length">Nothing found by your request</p>
      <MovieList v-else :movies="movies" />
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </base-layout>
</template>

<style scoped lang="scss">
@import './../styles/const';
.empty-request-message {
  color: $primary;
  font-size: 24px;
  margin: 40px;
  text-align: center;
}
</style>
