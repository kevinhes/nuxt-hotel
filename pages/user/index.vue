<script setup>
const router = useRouter()
const route = useRoute()
// console.log(route.params);
const layout = 'user-layout'
router.push(`/user/a/profile`)
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<style scoped></style>