<script setup>
const route = useRoute()
</script>
<template>
  <div>
    page: booking {{ route.params.roomid }}
  </div>
</template>
<style scoped></style>