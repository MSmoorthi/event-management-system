<script setup lang="ts">
  const data = ref("");
</script>
<template>
  <Story>
    <FieldInput type="text" placeholder="" prompt="Data" v-model="data" />
    <p>{{ data }}</p>
  </Story>
</template>
