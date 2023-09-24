<script setup lang="ts">
const searchValue = '';
const emit = defineEmits<{
  (e: 'searchData', value: string): void;
}>();

const searchHandler = () => {
  emit('searchData', searchValue);
};
</script>

<template>
  <div class="search">
    <b-form-input v-model="searchValue" class="input" @keyup.enter="searchHandler()"></b-form-input>
    <b-button variant="primary" size="lg" @click="$emit('searchData')">Search</b-button>
  </div>
</template>

<style lang="scss">
.search {
  max-width: 80%;
  display: flex;
  margin-bottom: 20px;

  .input {
    margin-right: 10px;
  }
}
</style>
