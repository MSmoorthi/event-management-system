<script setup lang="ts">
  definePageMeta({
    layout: "auth",
  });
  const formData = reactive({ email: "", password: "", confirmPassword: "" });

  const handleSignUp = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("ssdf");
    }

    const { auth } = useSupabaseAuthClient();
    // const { confirmPassword, ...creds } = formData;
    const { data, error } = await auth.signUp({
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
    <FieldInput
      type="password"
      v-model="formData.confirmPassword"
      prompt="Confirm Password"
    />
    <div class="w-1/2 mx-auto">
      <BaseButton @click="handleSignUp" class="w-full">Sign Up</BaseButton>
    </div>
    <p class="text-center">
      Existing User?
      <NuxtLink class="text-blue-800 underline" to="/auth/sign-in">
        Sign In</NuxtLink
      >
    </p>
  </div>
</template>
