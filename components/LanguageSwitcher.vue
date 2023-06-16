<script lang="ts" setup>
const localeSetting = useState<string>('locale.setting')
const { t } = useLang()
</script>

<template>
  <div class="fixed top-16 w-72">
    <ClientOnly>
      <Listbox v-model="localeSetting" as="div" class="relative flex items-center">
        <div class="relative mt-1">
          <ListboxButton
            type="button"
            :title="t('components.language_switcher.change_language')"
          >
            <Icon name="heroicons:language-solid" class="text-xl" />
          </ListboxButton>

          <ListboxOptions
            class="p-1 absolute z-50 top-8 right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
          >
            <ListboxOption
              v-for="lang in availableLocales"
              :key="lang.iso"
              :value="lang.iso"
              class="py-2 px-2 flex items-center cursor-pointer" :class="{
                'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
                  localeSetting === lang.iso,
                'hover:bg-gray-50 dark:hover:bg-gray-700/30':
                  localeSetting !== lang.iso,
              }"
            >
              <span class="text-sm mr-2">
                {{ lang.flag }}
              </span>
              <span class="flex-1 truncate">
                {{ lang.name }}
                <span class="text-xs">({{ lang.iso }})</span>
              </span>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </ClientOnly>
  </div>
</template>
