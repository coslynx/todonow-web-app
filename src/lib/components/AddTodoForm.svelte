<script lang="ts">
    import { addTodo } from '../stores/todoStore';

    // Local reactive state for the input field's value
    let newTodoText: string = '';

    /**
     * Handles the form submission event.
     * Validates the input, calls the addTodo store action if valid,
     * and resets the input field.
     */
    function handleSubmit() {
        // Trim whitespace from the input
        const trimmedText = newTodoText.trim();

        // Basic Validation: Proceed only if the trimmed text is not empty
        if (trimmedText) {
            // Call the imported addTodo function from the central store
            addTodo(trimmedText);
            // Reset the input field visually after successful addition
            newTodoText = '';
        }
        // No explicit else needed; if trimmedText is empty, nothing happens.
        // The button's disabled state also helps prevent submission attempts.
    }

    // Reactive computed property to determine if the button should be disabled
    $: isInputEmpty = !newTodoText.trim();

</script>

<form
    class="flex items-center space-x-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow"
    on:submit|preventDefault={handleSubmit}
    aria-label="Add new todo form"
>
    <input
        type="text"
        bind:value={newTodoText}
        placeholder="What needs to be done?"
        aria-label="New todo text"
        class="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
    />
    <button
        type="submit"
        disabled={isInputEmpty}
        class="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 ease-in-out"
    >
        Add
    </button>
</form>