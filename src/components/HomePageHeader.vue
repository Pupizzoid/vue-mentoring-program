<script setup lang="ts">
import PageHeader from './Header.vue';
import Search from './Search.vue';
import ToggleButtonGroup from './ToggleButtonGroup.vue';

const optionsData = ['title', 'genre'];
const emit = defineEmits<{
  (e: 'search', value: string): void;
}>();

const searchHandler = (value: string) => {
  emit('search', value);
};
</script>

<template>
  <div class="header-wrapper">
    <PageHeader />
    <div class="search-wrapper">
      <h1 class="header">Find your movie</h1>
      <Search @search-data="searchHandler($event)" />
      <ToggleButtonGroup :options="optionsData" label="search by" @input="searchHandler($event)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './../styles/const';
.header-wrapper {
  min-height: 400px;
  background-image: url('../assets/movie-collage.webp');
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0;
  padding: 0;

  .header {
    text-transform: uppercase;
    font-size: 40px;
    letter-spacing: 3px;
    color: $white;
    font-weight: 200;
    margin-bottom: 20px;
  }

  .search-wrapper {
    margin: 20px 80px;
  }
}
</style>
