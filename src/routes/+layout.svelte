<script lang="ts">
    import '../app.css'
    import Darkmode from "$stores/darkmode"
    import Theme from "$stores/theme"
</script>

<body data-theme={$Theme} class="{$Darkmode ? 'dark' : 'light'}">
    <div class="top-0 left-0 w-screen h-screen text-surface-900-50-token bg-surface-100-800-token overflow-hidden absolute">
        <!-- sidebar or other stuff... -->
        <main class="p-4">
            <slot />
        </main>
    </div>
</body>
