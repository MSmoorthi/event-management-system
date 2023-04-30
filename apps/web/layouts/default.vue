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
  <header class="flex gap-4 justify-between px-4 py-2">
    <h1 class="flex-grow text-2xl font-bold max-w-fit">EventSpark</h1>
    <nav class="flex gap-1 mx-auto flex-wrap items-center justify-center w-fit">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/events/">Events</NuxtLink>
      <NuxtLink v-if="isAuthenticated" to="/organise-events/"
        >Organize</NuxtLink
      >
    </nav>
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
