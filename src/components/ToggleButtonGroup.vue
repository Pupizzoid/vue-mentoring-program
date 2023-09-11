<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
  label: string;
  options: string[];
}>();

const { label, options } = props;
const picked = ref(options[0] as string);
const emit = defineEmits<{
  (e: 'input', value: string): void;
}>();

const clickHandler = () => {
  emit('input', picked.value);
};
</script>

<template>
  <div class="toggle-group">
    <p class="toggle-group-title">{{ label }}</p>
    <div class="toggle-wrapper">
      <label v-for="option in options" class="label" :for="option" :class="{ active: option === String(picked) }">
        {{ option }}
        <input type="radio" v-model="picked" :value="option" class="btn-check" :id="option" autocomplete="off" @change="clickHandler()" />
      </label>
    </div>
  </div>
</template>

<style>
.toggle-group {
  color: var(--bs-white);
  display: flex;
  align-items: center;

  .toggle-group-title {
    margin: 0 20px 0 0;
  }

  .toggle-wrapper {
    display: flex;
    border-radius: 5px;
    overflow: auto;
  }

  .label {
    display: block;
    padding: 8px 16px;
    background-color: var(--bs-secondary);
  }

  .active {
    background-color: var(--bs-primary);
  }
}
</style>
