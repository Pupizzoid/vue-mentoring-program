<script setup lang="ts">
import router from '@/router';

const navigateHandler = () => {
  router.push('/');
};
</script>

<template>
  <p class="logo" @click="navigateHandler()"><b>netflix</b>roulette</p>
</template>

<style scoped lang="scss">
@import './../styles/const';
.logo {
  color: $primary;
  font-size: 24px;
  padding: 20px 40px;
  margin: 0;
  text-transform: lowercase;
  cursor: pointer;
}
</style>
