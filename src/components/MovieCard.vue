<script setup lang="ts">
import { Movie } from '../interfaces/Movie.ts';
import { ref } from 'vue';

const props = defineProps<{
  cardData: Movie;
}>();

const { title, genres, posterurl, id, year } = props.cardData;
const genresValue = genres.join(' & ');
const image = ref(posterurl);

const emit = defineEmits<{
  (e: 'cardClick', id: number): void;
}>();
const handleImageError = () => {
  image.value = '/src/assets/error-image.jpg';
};

const clickHandler = () => {
  emit('cardClick', id);
};
</script>

<template>
  <div class="card-wrapper" @click="clickHandler()">
    <img class="card-image" :src="image" @error="handleImageError" v-lazyload />
    <div class="info-wrapper">
      <span class="card-info title">{{ title }}</span>
      <span class="card-info release">{{ year }}</span>
    </div>
    <div>{{ genresValue }}</div>
  </div>
</template>

<style scoped lang="scss">
@import './../styles/const';
.card-wrapper {
  text-transform: none;
  height: 100%;
  width: 350px;

  .card-image {
    max-width: 100%;
    display: block;
    width: 100%;
    height: 450px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .card-info {
    display: inline-block;
  }

  .release {
    padding: 2px 10px;
    border: 1px solid $white;
    border-radius: 5px;
  }

  .info-wrapper {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-weight: 600;
  }
}
</style>
