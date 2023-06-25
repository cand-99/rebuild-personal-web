<script lang="ts" setup>
const { t } = useLang()
</script>

<template>
  <section
    class="text-center max-w-4xl w-full mx-auto bg-white bg-opacity-40 dark:bg-opacity-0 dark:backdrop-blur-0 backdrop-blur-xl py-8 px-1 md:p-32 rounded-3xl z-10"
  >
    <h1 class="font-bold text-5xl md:text-7xl text-center tracking-tight">
      Candra
    </h1>
    <h1
      class="mt-4 text-xl md:text-2xl text-center text-gray-500 dark:text-gray-300"
    >
      Frontend Developer <br>
    </h1>
    <div>
      <div class="text-left mt-4">
        <h1 class="mb-3 text-gray-500 dark:text-gray-300 text-xl font-bold">
          {{ $t("pages.about.basic") }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm md:text-base">
          {{ $t("pages.about.summary") }}
        </p>
      </div>
      <div class="flex text-left mt-6 justify-between flex-col md:flex-row">
        <div class="w-full md:w-2/5">
          <h1 class="mb-3 text-gray-500 dark:text-gray-300 text-xl font-bold">
            {{ $t("pages.about.framework") }}
          </h1>
          <div
            class="flex flex-wrap text-gray-400 dark:text-gray-300 text-xl md:text-3xl gap-3"
          >
            <a
              href="https://nuxt.com/"
              class="hover:text-gray-600 dark:hover:text-gray-100"
              target="_blank"
              aria-label="nuxt 3"
              rel="noopener noreferrer"
            >
              <Icon name="simple-icons:nuxtdotjs" />
            </a>
            <a
              href="https://vuejs.org/guide/introduction.html"
              class="hover:text-gray-600 dark:hover:text-gray-100"
              target="_blank"
              aria-label="vuejs"
              rel="noopener noreferrer"
            >
              <Icon name="mdi:vuejs" />
            </a>
            <a
              href="https://tailwindcss.com/"
              class="hover:text-gray-600 dark:hover:text-gray-100"
              target="_blank"
              aria-label="tailwindcss"
              rel="noopener noreferrer"
            >
              <Icon name="mdi:tailwind" />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              class="hover:text-gray-600 dark:hover:text-gray-100"
              target="_blank"
              aria-label="typescript"
              rel="noopener noreferrer"
            >
              <Icon name="mdi:language-typescript" />
            </a>
          </div>
        </div>
        <div class="w-full md:w-2/5 mt-6 md:mt-0">
          <h1 class="mb-3 text-gray-500 dark:text-gray-300 text-xl font-bold">
            {{ $t("pages.about.contact") }}
          </h1>
          <ul class="text-gray-500 dark:text-gray-400 text-sm md:text-base">
            <li>Tasikmalaya, Jawabarat</li>
            <li>99cand@gmail.com</li>
            <li
              class="flex gap-4 mt-4 text-2xl md:text-3xl text-gray-400 dark:text-gray-300"
            >
              <a
                href="https://github.com/cand-99"
                class="hover:text-gray-600 dark:hover:text-gray-100"
                target="_blank"
                aria-label="github"
                rel="noopener noreferrer"
              >
                <Icon name="mdi:github" />
              </a>
              <a
                href="https://www.linkedin.com/in/candra-herdiana-9064b024a/"
                class="hover:text-gray-600 dark:hover:text-gray-100"
                target="_blank"
                aria-label="linkedin"
                rel="noopener noreferrer"
              >
                <Icon name="mdi:linkedin" />
              </a>
              <a
                href="https://www.instagram.com/candfpv"
                class="hover:text-gray-600 dark:hover:text-gray-100"
                target="_blank"
                aria-label="instagram"
                rel="noopener noreferrer"
              >
                <Icon name="mdi:instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Button
      :title="t('pages.project.nav')"
      icon="arrow-right"
      to="/project"
      class="mt-12"
    />
  </section>
</template>

<style scoped></style>
