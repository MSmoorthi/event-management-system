import { tv, type VariantProps } from "tailwind-variants";

const buttonTv = tv({
  base: "rounded-md py-2  text-white",
  variants: {
    color: {
      primary: "bg-[#3551E4]",
      secondary: "bg-[#141414]",
    },
    size: {
      normal: "px-6",
      small: "px-4 text-sm",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "normal",
  },
});
type ButtonVariantTV = VariantProps<typeof buttonTv>;

interface ButtonVariant {
  color?: string;
  size?: string;
  class?: string;
}

export const useButtonStyles = (props?: ButtonVariant) => {
  return computed(() =>
    buttonTv({ color: props?.color, size: props?.size, class: props?.class })
  );
};
