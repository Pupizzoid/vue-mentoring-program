<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
</script>

<template>
  <base-layout>
    <template v-slot:header>
      <Header />
    </template>

    <template v-slot:main>
      <h1>Page not Found</h1>
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </base-layout>
</template>

<style scoped lang="scss">
h1 {
  text-align: center;
}
</style>
