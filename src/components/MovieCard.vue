<script setup lang="ts">
import { Movie } from '../interfaces/Movie.ts';

const props = defineProps<{
  cardData: Movie;
}>();

const { title, genre, image, id, releaseDate } = props.cardData;

const emit = defineEmits<{
  (e: 'cardClick', id: number): void;
}>();

const clickHandler = () => {
  emit('cardClick', id);
};
</script>

<template>
  <div class="card-wrapper" @click="clickHandler()">
    <img class="card-image" src="../assets/poster.webp" />
    <div class="info-wrapper">
      <span class="card-info title">{{ title }}</span>
      <span class="card-info release">{{ releaseDate }}</span>
    </div>
    <div>{{ genre }}</div>
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  color: var(--bs-white);
  text-transform: none;

  .card-image {
    max-width: 100%;
    display: block;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .card-info {
    display: inline-block;
  }

  .release {
    padding: 2px 10px;
    border: 1px solid var(--bs-white);
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
