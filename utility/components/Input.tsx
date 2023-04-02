import { FC, HTMLProps, TextareaHTMLAttributes } from "react";

export const Input: FC<HTMLProps<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      className={` flex-1 h-[50px] p-[15px] border-[2px] border-transparent outline-none focus:border-[#000] focus:border-[2px] focus:border-solid transition-all ${className}`}
      {...props}
    />
  );
};

export const TextArea: FC<HTMLProps<HTMLTextAreaElement>> = ({
  className,
  ...props
}) => {
  return (
    <textarea
      className={` flex-1 p-[15px] border-[2px] border-transparent outline-none focus:border-[#000] focus:border-[2px] focus:border-solid transition-all ${className}`}
      {...props}
    />
  );
};
