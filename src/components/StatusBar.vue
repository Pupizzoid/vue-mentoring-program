<script setup lang="ts">
import ToggleButtonGroup from './ToggleButtonGroup.vue';
import useSortStore from '../store/sort.ts';
import { ToggleGroupMap } from '../utils/ToggleGroupMap.ts';
import useMoviesStore from '@/store/movies.ts';
defineProps<{
  label: string;
  count: number;
}>();

const optionsData = ['release date', 'rating'];

const state = useSortStore();
const { getMovies } = useMoviesStore();

const sortHandler = (value: string) => {
  state.sortBy = ToggleGroupMap.get(value) as string;
  getMovies();
};
</script>

<template>
  <div class="status-bar">
    <span
      ><b>{{ count }} {{ label }}</b></span
    >
    <ToggleButtonGroup :options="optionsData" label="sort by" @input="sortHandler($event)" />
  </div>
</template>

<style scoped lang="scss">
@import './../styles/const';
.status-bar {
  padding: 15px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $secondary;
}
</style>
