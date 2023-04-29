<script setup lang="ts">
  const props = defineProps<{ modelValue: string }>();
  const emit = defineEmits<{
    (e: "update:modelValue", payload: string): void;
  }>();
</script>

<template>
  <div
    class="border-2 rounded-2xl p-2 items-center justify-center border-[#D6D6D6] flex gap-2 overflow-hidden focus-within:border-[#2d2d2d]"
  >
    <input
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      type="text"
      class="focus:ring-0 p-0 border-0 w-full"
    />
    <iconify-icon
      icon="ph:magnifying-glass"
      class="text-[#5C5C5C]"
      width="24px"
    />
  </div>
</template>
