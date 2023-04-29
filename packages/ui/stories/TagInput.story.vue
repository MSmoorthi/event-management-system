<script setup lang="ts">
  import { logEvent } from "histoire/client";
  const tags = ref<string[]>([]);
</script>
<template>
  <Story>
    <TagInput
      @update:model-value="logEvent('update:modelValue', $event)"
      v-model="tags"
    />
    <pre>{{ JSON.stringify(tags) }}</pre>
  </Story>
</template>
