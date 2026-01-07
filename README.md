# Frontend Assignment

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm 9+
- Git

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality with ESLint
npm run format   # Format code with Prettier
```

## Project Overview

This project implements three core features for a React-based application following strict requirements for TypeScript, Tailwind CSS, and clean architecture.

### Implemented Features

1. **Messages** - Simple messaging interface with compose box and real-time updates
2. **Discussion** - Comment threads with one level of nested replies
3. **Attachments** - File management with upload, validation, and download capabilities

## Tech Stack

- **React 19** - UI framework with functional components only
- **TypeScript** - Strict mode enabled, no `any` types
- **Vite 7** - Build tool with native ESM and instant HMR
- **Tailwind CSS v4** - Utility-first CSS framework with custom theme
- **ESLint + Prettier** - Code quality and formatting
- **Husky + lint-staged** - Pre-commit hooks for quality assurance

## Project Structure

```
src/
├── components/
│   ├── ui/             # Reusable UI components (buttons, inputs)
│   └── layout/         # Layout components (header, footer)
├── features/           # Feature modules (messages, discussions, attachments)
├── hooks/              # Custom React hooks
├── contexts/           # React context providers
├── pages/              # Page components
├── mocks/              # Mock data for local development
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and helpers
└── styles/             # Global styles and theme configuration
```

## Architectural Decisions

### 1. Feature-Based Organization

Code is organized by feature rather than by file type. Each feature module contains its own components, types, and logic, making the codebase more maintainable and scalable.

### 2. Path Aliases

Configured TypeScript and Vite path aliases for cleaner imports:

- `@/` - src root
- `@components/` - shared components
- `@features/` - feature modules
- `@hooks/` - custom hooks
- `@utils/` - utility functions
- `@types/` - type definitions
- `@mocks/` - mock data
- `@contexts/` - context providers
- `@pages/` - page components
- `@styles/` - styles and theme

### 3. Mock Data Strategy

All data is mocked locally to ensure deterministic behavior without backend dependencies. Services return Promises to simulate async API calls and demonstrate proper loading state handling.

### 4. Type Safety

Strict TypeScript configuration enforces:

- No implicit `any` types
- Strict null checks
- Unused variable detection
- Exhaustive switch case checking
- No unused locals/parameters

### 5. Styling with Tailwind CSS v4

Uses the latest Tailwind CSS v4 with:

- CSS-first configuration via `@import "tailwindcss"`
- Custom theme with CSS variables
- Utility-only approach (no custom CSS files)
- Conditional styling with `clsx` utility

### 6. Code Quality Automation

Pre-commit hooks automatically:

- Run ESLint with auto-fix
- Format code with Prettier
- Only process staged files (fast performance)

## Trade-offs

### Simplicity Over Complexity

Chose React's built-in state management (useState, useContext) instead of Redux/Zustand. For this application's scope, external state libraries would add unnecessary complexity.

### Local Mock Data

Simple Promise-based services provide sufficient flexibility without additional dependencies like MSW or json-server. This keeps the setup lightweight and the data flow transparent.

### Tailwind-Only Styling

No custom CSS files reduces maintenance burden and enforces design consistency. All styling is done through utility classes, making it easier to understand component appearance at a glance.

### Strict TypeScript

Slightly increases initial development time but eliminates entire classes of runtime errors and significantly improves code maintainability and refactoring confidence.

## Implementation Details

### State Management

Uses React's built-in hooks (`useState`, `useEffect`, `useContext`) without external state management libraries. Feature-specific state is colocated with components.

### Styling Strategy

All styling uses Tailwind CSS utility classes. Components compose utilities with the `cn()` helper function for conditional classes. Custom theme variables are defined in `src/styles/theme.css`.

### Error Handling

All features implement proper loading, empty, and error states as required by the specification.

### Responsiveness

Desktop-first responsive design with Tailwind breakpoints for mobile and tablet views.

## Global Requirements Compliance

- React functional components only
- TypeScript with no `any` types (enforced by ESLint)
- TailwindCSS for all styling (no inline styles)
- Clean, feature-based folder structure
- Loading, empty, and error states handled
- Responsive design (desktop-first)

## Development Notes

- ESLint enforces React Hooks rules to prevent common bugs
- Husky ensures code quality before every commit
- Vite provides instant feedback with sub-second HMR
- All components are fully typed with TypeScript interfaces

---

**Submission for Front-End Developer Position**
Expected Time: 6-10 hours
Stack: React, TypeScript, TailwindCSS, Vite
├── hooks/ # Custom React hooks
├── services/ # API/data service functions
├── mocks/ # Mock data for local development
├── types/ # TypeScript type definitions
└── utils/ # Utility functions and helpers

```

## Architectural Decisions

### Feature-Based Organization

Code is organized by feature rather than by file type. Each feature module contains its own components, types, and logic, making it easier to maintain and scale.

### Path Aliases

Configured TypeScript and Vite path aliases for cleaner imports:

- `@/` - src root
- `@components/` - components folder
- `@features/` - features folder
- `@utils/` - utility functions
- `@types/` - type definitions
- `@services/` - service functions
- `@mocks/` - mock data

### Mock Data Strategy

All data is mocked locally to ensure deterministic behavior without backend dependencies. Mock data is accessed through service functions that return Promises, simulating async API calls to demonstrate proper loading state handling.

### Type Safety

Strict TypeScript configuration enforces:

- No implicit `any` types
- Strict null checks
- Unused variable detection
- Exhaustive switch case checking

### Code Quality

Pre-commit hooks automatically run ESLint and Prettier on staged files, ensuring consistent code style and catching errors before they enter the codebase.

## Implementation Approach

### State Management

Uses React's built-in hooks (`useState`, `useEffect`) without external state management libraries. Feature-specific state is colocated with components.

### Styling Strategy

Tailwind CSS utility classes only - no custom CSS files or inline styles. Components compose utilities with the `cn()` helper function for conditional classes.

### Error Handling

All features implement proper loading, empty, and error states as required.

### Responsiveness

Desktop-first approach with responsive breakpoints for smaller screens.

## Trade-offs

**Chose simplicity over complexity**: Avoided Redux/Zustand as the app doesn't require global state management. React's context and hooks are sufficient.

**Local mock data over API mocking libraries**: Simple Promise-based services provide enough flexibility without additional dependencies.

**Tailwind only**: No custom CSS reduces maintenance burden and enforces design consistency through utility classes.

**Strict TypeScript**: Slightly longer development time but eliminates entire classes of runtime errors and improves maintainability.

## Development Notes

- All components are functional with TypeScript
- ESLint enforces React Hooks rules to prevent common bugs
- Husky ensures code quality before commits
- Vite provides instant feedback with sub-second HMR
```
