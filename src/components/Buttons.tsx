
import type { ReactNode, MouseEvent } from 'react';


interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export default function Buttons(
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