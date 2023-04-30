<script setup lang="ts">
  const opportunities = [
    {
      title: "Hackathon & Coding Competitions",
      icon: "heroicons:code-bracket-20-solid",
      link: "hack",
      color: "#F2EAFF",
    },
    {
      title: "Webinars & Workshops",
      icon: "fluent:people-audience-24-regular",
      link: "webinars",
      color: "#F4FFC9",
    },
    {
      title: "Quizzes",
      icon: "mdi:comment-question-outline",
      link: "quiz",
      color: "#E6FAFF",
    },
    {
      title: "Cultural Events",
      icon: "ph:confetti",
      link: "culturals",
      color: "#FEDBBA",
    },
    {
      title: "View Analytics",
      icon: "carbon:analytics",
      link: "analytics",
      color: "#FFD17185",
    },
  ];
</script>

<template>
  <div class="mx-4">
    <div class="">
      <h2 class="text-4xl font-bold">Host an Event</h2>
      <p class="text-sm text-gray-500">Choose your opportunity category</p>
    </div>
    <div class="grid mt-6 grid-cols-1 md:grid-cols-2 gap-4">
      <div
        :key="index"
        @click="
          navigateTo({
            path: '/create-event',
            query: { type: opportunity.link },
          })
        "
        v-for="(opportunity, index) in opportunities"
        class="border-2 border-black p-4 rounded-lg"
        :style="{ backgroundColor: opportunity.color }"
      >
        <h3 class="text-2xl font-semibold">{{ opportunity.title }}</h3>
      </div>
    </div>
  </div>
</template>
