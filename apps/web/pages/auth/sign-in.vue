<script setup lang="ts">
  definePageMeta({
    layout: "auth",
  });
  const formData = reactive({ email: "", password: "" });

  const handleSignIn = async () => {
    const { auth } = useSupabaseAuthClient();
    const { data, error } = await auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (!error) {
      const { setAuth } = useAuthStore();
      setAuth({ email: data.user?.email!, id: data.user?.id });
      navigateTo("/");
    }
  };
</script>

<template>
  <div class="max-w-md mx-auto space-y-4">
    <FieldInput type="email" v-model="formData.email" prompt="Email" />
    <FieldInput type="password" v-model="formData.password" prompt="Password" />
    <div class="w-1/2 mx-auto">
      <BaseButton @click="handleSignIn" class="w-full">Sign In</BaseButton>
    </div>
  </div>
</template>
