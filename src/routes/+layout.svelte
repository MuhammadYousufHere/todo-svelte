<script>
  import '../app.css'
</script>

<div
  style="min-height: 100dvh; display:flex;  flex-direction: column; align-items: center;"
>
  <header>This is header</header>
  <!-- everything that comes in the app -->
  <slot />

  <footer class="">This is footer</footer>
</div>
