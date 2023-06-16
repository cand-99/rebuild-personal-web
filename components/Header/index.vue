<script lang="ts" setup>
const route = useRoute()

const navBlobClass = computed(() => {
  switch (route.name) {
    case 'index':
      return 'bg-[#CCCCCC] dark:bg-[#CCCCCC] -left-6'
    case 'about':
      return 'bg-[#00FFFF] dark:bg-[#00FFFF]  left-12  md:left-16'
    case 'project':
      return 'bg-[#FFD700] dark:bg-[#FFD700]  left-28  md:left-34'
  }
})
</script>

<template>
  <div class="z-50 w-full flex justify-end items-center py-5 lg:py-6 sticky">
    <nav
      class="relative z-10 flex space-x-4 md:space-x-6 items-center text-sm md:text-base font-semibold"
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
      <Blob :class="navBlobClass" class="w-7 h-7 -top-1 blur-lg opacity-80 dark:opacity-70" />
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
