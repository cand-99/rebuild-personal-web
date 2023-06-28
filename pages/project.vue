<script lang="ts" setup>
const { data } = useFetch('https://cms-personal-web.vercel.app/api/projects')
</script>

<template>
  <div>
    Page: foo
    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<style scoped></style>
