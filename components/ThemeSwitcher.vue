<script lang="ts" setup>
import type { ITheme, IThemeSettingOptions } from '~/utils/theme'

const { t } = useLang()

const themeSetting = useState<IThemeSettingOptions>('theme.setting')
const themes = useState<ITheme>('theme.current')
</script>

<template>
  <div class="fixed top-16 w-72">
    {{ themeSetting }}
    <ClientOnly>
      <Listbox v-model="themeSetting" as="div" class="relative flex items-center">
        <div class="relative mt-1">
          <ListboxButton
            type="button"
            :title="t('components.language_switcher.change_language')"
          >
            <Icon :name="themes === 'dark' ? 'heroicons:moon' : 'heroicons:sun' " class="text-xl" />
          </ListboxButton>

          <ListboxOptions
            class="p-1 absolute z-40 top-8 right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:text-gray-300"
          >
            <ListboxOption
              v-for="theme in availableThemes"
              :key="theme.key"
              :value="theme.key"
              class="py-2 px-2 flex items-center cursor-pointer" :class="{
                'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
                  themeSetting === theme.key,
                'hover:bg-gray-50 dark:hover:bg-gray-700/30':
                  themeSetting !== theme.key,
              }"
            >
              <span class="text-lg stroke-2 mr-2 flex items-center">
                <Icon v-if="theme.key === 'light'" name="heroicons:sun" />
                <Icon v-else-if="theme.key === 'dark'" name="heroicons:moon" />
                <Icon v-else-if="theme.key === 'system'" name="heroicons:computer-desktop" />
                <Icon v-else-if="theme.key === 'realtime'" name="heroicons:clock" />
              </span>
              {{ theme.text }}
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </ClientOnly>
  </div>
</template>
