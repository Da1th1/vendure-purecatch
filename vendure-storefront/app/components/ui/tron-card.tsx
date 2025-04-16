import { forwardRef } from 'react';
import { cn } from '~/utils/cn';

const TronCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border border-cyan-500/20 bg-black/50 backdrop-blur-sm text-card-foreground shadow transition-colors hover:border-cyan-500/40',
      className
    )}
    {...props}
  />
));

TronCard.displayName = 'TronCard';

export { TronCard }; 