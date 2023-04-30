<script setup lang="ts">
  interface EventCardProps {
    title?: string;
    organization?: string;
    type?: string;
    themes?: string[];
    startDate?: string[];
    mode?: "online" | "offline";
  }

  const props = defineProps<EventCardProps>();
  const subtitle = computed(() => `${props.type} by ${props.organization}`);
</script>

<template>
  <div
    class="border-2 rounded-lg pt-2 space-y-4 overflow-hidden relative after:content-[''] after:absolute after:inset-x-0 after:h-2 after:top-0 after:bg-red-100"
  >
    <div class="p-4">
      <h4 class="text-3xl font-semibold">{{ title }}</h4>
      <p class="text-xm font-thin text-gray-500">{{ subtitle }}</p>
    </div>
    <div class="bg-[#F5F5F5] px-4 py-2">
      <p class="font-semibold mb-2">Themes</p>
      <div class="flex flex-wrap gap-2">
        <p
          class="border-2 rounded-3xl text-sm w-fit px-2 py-1 inline-block"
          v-for="theme in props.themes"
          :key="theme"
        >
          {{ theme }}
        </p>
      </div>
    </div>
    <div class="px-4 flex gap-2">
      <p class="px-4 py-2 bg-[#F4F4F4] inline-block rounded-md">{{ mode }}</p>
      <p class="px-4 py-2 bg-[#F4F4F4] inline-block rounded-md">
        {{ startDate }}
      </p>
    </div>
    <div class="flex items-center justify-center">
      <BaseButton class="w-[90%] mb-4">Apply</BaseButton>
    </div>
  </div>
</template>
