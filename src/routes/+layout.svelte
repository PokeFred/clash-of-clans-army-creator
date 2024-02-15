<script lang="ts">
    import '../app.css'
</script>

<body data-theme="skeleton" class="dark">
    <div class="top-0 left-0 w-screen h-screen text-surface-900-50-token bg-surface-100-800-token overflow-hidden absolute">
        <!-- sidebar or other stuff... -->
        <div class="p-4">
            <slot />
        </div>
    </div>
</body>
