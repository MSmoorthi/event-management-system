export const useTagInput = () => {
  const tags = ref<string[]>([]);

  const addTag = (evt: KeyboardEvent) => {
    const target = evt.target as HTMLInputElement;
    if (evt.code === "Comma" || evt.code === "Enter") {
      evt.preventDefault();
      let val = target.value.trim();
      if (val.length > 0) {
        tags.value.push(val);
        target.value = "";
      }
    }
  };

  const removeTag = (index: number) => {
    tags.value.splice(index, 1);
  };

  return { tags, addTag, removeTag };
};
