<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>
<script setup lang="ts">
  interface FieldInputProps {
    modelValue: string;
    prompt: string;
  }
  const id = getCurrentInstance()?.uid.toString()!;

  const props = defineProps<FieldInputProps>();
  const emit = defineEmits<{
    (e: "update:modelValue", payload: string): void;
  }>();
</script>

<template>
  <div class="space-y-0">
    <label class="block uppercase" :for="id">{{ prompt }}</label>
    <input
      :id="id"
      class="block w-full focus:border-[#d6d6d6] placeholder-shown:bg-[white] focus:outline-none bg-[#F5F5F5] border-2 placeholder:text-[#5C5C5C] rounded-lg border-[#D6D6D6] focus:ring-0"
      v-bind="$attrs"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
