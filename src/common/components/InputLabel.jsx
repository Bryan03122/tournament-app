import { Label } from "flowbite-react";

export function InputLabel({ htmlFor, value, ...props }) {
  return (
    <div className="mb-1 block">
      <Label htmlFor={htmlFor} value={value} {...props} />
    </div>
  );
}
