import { StorageSerializers } from "@vueuse/core";

interface Auth {
  id: null | undefined | string;
  email: null | undefined | string;
  // username: null | undefined | string;
}

export const useAuthStore = definePiniaStore("auth", () => {
  const auth = useLocalStorage<Auth>(
    "auth",
    { id: null, email: null },
    { serializer: StorageSerializers.object }
  );
  const isAuthenticated = computed(() => (auth.value.id ? true : false));
  const setAuth = (_auth: Auth) => {
    auth.value = _auth;
  };

  return { auth, setAuth, isAuthenticated };
});
