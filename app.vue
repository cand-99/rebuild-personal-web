<script setup lang="ts">
import { LanguageManager } from './utils/lang'

LanguageManager()
const locale = useState<string>('locale.setting')
</script>

<template>
  <Html :lang="locale">
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>
