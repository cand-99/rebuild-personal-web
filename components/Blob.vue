<script setup lang="ts"></script>

<template>
  <div class="blur-blob transition absolute -z-10 rounded-full opacity-70 dark:opacity-50 mix-blend-hard-light filter" />
</template>

<style scoped>
.blur-blob {
  transition-property: top, left, bottom, right;
  transition-duration: 1500ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

}
</style>
