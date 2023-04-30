<script setup lang="ts">
  const searchQuery = ref("");
</script>

<template>
  <div class="mx-4 space-y-4 mt-4 mb-12">
    <SearchInput v-model="searchQuery" />
    <div class="mx-4">
      <p class="text-4xl font-bold mx-auto w-fit">
        Create Unforgettable Events
        <span class="font-normal">with</span> Confidence
        <span class="font-normal"> and</span>
        Ease.
      </p>
    </div>
    <img src="~/assets/images/demo.png" class="block mx-auto" />
    <section>
      <header class="text-4xl font-bold mx-auto">Best experience</header>
      <p>
        Innovative minds to solve real-world problems in a limited time frame.
        Participants worked tirelessly, collaborating with each other and
        pushing their limits to create solutions that impressed judges and
        fellow participants alike.
      </p>
    </section>
    <header class="text-4xl font-bold mx-auto">Explore event</header>
    <div
      class="grid grid-cols-2 max-w-xl mx-auto justify-center align-middle gap-4"
    >
      <img src="assets/images/student.png" class="w-full" />
      <img src="assets/images/workers.png" class="w-full" />
    </div>

    <div
      class="flex gap-4 items-center justify-between px-4 bg-[#CFE7F0] py-4 rounded-lg"
    >
      <p>Your Registrations</p>
      <Icon name="tabler:chevron-down" class="w-6 h-6 -rotate-90" />
    </div>
    <div class="max-w-xl mx-auto">
      <EventCard
        title="Hackathon 2.0"
        type="Hackathon"
        organization="iNeuron"
        :themes="['Web Development', 'Data Science']"
        mode="offline"
        start-date="29-04-2023"
      />
    </div>
  </div>
</template>
