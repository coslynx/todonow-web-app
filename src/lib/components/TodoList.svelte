<script lang="ts">
    // Import the reactive store containing the list of todos
    import { todos } from '../stores/todoStore';
    // Import the component responsible for rendering a single todo item
    import TodoItem from './TodoItem.svelte';

    // --- Testing Considerations ---
    // Unit tests should verify:
    // - Rendering of the correct number of `TodoItem` children based on the `$todos` store state.
    // - Each `TodoItem` receives the correct `todo` object as a prop.
    // - The `todo.id` is used as the key in the `#each` block.
    // - The "No todos yet!" message is displayed exclusively when the `$todos` array is empty.
    // - The component correctly subscribes and unsubscribes from the `todos` store (implicitly handled by Svelte's `$store` syntax).
    // --- End Testing Considerations ---

</script>

<!--
  Container for the list of todo items.
  Styled with margin-top, background color (with dark mode support),
  rounded corners, and shadow, consistent with AddTodoForm.
  Items are separated by borders defined within TodoItem.svelte.
-->
<ul class="mt-4 bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden" aria-label="Todo list">
    {#each $todos as todo (todo.id)}
        <!--
          Render an instance of the TodoItem component for each todo in the store.
          Pass the individual 'todo' object as a prop.
          The key '(todo.id)' is crucial for Svelte's DOM update efficiency.
        -->
        <TodoItem {todo} />
    {:else}
        <!--
          This block is rendered only when the '$todos' array is empty.
          Displays a helpful message to the user.
        -->
        <li class="text-center text-gray-500 dark:text-gray-400 py-6 px-3">
            No todos yet! Add one above.
        </li>
    {/each}
</ul>