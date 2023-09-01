import { Button as FlowbiteButton } from "flowbite-react";

export function Button({ children, onClick, rightIcon, ...props }) {
  return (
    <FlowbiteButton onClick={onClick} {...props}>
      <div className="flex items-center gap-1">
        {children}
        <div className="text-lg">{rightIcon}</div>
      </div>
    </FlowbiteButton>
  );
}
