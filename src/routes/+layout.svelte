<script lang="ts">
    // Root layout component for the SvelteKit application.
    // Defines the main structure and applies global layout styles using Tailwind CSS.
    // It wraps the dynamically injected page content via the <slot /> element.
    // No specific TypeScript logic is needed for this structural component in the MVP.

    // --- Testing Considerations ---
    // Test suites should verify:
    // 1. The component renders a single top-level <slot /> element.
    // 2. The <slot /> element is wrapped by a <main> HTML element.
    // 3. The <main> element has the expected Tailwind CSS classes applied:
    //    - min-h-screen (or equivalent for full viewport height)
    //    - Background color classes (e.g., bg-gray-100 dark:bg-gray-900)
    //    - Flexbox/Grid classes for centering (e.g., flex, flex-col, items-center, justify-center)
    //    - Padding classes (e.g., p-6)
    // --- End Testing Considerations ---
</script>

<!--
  The main layout container for the entire application.
  - `min-h-screen`: Ensures the layout takes at least the full viewport height.
  - `bg-gray-100 dark:bg-gray-900`: Sets a subtle background color consistent with light/dark themes.
  - `flex flex-col items-center justify-center`: Uses flexbox to center the main content area (rendered via <slot />)
    both vertically and horizontally within the layout container.
  - `p-6`: Adds padding around the content area.
-->
<main class="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
    <!--
      SvelteKit's mandatory slot element.
      The rendered content of the currently active page component
      (e.g., src/routes/+page.svelte) will be injected here.
    -->
    <slot />
</main>