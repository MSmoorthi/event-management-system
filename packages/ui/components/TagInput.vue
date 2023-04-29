<script setup lang="ts">
  const { tags, addTag, removeTag } = useTagInput();

  const props = defineProps<{ modelValue: string[] }>();
  const emit = defineEmits<{
    (e: "update:modelValue", payload: string[]): void;
  }>();

  watch(tags, () => emit("update:modelValue", tags.value), { immediate: true });
</script>

<template>
  <div>
    <div v-for="(tag, index) in tags" :key="index">
      <p>{{ tag }}</p>
      <span @click="removeTag">x</span>
    </div>
    <input type="text" placeholder="Enter a tag" @keydown="addTag" />
  </div>
</template>
