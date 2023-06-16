<script setup lang="ts">
import { LanguageManager } from './utils/lang'
import type { ITheme } from './utils/theme'
import { ThemeManager } from './utils/theme'

ThemeManager()
LanguageManager()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
</script>

<template>
  <Html :lang="locale" :class="`${theme === 'dark' ? 'dark' : 'bg-white'}`">
    <VitePwaManifest />
    <div
      class="bg-white dark:bg-black transition duration-300 text-gray-900 dark:text-gray-200 antialiased font-sans"
    >
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <BlobGroup />
    </div>
  </Html>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
