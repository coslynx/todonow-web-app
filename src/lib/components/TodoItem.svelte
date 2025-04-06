<script lang="ts">
    // Import actions from the central store to modify the todo list state
    import { toggleTodo, deleteTodo } from '../stores/todoStore';

    /**
     * @typedef {object} Todo
     * @property {string} id - Unique identifier (UUID v4)
     * @property {string} text - Task description
     * @property {boolean} completed - Completion status
     */

    /**
     * The todo object containing its data (id, text, completed status).
     * Passed down as a prop from the parent TodoList component.
     * @type {Todo}
     */
    export let todo: { id: string; text: string; completed: boolean };

    // --- Testing Considerations (Comment block for documentation/intent) ---
    // Unit Tests should verify:
    // - Correct rendering of `todo.text`.
    // - Checkbox state accurately reflects `todo.completed`.
    // - Delete button is rendered.
    // - Conditional classes (`line-through`, `text-gray-400`, etc.) are correctly applied/removed based on `todo.completed`.
    // - `toggleTodo(id)` is invoked with the correct `todo.id` upon checkbox change event.
    // - `deleteTodo(id)` is invoked with the correct `todo.id` upon delete button click event.
    // --- End Testing Considerations ---

</script>

<li class="flex items-center justify-between space-x-3 p-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out">
    <div class="flex items-center space-x-3 flex-grow min-w-0">
        <input
            type="checkbox"
            bind:checked={todo.completed}
            on:change={() => toggleTodo(todo.id)}
            aria-label="Mark todo as complete"
            class="h-5 w-5 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500"
        />
        <span
            class="text-gray-800 dark:text-gray-100 truncate transition-colors duration-150 ease-in-out"
            class:line-through={todo.completed}
            class:text-gray-400={todo.completed}
            class:dark:text-gray-500={todo.completed}
            title={todo.text}
        >
            {todo.text}
        </span>
    </div>
    <button
        on:click={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
        class="flex-shrink-0 p-1 text-red-500 hover:text-red-700 dark:hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 dark:focus:ring-offset-gray-800 rounded transition-colors duration-150 ease-in-out"
        title="Delete todo"
    >
        <!-- Simple 'X' icon for deletion -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</li>