import { initailTodos } from '../../lib/initialData'

// important for svelte
/** @type {import('./$types').PageLoad} */
export function load() {
  return {
    initailTodos,
  }
}
