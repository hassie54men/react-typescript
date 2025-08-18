
import type { ReactNode, MouseEvent } from 'react';
import * as React from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export default function Button(
   {
     children,
     ...props
}: ButtonProps) {
  return (
     <button
        {...props}
     >
       {children}
     </button>
  );
}