<script lang="ts">
    import '../app.css'
    import Darkmode from '$stores/darkmode'
    import Theme from '$stores/theme'
</script>

<body data-theme={$Theme} class={$Darkmode ? 'dark' : 'light'}>
    <div class="bg-surface-100-800-token text-surface-900-50-token absolute left-0 top-0 h-screen w-screen overflow-hidden">
        <!-- sidebar or other stuff... -->
        <main class="p-4">
            <slot />
        </main>
    </div>
</body>
