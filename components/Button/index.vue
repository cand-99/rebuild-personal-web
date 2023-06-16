<script lang="ts" setup>
interface IButtonProps {
  title: string
  to?: string
  icon?: string
  href?: string
}

const props = defineProps<IButtonProps>()
</script>

<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center bg-gray-900 dark:bg-black py-3 px-6 text-white rounded-xl text-lg md:text-xl font-medium"
  >{{ props.title }}</a>

  <NuxtLink
    v-else
    :to="to"
    class="inline-flex items-center bg-gray-900 dark:bg-black py-3 px-6 text-white rounded-xl text-lg md:text-xl font-medium"
  >
    {{ title }}
  </NuxtLink>
</template>

<style scoped>
.nuxt-icon {
  @apply mb-0;
}
</style>
