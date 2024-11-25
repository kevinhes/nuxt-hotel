<script setup>
const route = useRoute()
</script>
<template>
  <div>
    page: roomid {{ route.params.roomid }}
  </div>
</template>
<style scoped></style>