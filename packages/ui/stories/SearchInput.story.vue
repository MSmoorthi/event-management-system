<script setup lang="ts">
  const data = ref("");
</script>
<template>
  <Story>
    <SearchInput v-model="data" />
    <p>{{ data }}</p>
  </Story>
</template>
