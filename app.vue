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
      class="bg-white dark:bg-dark-900 transition duration-300 text-gray-900 dark:text-gray-200 antialiased"
    >
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <BlobGroup />
    </div>
  </Html>
</template>
