<script lang="ts">
import HomePageHeader from '../components/HomePageHeader.vue';
import StatusBar from '../components/StatusBar.vue';
import MovieList from '../components/MovieList.vue';
import { MOVIES } from '../mockData/mockMovies.ts';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Footer,
    HomePageHeader,
    StatusBar,
    MovieList,
  },
  methods: {
    MOVIES() {
      return MOVIES;
    },
    sortData(event: string): void {
      console.log('sort by ', event);
    },

    searchData(event: string): void {
      console.log('search by', event);
    },
  },
};
</script>

<template>
  <HomePageHeader @search="searchData($event)" />
  <StatusBar :count="6" label="movie found" @sort="sortData($event)" />
  <MovieList :movies="MOVIES()" />
  <Footer />
</template>

<style scoped></style>
