<script setup lang="ts">
import Button from './Button.vue';
import useSearchStore from '../store/search.ts';
const state = useSearchStore();
</script>

<template>
  <div class="search">
    <input v-model="state.searchString" class="input" />
    <Button size="extra-large" text="Search" />
  </div>
</template>

<style scoped lang="scss">
@import './../styles/const';
.search {
  max-width: 80%;
  display: flex;
  margin-bottom: 20px;

  .input {
    margin-right: 10px;
    background: rgba(28, 28, 28, 0.5);
    border: none;
    outline: none;
    color: $white;
    letter-spacing: 2px;
    font-size: 18px;
    width: 100%;
  }
}
</style>
