import { initailTodos } from '../../../lib/initialData'

// important for svelte
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const currTodo = initailTodos.find((todo) => todo.id === params.slug)
  return {
    currTodo,
  }
}
