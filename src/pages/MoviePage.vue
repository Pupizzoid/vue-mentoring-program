<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useMoviesStore from '../store/movies.ts';
import { ref } from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { useRoute } from 'vue-router';
import Spinner from '@/components/Spinner.vue';

const route = useRoute();
const id = route.params.id;
const { getMovie } = useMoviesStore();
const { loading, selectedMovie } = storeToRefs(useMoviesStore());
getMovie(id as string);
const image = ref(selectedMovie.value.posterurl);
const handleImageError = () => {
  image.value = '/src/assets/error-image.jpg';
};
const regex = /\d+/g;
</script>

<template>
  <base-layout>
    <template v-slot:header>
      <Header />
    </template>

    <template v-slot:main>
      <Spinner v-if="loading" />
      <div class="card-wrapper" v-else>
        <h2>{{ selectedMovie.title }}</h2>
        <div class="card-description">
          <img class="card-image" :src="image" @error="handleImageError" v-lazyload />
          <div class="card-details">
            <div class="card-detail">
              <p class="detail-title">Ratings IMDB:</p>
              <p>{{ selectedMovie.imdbRating }}{{ ` (${selectedMovie.ratings?.length})` }}</p>
            </div>
            <div class="card-detail">
              <p class="detail-title">Release Date:</p>
              <p>{{ selectedMovie.releaseDate }}</p>
            </div>
            <div class="card-detail">
              <p class="detail-title">Actors:</p>
              <p>{{ selectedMovie.actors?.join(' , ') }}</p>
            </div>
            <div class="card-detail">
              <p class="detail-title">Genres:</p>
              <p>{{ selectedMovie.genres?.join(' , ') }}</p>
            </div>
            <div class="card-detail">
              <p class="detail-title">Duration:</p>
              <p>{{ `${selectedMovie.duration?.replace(/[^0-9]/g, '')} mm ` }}</p>
            </div>
          </div>
        </div>
        <div>
          <p class="detail-title">Storyline:</p>
          <p>{{ selectedMovie.storyline }}</p>
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </base-layout>
</template>

<style scoped lang="scss">
@import './../styles/const';
.card-wrapper {
  padding: 40px;
  text-transform: none;

  .card-description {
    display: flex;
  }
  .card-details {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-left: 40px;
  }

  .card-detail {
    display: flex;
  }

  .detail-title {
    min-width: 200px;
    color: $primary;
    font-weight: 600;
  }
}
</style>
