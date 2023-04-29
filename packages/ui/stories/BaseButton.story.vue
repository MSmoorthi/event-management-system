<script setup lang="ts">
  import BaseButton from "../components/BaseButton.vue";
  import { logEvent } from "histoire/client";
</script>
<template>
  <Story>
    <BaseButton
      color="secondary"
      @click="logEvent('click', $event)"
    ></BaseButton>
  </Story>
</template>
