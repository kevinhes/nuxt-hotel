<script setup>
const router = useRouter()
const route = useRoute()
// console.log(route.params);

router.push(`/user/a/profile`)
</script>
<template>
  <NuxtPage></NuxtPage>
</template>
<style scoped></style>