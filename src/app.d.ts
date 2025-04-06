// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		// Adjusted based on project context (static SPA, minimal MVP)
		interface Error {
			message: string;
		}
		interface Locals {
			// Empty for static adapter MVP
		}
		interface PageData {
			// Empty for now, as no top-level load functions are used in MVP
		}
		interface Platform {
			// Empty for static adapter MVP
		}
	}
}

export {}; // This ensures the file is treated as a module.