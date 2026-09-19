import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// shadcn/ui-style button; used with <a> as well as <button>, so it is a class helper plus a thin component.
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-brand-ink hover:brightness-110',
        secondary: 'bg-surface-2 text-ink hover:bg-line',
        outline: 'border border-line bg-surface text-ink hover:bg-surface-2',
        ghost: 'text-muted hover:text-ink',
      },
      size: { sm: 'h-9 px-4 text-sm', md: 'h-11 px-6 text-[0.95rem]', lg: 'h-13 px-8 text-base' },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
