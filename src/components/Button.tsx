//
// import type { PropsWithChildren } from 'react';
//
// export default function Button({ children}: PropsWithChildren) {
//   return (
//      <button>{children}</button>
//   )
// }
import type { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export default function Button(
   {
     children,
     onClick,
     disabled = false
}: ButtonProps) {
  return (
     <button
        onClick={onClick}
        disabled={disabled}
     >
       {children}
     </button>
  );
}