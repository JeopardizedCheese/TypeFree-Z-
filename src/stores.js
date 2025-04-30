import { writable } from 'svelte/store'

export const running = writable(false)
export const points = writable(0)
export const mistakesTotal = writable(0)
export const mistakesCorrected = writable(0)
export const elapsedTime = writable(0)
export const words = writable([])