<script setup lang="ts">
  const route = useRoute();
  onMounted(() => {
    if ((route.query as any).type === "analytics") navigateTo("/");
  });

  const eventOptions = [
    {
      label: "Hackathon & Coding Competitions",
      value: "hack",
    },
    {
      label: "Webinars & Workshops",
      value: "webinars",
    },
    {
      label: "Quizzes",
      value: "quiz",
    },
    { label: "Cultural Events", value: "culturals" },
  ];
  const eventType = ref(
    route.query.type
      ? eventOptions.find((val) => val.value === route.query.type)!
      : { label: "Select Type", value: "" }
  );

  const modeOptions = [
    { label: "Online", value: "On" },
    { label: "Offline", value: "Off" },
  ];
  const modeType = ref(modeOptions[0]);

  const formData = reactive({
    event: "",
    org: "",
    web: "",
  });

  const themes = ref([]);
</script>

<template>
  <div class="mx-4 mt-4">
    <h2 class="text-4xl font-semibold">Basic Details</h2>
    <div class="space-y-4 mt-8">
      <BaseDropdown :options="eventOptions" v-model="eventType" />
      <BaseDropdown :options="modeOptions" v-model="modeType" />
      <FieldInput prompt="Event Title" v-model="formData.event" type="text" />
      <FieldInput prompt="Organisation" v-model="formData.org" type="text" />
      <FieldInput prompt="Website Url" v-model="formData.web" type="text" />
      <div>
        <label>THEMES</label>
        <TagInput v-model="themes" />
      </div>
      <TipTap />
    </div>
    <div class="w-1/2 mx-auto my-4">
      <BaseButton class="w-full">Next</BaseButton>
    </div>
  </div>
</template>
