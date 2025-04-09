import React, { forwardRef } from "react";
import { cn } from "../lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// Define the props for InputField including ref forwarding
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
  label?: string;
  helperText?: string;
  hasError?: boolean;
}

// Use forwardRef to pass the ref to the input
const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ helperText, label, hasError, ...props }, ref) => {
    return (
      <div>
        {label && (
          <Label htmlFor={props.id} className="mb-2.5 inline-block font-medium">
            {label}
          </Label>
        )}
        <Input ref={ref} {...props} />
        {helperText && (
          <p
            className={cn(
              "mt-2 text-xs",
              hasError ? "text-red-600" : "text-gray-500"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

// Set the display name for debugging purposes
InputField.displayName = "InputField";

export default InputField;
