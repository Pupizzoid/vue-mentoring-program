<script setup lang="ts">
import { ButtonSize } from '../types/ButtonSize.ts';

defineProps<{
  size: ButtonSize;
  text: string;
}>();
</script>

<template>
  <button :class="size" @click="$emit('searchData')">{{ text }}</button>
</template>

<style scoped lang="scss">
@import './../styles/const';
button {
  background: $primary;
  color: $white;
  padding: 10px 10px;
  font-size: 18px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
}
.small {
  padding: 10px 15px;
}

.medium {
  padding: 15px 25px;
}

.large {
  padding: 15px 40px;
}

.extra-large {
  padding: 15px 60px;
}
</style>
