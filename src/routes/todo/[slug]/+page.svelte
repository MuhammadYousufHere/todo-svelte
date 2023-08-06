<!-- in order to access the data of params - we need
1 - +page.ts file which takes parameter object to return the data
-->
<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<p>Detail of todo</p>
<h1 class="ring-2 p-4 my-3">{data.currTodo?.label}</h1>
