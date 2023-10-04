<script setup lang="ts"></script>

<template>
  <div class="template">
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot name="main"></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.template {
  display: flex;
  flex-direction: column;
  align-items: normal;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
