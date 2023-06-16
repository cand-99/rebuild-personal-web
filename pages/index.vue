<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <div>
    <div>
      <LanguageSwitcher />
    </div>
    {{
      t('pages.project.visit')
    }}
  </div>
</template>
