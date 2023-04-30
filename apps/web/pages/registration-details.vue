<script setup lang="ts">
  const participationOption = [
    { label: "Individual", value: "Ind" },
    { label: "Team", value: "Team" },
  ];
  const participationType = ref(participationOption[0]);
  const minTeam = ref(1);
  const maxTeam = ref(1);
</script>

<template>
  <div class="mx-4 mt-4">
    <h2 class="text-4xl max-w-lg font-semibold">Registration Details</h2>
    <div class="space-y-4 mt-8">
      <BaseDropdown
        :options="participationOption"
        v-model="participationType"
      />
      <div class="flex gap-2">
        <FieldInput
          v-if="participationType.value === 'Team'"
          prompt="Team Size"
          type="text"
          v-model="minTeam"
        /><FieldInput
          prompt=""
          v-if="participationType.value === 'Team'"
          type="text"
          v-model="maxTeam"
        />
      </div>
    </div>
  </div>
</template>
