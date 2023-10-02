<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useMoviesStore from '../store/movies.ts';
import { ref } from 'vue';

const { selectedMovie } = storeToRefs(useMoviesStore());
const { posterurl, title, actors, storyline, duration, genres, imdbRating, ratings, releaseDate } = selectedMovie.value;
const image = ref(posterurl);
const handleImageError = () => {
  image.value = '/src/assets/error-image.jpg';
};
const regex = /\d+/g;
</script>

<template>
  <div class="card-wrapper">
    <h2>{{ title }}</h2>
    <div class="card-description">
      <img class="card-image" :src="image" @error="handleImageError" v-lazyload />
      <div class="card-details">
        <div class="card-detail">
          <p class="detail-title">Ratings IMDB:</p>
          <p>{{ imdbRating }}{{ ` (${ratings.length})` }}</p>
        </div>
        <div class="card-detail">
          <p class="detail-title">Release Date:</p>
          <p>{{ releaseDate }}</p>
        </div>
        <div class="card-detail">
          <p class="detail-title">Actors:</p>
          <p>{{ actors.join(' , ') }}</p>
        </div>
        <div class="card-detail">
          <p class="detail-title">Genres:</p>
          <p>{{ genres.join(' , ') }}</p>
        </div>
        <div class="card-detail">
          <p class="detail-title">Duration:</p>
          <p>{{ `${duration.replace(/[^0-9]/g, '')} mm ` }}</p>
        </div>
      </div>
    </div>
    <div>
      <p class="detail-title">Storyline:</p>
      <p>{{ storyline }}</p>
    </div>
  </div>
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
