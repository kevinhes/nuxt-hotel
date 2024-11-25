<script setup>
const route = useRoute()
const userId = route.params.userId
</script>
<template>
  <div>
    page: {{ userId }}
  </div>
</template>
<style scoped></style>