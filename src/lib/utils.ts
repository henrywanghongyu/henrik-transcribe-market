import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Resolve a path under /public against the Vite base (works for project pages and custom domains). */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

/** Link to a section of the home page from any page. */
export function home(hash = '') {
  return `${import.meta.env.BASE_URL}${hash}`
}
