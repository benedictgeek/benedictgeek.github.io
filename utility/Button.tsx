import { HTMLProps, ReactNode } from "react";

interface ButtonProps extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
}
export const Button: React.FC<ButtonProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <a
      href={href}
      className={`
      border border-solid border-transparent py-[0.5rem] px-[0.75rem] text-[1rem] leading-5 rounded inline-block font-normal text-center whitespace-nowrap align-middle select-none transition-all duration-150 ease-in-out ${className}`}
    >
      {children}
    </a>
  );
};
