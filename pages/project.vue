<script lang="ts" setup>
interface IMediaFiles {
  id?: string
  url: string
  providerPublicId: string
  projectsId?: string
  format: string
}
interface ITechnology {
  id?: string
  icon: string
  name: string
  projectsIDs?: string[] | undefined
}

interface IProject {
  id?: string
  name: string
  description?: string | undefined
  description_id: string
  description_en: string
  description_ja: string
  description_ko: string
  dateStart: string
  dateEnd: string
  url: string
  isActive: boolean
  category: 'Personal' | 'Team'
  technologyIDs?: string[] | undefined
  technology?: ITechnology[]
  mediaFiles?: IMediaFiles | null
}
const locale = useState<string>('locale.setting')
const projects = ref<IProject[]>([])
const isLoading = ref(false)

async function getProject() {
  try {
    isLoading.value = true
    projects.value = await $fetch(`https://cms-personal-web.vercel.app/api/activeProjects?lang=${locale.value}`)
  }
  catch (error) {
    console.error(error)
  }
  finally {
    isLoading.value = false
  }
}

watchEffect(async () => {
  await getProject()
})

const { t } = useLang()
</script>

<template>
  <div class="z-10 ">
    <div v-if="!isLoading" class="space-y-8">
      <div
        v-for="(project, index) in projects" :key="index"
        class="max-w-5xl bg-white bg-opacity-50 dark:bg-opacity-0 dark:backdrop-blur-0 backdrop-blur-xl mx-auto p-4 md:p-7 rounded-3xl flex flex-col md:flex-row"
      >
        <figure class="max-w-xl max-h-80 h-full w-full md:w-8/12 rounded-2xl overflow-hidden my-auto">
          <div>
            <NuxtImg
              class="rounded-2xl" preload quality="80" sizes="sm:100vw md:50vw" format="webp" provider="cloudinary"
              :src="`${project.mediaFiles?.providerPublicId}.${project.mediaFiles?.format}`" alt="name"
            />
          </div>
        </figure>
        <div class="w-full md:w-4/12 mt-4 md:mt-0 ml-0 md:ml-8 flex flex-col justify-center">
          <h1 class="text-2xl md:text-3xl font-bold mb-3">
            {{ project.name }}
          </h1>
          <p class="text-sm">
            {{ project.description }}
          </p>
          <div class="my-3">
            <div class="flex justify-between">
              <h1 class="font-bold mb-1">
                Technology
              </h1>
              <h1 class="text-xs">
                {{ project.dateStart }} - {{ project.dateEnd }}
              </h1>
            </div>
            <div class="flex space-x-2 pb-1 text-2xl text-gray-600 dark:text-gray-300">
              <div
                v-for="technology in project.technology" :key="technology.id"
                class="relative flex flex-col items-center group"
              >
                <Icon :name="technology.icon" />
              </div>
            </div>
          </div>
          <Button
            :title="t('pages.project.visit')" :href="project.url" icon="external-link"
            class="whitespace-nowrap w-min"
          />
        </div>
      </div>
    </div>
    <div v-else class="space-y-8">
      <Skeleton v-for="(x, index) in 4" :key="index" />
    </div>
  </div>
</template>

<style scoped></style>
