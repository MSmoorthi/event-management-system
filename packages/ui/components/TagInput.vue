<script setup lang="ts">
  const { tags, addTag, removeTag } = useTagInput();

  const props = defineProps<{ modelValue: string[] }>();
  const emit = defineEmits<{
    (e: "update:modelValue", payload: string[]): void;
  }>();

  watch(tags, () => emit("update:modelValue", tags.value), { immediate: true });
</script>

<template>
  <div class="space-x-1 space-y-1">
    <div
      v-for="(tag, index) in tags"
      :key="index"
      class="inline-flex gap-2 border-2 border-gray-400 w-fit px-4 py-1 rounded-full"
    >
      <p>{{ tag }}</p>
      <span class="cursor-pointer" @click="removeTag">x</span>
    </div>
    <input
      class="border-0 focus:ring-0 focus:outline-none focus:border-0"
      type="text"
      placeholder="Enter a tag"
      @keydown="addTag"
    />
  </div>
</template>
