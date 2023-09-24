<script setup lang="ts">
import ToggleButtonGroup from './ToggleButtonGroup.vue';
defineProps<{
  label: string;
  count: number;
}>();

const optionsData = ['release date', 'rating'];

const emit = defineEmits<{
  (e: 'sort', value: string): void;
}>();

const sortHandler = (value: string) => {
  emit('sort', value);
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
