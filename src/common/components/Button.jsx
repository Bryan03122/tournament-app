import { Button as FlowbiteButton } from "flowbite-react";

export function Button({ children, onClick, rightIcon, ...props }) {
  return (
    <FlowbiteButton onClick={onClick} {...props}>
      <div className="flex justify-center items-center gap-1">
        {children}
        {rightIcon && <div className="text-lg">{rightIcon}</div>}
      </div>
    </FlowbiteButton>
  );
}
