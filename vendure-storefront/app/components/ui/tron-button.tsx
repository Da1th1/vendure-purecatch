import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-cyan-500 text-white shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]',
        outline:
          'border border-cyan-500 text-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface TronButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const TronButton = forwardRef<HTMLButtonElement, TronButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

TronButton.displayName = 'TronButton';

export { TronButton, buttonVariants }; 