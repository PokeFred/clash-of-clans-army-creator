import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

type Theme = 'skeleton'
const theme: Writable<Theme> = writable<Theme>("skeleton")

export default theme
export type { Theme }
