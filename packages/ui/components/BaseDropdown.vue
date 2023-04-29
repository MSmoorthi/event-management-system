<script setup lang="ts">
  export interface RadioOption {
    id?: number | string;
    label: string;
    value: string | number;
  }
  export interface RadioProps {
    options: RadioOption[];
    modelValue: RadioOption | undefined;
  }
  interface RadioEmits {
    (e: "update:modelValue", payload: RadioOption): void;
  }

  const props = defineProps<RadioProps>();
  const emit = defineEmits<RadioEmits>();
</script>

<template>
  <Listbox
    :modelValue="props.modelValue"
    @update:modelValue="(value:RadioOption) => emit('update:modelValue', value)"
  >
    <div class="relative">
      <ListboxButton
        class="relative border-2 border-[#D6D6D6] text-[#5C5C5C] flex items-center justify-between w-full cursor-pointer rounded-lg bg-white py-2 px-3 text-left focus:outline-none sm:text-sm"
      >
        <span class="block truncate">{{ modelValue?.label }}</span>
        <iconify-icon icon="tabler:chevron-down"
      /></ListboxButton>

      <transition name="fade">
        <ListboxOptions
          class="absolute mt-1 border-[#D6D6D6] max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none border-2 sm:text-sm"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="option.value"
            :value="option"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-[#E4E8FF] text-[#08176c]' : 'text-gray-900',
                'relative cursor-default select-none py-2 mx-2 px-4 rounded-md',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ option.label }}</span
              >
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<style scoped>
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.1s ease-in-out;
  }
</style>
