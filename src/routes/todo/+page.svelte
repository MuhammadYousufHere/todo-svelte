<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<h4>Todo APP</h4>

<!-- for each in svelte -->
{#each data.initailTodos as todo}
  <div>
    <h3 class="text-3xl">{todo.label}</h3>
    <p class="text-2xl">{todo.description}</p>
    <a
      href="todo/{todo.id}"
      class="hover:text-blue-700 hover:underline">see details</a
    >
  </div>
{/each}
