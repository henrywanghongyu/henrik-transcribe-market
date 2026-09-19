import { useRef } from 'react'
import { X } from 'lucide-react'
import { asset, cn } from '@/lib/utils'

type Props = {
  src: string
  alt: string
  width: number
  height: number
  frame: 'mac' | 'phone'
  priority?: boolean
  className?: string
}

/** A screenshot in a device-appropriate frame. Click (or Enter) opens it larger in a native <dialog>. */
export function Screenshot({ src, alt, width, height, frame, priority, className }: Props) {
  const dialog = useRef<HTMLDialogElement>(null)
  const url = asset(src)

  const img = (
    <img
      src={url}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' as const } : {})}
      className="block h-auto w-full"
    />
  )

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label={`Enlarge screenshot: ${alt}`}
        className={cn(
          'group relative block w-full cursor-zoom-in overflow-hidden bg-surface text-left shadow-float',
          frame === 'mac' && 'rounded-xl border border-line',
          frame === 'phone' && 'rounded-[2.4rem] border-[7px] border-[#0d0e12] ring-1 ring-line',
          className,
        )}
      >
        {img}
      </button>
      <dialog
        ref={dialog}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto max-h-[92vh] max-w-[min(94vw,1400px)] overflow-visible bg-transparent p-0"
      >
        <form method="dialog" className="relative">
          <button
            aria-label="Close"
            className="absolute -top-3 -right-3 z-10 grid size-9 place-items-center rounded-full bg-surface text-ink shadow-float"
          >
            <X className="size-5" />
          </button>
        </form>
        <img src={url} alt={alt} className={cn('max-h-[92vh] w-auto rounded-xl object-contain', frame === 'phone' && 'max-h-[88vh]')} />
      </dialog>
    </>
  )
}
