import { cn } from '~/lib/utils';

interface TronSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TronSeparator({ className, ...props }: TronSeparatorProps) {
  return (
    <div
      className={cn(
        'h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent',
        className
      )}
      {...props}
    />
  );
} 