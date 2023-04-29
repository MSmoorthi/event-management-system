<script setup lang="ts">
  interface BaseButtonProps {
    color?: "primary" | "secondary";
    size?: "normal" | "small";
    class?: string;
  }
  const props = defineProps<BaseButtonProps>();
  const emit = defineEmits<{ (e: "click"): void }>();
  const buttonClasses = useButtonStyles({
    color: props.color,
    size: props.size,
    class: props.class,
  });
</script>

<template>
  <button @click="$emit('click')" :class="buttonClasses">
    <slot>Click Me!!!</slot>
  </button>
</template>
