<script setup lang="ts">
  const store = useAuthStore();
  const { isAuthenticated } = storeToRefs(store);
  const { auth } = useSupabaseAuthClient();

  const logout = async () => {
    const { error } = await auth.signOut();
    if (!error) {
      store.setAuth({ email: "", id: "" });
    }
  };
</script>

<template>
  <header class="flex gap-4 px-8 py-2">
    <h1 class="flex-grow text-2xl font-bold">EventSpark</h1>
    <BaseButton
      v-if="isAuthenticated"
      @click="logout"
      color="secondary"
      size="small"
    >
      Logout
    </BaseButton>
    <BaseButton
      v-else
      @click="navigateTo('/auth/sign-in')"
      color="secondary"
      size="small"
    >
      Sign In
    </BaseButton>
  </header>
  <slot />
</template>
