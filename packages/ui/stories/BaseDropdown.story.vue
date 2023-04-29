<script setup lang="ts">
  import type { RadioOption } from "@/components/BaseDropdown.vue";

  const options: RadioOption[] = [
    { label: "One", value: 1 },
    { label: "Two", value: 2 },
    { label: "Three", value: 3 },
  ];

  const data = ref<null | RadioOption>({ label: "Select Option", value: 0 });
</script>
<template>
  <Story>
    <BaseDropdown :options="options" v-model="data" />

    <pre>{{ data ? JSON.stringify(data, null, 4) : "data is null" }}</pre>
  </Story>
</template>
