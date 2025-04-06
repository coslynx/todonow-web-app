#!/bin/sh
# Startup script for simple-svelte-todo-mvp

# Exit immediately if a command exits with a non-zero status.
# Treat unset variables as an error when substituting.
set -eu

# Function to print error messages to stderr
log_error() {
  echo "ERROR: $1" >&2
}

# Function to print info messages to stdout
log_info() {
  echo "INFO: $1"
}

# -- Main Script Logic --

log_info "Starting simple-svelte-todo-mvp development environment..."

# 1. Check if dependencies are installed
log_info "Checking dependencies..."
if [ ! -d "node_modules" ]; then
  log_info "node_modules directory not found. Installing dependencies..."
  if ! npm install; then
    log_error "Dependency installation failed. Please check npm logs."
    exit 1
  fi
  log_info "Dependencies installed successfully."
else
  log_info "Dependencies already installed."
fi

# 2. Run Linter (Optional but Recommended)
log_info "Running linter (prettier --check . && eslint .)..."
if ! npm run lint; then
  log_error "Linting failed. Please fix the issues reported above."
  exit 1
fi
log_info "Linting passed."

# 3. Run Type Checker (Optional but Recommended)
log_info "Running type checker (svelte-check)..."
if ! npm run check; then
  log_error "Type checking failed. Please fix the issues reported above."
  exit 1
fi
log_info "Type checking passed."

# 4. Start Development Server
log_info "Starting development server (vite dev)..."
# The 'npm run dev' command will now run in the foreground.
# 'set -e' ensures the script exits if 'npm run dev' fails immediately.
npm run dev

# If npm run dev exits successfully (e.g., user stops it), the script ends here.
log_info "Development server stopped."
exit 0