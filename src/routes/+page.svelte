<script lang="ts">
	// Import the necessary child components for composing the page UI
	import AddTodoForm from '$lib/components/AddTodoForm.svelte';
	import TodoList from '$lib/components/TodoList.svelte';

	// --- Testing Considerations ---
	// Rendering tests should verify:
	// - The component renders the main `h1` heading with the text "Simple Todo List".
	// - An instance of the `<AddTodoForm />` component is rendered.
	// - An instance of the `<TodoList />` component is rendered.
	// - The root container `div` has the expected layout and styling classes applied.
	// --- End Testing Considerations ---

	// No application logic or state management interactions belong in this page component.
	// Its sole responsibility is UI composition.
</script>

<!--
  Root container for the page content.
  Provides structure, background, padding, and spacing for its children (heading, form, list).
  Styled using Tailwind CSS for visual consistency with the overall theme.
  Centering of this container within the viewport is handled by the parent +layout.svelte.
-->
<div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
	<h1 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">Simple Todo List</h1>

	<AddTodoForm />

	<TodoList />
</div>