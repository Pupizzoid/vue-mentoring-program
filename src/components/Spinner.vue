<script setup lang="ts"></script>

<template>
  <div class="spinner"></div>
</template>

<style scoped lang="scss">
@import './../styles/const';
.spinner {
  border: 16px solid $secondary;
  border-top: 16px solid $primary;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 15px auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
