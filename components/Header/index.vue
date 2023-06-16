<script lang="ts" setup>
const route = useRoute()

const navBlobClass = computed(() => {
  switch (route.name) {
    case 'index':
      return 'bg-yellow-400 dark:bg-yellow-500 -left-6'
    case 'about':
      return 'bg-purple-400 dark:bg-purple-500  left-12  md:left-22'
    case 'project':
      return 'bg-blue-400 dark:bg-blue-500  left-28  md:left-42'
  }
})
</script>

<template>
  <div class="z-50 w-full flex justify-end items-center py-5 lg:py-6 sticky">
    <nav
      class="relative z-10 flex space-x-4 md:space-x-6 items-center text-sm md:text-base font-medium"
    >
      <NuxtLink to="/">
        {{ $t("pages.index.nav") }}
      </NuxtLink>
      <NuxtLink to="/about">
        {{ $t("pages.about.nav") }}
      </NuxtLink>
      <NuxtLink to="/project">
        {{ $t("pages.project.nav") }}
      </NuxtLink>
      <Blob :class="navBlobClass" class="w-7 h-7 -top-1 blur-xl" />
    </nav>
    <div
      class="flex items-center justify-center border-l border-gray-300 dark:border-gray-800 ml-3 pl-3 md:ml-6 md:pl-6 transition duration-200 space-x-4"
    >
      <HeaderLanguageSwitcher />
      <HeaderThemeSwitcher />
      <a
        href="https://github.com/cand-99"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <Icon name="bi:github" class="text-xl text-gray-600 dark:text-gray-400" />

      </a>
    </div>
  </div>
</template>

<style scoped></style>
