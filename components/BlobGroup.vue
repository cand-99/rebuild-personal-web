<script lang="ts" setup>
import { store } from '../stores'
import { useGradientColors } from '~/composables/useGradientColors'

const route = useRoute()
const { colorState, colorState2, colorState3 } = useGradientColors()
const blob1Class = computed(() => {
  if (store.loading)
    return 'left-1/4 top-1/3'
  switch (route.name) {
    case 'index':
      return 'top-1/4 left-2/8 '
    case 'about':
      return 'top-1/9 left-2/8'
    case 'project':
      return 'top-3/12 left-7/12'
    default:
      return 'top-1/2 left-2/3'
  }
})
</script>

<template>
  <div
    class="fixed top-0 transform left-1/2 -translate-x-1/2 max-w-screen-lg w-full h-full z-0"
  >
    <div :class="blob1Class" class="absolute duration-700 bg-red top-1/2">
      <div class="transition-colors duration-1500 blur-[150px] opacity-70 dark:opacity-30 absolute -z-10 rounded-full inset-0 mix-blend-hard-light filter h-120 w-120" :class="`bg-${colorState.currentColor}` " />
      <div class="transition-colors duration-1500 blur-[90px] top-5 left-10 opacity-80 dark:opacity-40 absolute -z-10 rounded-full mix-blend-hard-light filter h-70 w-70" :class="`bg-${colorState2.currentColor}`" />
      <div class="transition-colors duration-1500 blur-[90px] top-45 left-40 opacity-80 dark:opacity-40 absolute -z-10 rounded-full mix-blend-hard-light filter h-70 w-70" :class="`bg-${colorState3.currentColor} `" />
    </div>

    <div class="bg-rose bg-pink bg-fuchsia bg-purple bg-violet bg-indigo bg-blue bg-sky bg-cyan bg-teal bg-emerald bg-green bg-lime bg-yellow bg-orange  bg-red bg-stone bg-neutral bg-zinc bg-gray bg-slate" />
    <div class="outline-rose outline-pink outline-fuchsia outline-purple outline-violet outline-indigo outline-blue outline-sky outline-cyan outline-teal outline-emerald outline-green outline-lime outline-yellow outline-orange  outline-red outline-stone outline-neutral outline-zinc outline-gray outline-slate" />
    <div class="text-rose text-pink text-fuchsia text-purple text-violet text-indigo text-blue text-sky text-cyan text-teal text-emerald text-green text-lime text-yellow text-orange  text-red text-stone text-neutral text-zinc text-gray text-slate" />
  </div>
</template>

<style scoped></style>
