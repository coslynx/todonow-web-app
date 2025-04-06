import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'todos';

/**
 * @typedef {object} Todo
 * @property {string} id - Unique identifier (UUID v4)
 * @property {string} text - Task description
 * @property {boolean} completed - Completion status
 */

/**
 * Initializes the todo list state from localStorage or returns an empty array.
 * Handles potential errors during retrieval or parsing. Runs only on client-side.
 * @returns {Todo[]} The initial array of todos.
 */
function initializeTodos() {
  // Guard against server-side execution or environments without localStorage
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    // Log a warning in non-browser environments if persistence is expected
    if (typeof window !== 'undefined') {
        console.warn('localStorage is not available in this browser environment. State will not persist.');
    }
    return [];
  }

  try {
    const storedTodos = window.localStorage.getItem(STORAGE_KEY);
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      // Basic validation: check if it's an array. More robust validation could check item structure.
      if (Array.isArray(parsedTodos)) {
        return parsedTodos;
      } else {
        console.warn('Invalid data structure found in localStorage for key:', STORAGE_KEY, '. Initializing with an empty list.');
        // Attempt to clear invalid data to prevent repeated load failures
        try {
            window.localStorage.removeItem(STORAGE_KEY);
        } catch (removeError) {
            console.error('Failed to remove invalid item from localStorage:', removeError);
        }
        return [];
      }
    }
  } catch (error) {
    // Catch errors during getItem or JSON.parse
    console.error('Error reading or parsing todos from localStorage:', error);
  }
  // Default to empty array if key not found, parsing failed, or any other error occurred
  return [];
}

// Initialize the store state by attempting to load from localStorage
const initialTodos = initializeTodos();

// Create the Svelte writable store instance
const store = writable(initialTodos);

// Subscribe to store changes and persist to localStorage, only if on client-side
if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
  store.subscribe((currentTodos) => {
    try {
      // Persist the current state to localStorage
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTodos));
    } catch (error) {
      // Handle potential errors like storage quota exceeded
      console.error('Error writing todos to localStorage:', error);
      // Consider notifying the user if storage fails repeatedly
    }
  });
}

/**
 * Adds a new todo item to the list.
 * Performs basic input validation (non-empty after trimming).
 * @param {string} text - The description of the task. Input is expected to be a string.
 */
function addTodo(text) {
  // Ensure input is a string before trimming
  const inputText = typeof text === 'string' ? text : '';
  const trimmedText = inputText.trim();

  // Prevent adding empty or whitespace-only todos
  if (!trimmedText) {
    console.warn('Attempted to add an empty todo.');
    return; // Exit without modifying the store
  }

  const newTodo = {
    id: uuidv4(),
    text: trimmedText,
    completed: false,
  };

  // Update the store immutably
  store.update((currentTodos) => [...currentTodos, newTodo]);
}

/**
 * Toggles the completion status of a specific todo item identified by its ID.
 * @param {string} id - The ID of the todo to toggle. Expected to be a valid UUID string.
 */
function toggleTodo(id) {
  // Ensure id is a non-empty string
   if (typeof id !== 'string' || !id) {
        console.error('Invalid ID provided to toggleTodo:', id);
        return;
    }
  store.update((currentTodos) =>
    currentTodos.map((todo) => {
      if (todo.id === id) {
        // Return a new object with the flipped completed status
        return { ...todo, completed: !todo.completed };
      }
      return todo; // Return unchanged todo if ID doesn't match
    })
  );
}

/**
 * Deletes a specific todo item from the list identified by its ID.
 * @param {string} id - The ID of the todo to delete. Expected to be a valid UUID string.
 */
function deleteTodo(id) {
   // Ensure id is a non-empty string
   if (typeof id !== 'string' || !id) {
        console.error('Invalid ID provided to deleteTodo:', id);
        return;
    }
  // Update the store immutably by filtering out the item with the matching ID
  store.update((currentTodos) =>
    currentTodos.filter((todo) => todo.id !== id)
  );
}

// Export the store instance for components to subscribe to
export const todos = store;

// Export the action functions for components to dispatch state changes
export { addTodo, toggleTodo, deleteTodo };