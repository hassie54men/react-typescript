//
// import type { PropsWithChildren } from 'react';
//
// export default function Button({ children}: PropsWithChildren) {
//   return (
//      <button>{children}</button>
//   )
// }
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