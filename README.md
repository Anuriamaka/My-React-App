# Comprehensive React and JavaScript DOM Summary

**Author:** Nworah Anuriamaka Eucharia
**Email:** [nworahanuriamaka@outlook.com](mailto:nworahanuriamaka@outlook.com)

---

## Introduction to React

### What is React?

React is a JavaScript library specifically designed for building user interfaces. Unlike comprehensive frameworks that provide solutions for every aspect of application development, React focuses exclusively on the UI layer. This focused approach allows developers to create interactive, dynamic web applications efficiently while maintaining flexibility in choosing other tools for different parts of their application stack.

React employs a **declarative programming paradigm**, meaning developers describe what the interface should look like in different states, and React automatically handles updating the display. This makes code more predictable, readable, and easier to debug.

### Core Principles

#### Virtual DOM

One of React's most important innovations is the **Virtual DOM**. React maintains a lightweight, in-memory representation of the actual DOM. When application data changes, React:

* Creates a new virtual DOM tree
* Compares it with the previous version through a process called *diffing*
* Calculates the minimum number of required updates
* Applies only those updates to the real DOM

This approach significantly improves performance since direct DOM manipulation is expensive.

#### Component-Based Architecture

React applications are built from **components**—small, reusable, and self-contained units of UI. Each component manages its own structure, styling, and behavior. Components can be nested to build complex interfaces from simple building blocks, improving:

* Reusability
* Maintainability
* Testability

### Components and JSX

React supports two main component types:

* **Function Components** (modern and preferred)
* **Class Components** (legacy approach)

Modern React development emphasizes function components combined with hooks.

**JSX (JavaScript XML)** is a syntax extension that allows writing HTML-like structures in JavaScript. JSX is transformed into `React.createElement()` calls.

Key JSX rules:

* Use `className` instead of `class`
* Use camelCase for event handlers (e.g., `onClick`)
* Embed JavaScript expressions using `{}`

### State Management

**State** represents data that changes over time within a component. When state updates, React automatically re-renders the component.

* The `useState` hook is used to manage state in function components
* State updates are performed using setter functions
* State is local to a component but can be **lifted up** to a common parent when shared across components

### Props and Data Flow

**Props** (properties) are used to pass data from parent components to child components.

Key characteristics:

* Read-only
* Unidirectional data flow (parent → child)
* Improve predictability and easier debugging

### Event Handling

React uses a **synthetic event system** for cross-browser consistency.

Common events include:

* `onClick`
* `onChange`
* `onSubmit`

Event handlers can be defined inline or as separate functions. When parameters are required, arrow functions are used to prevent immediate execution.

---

## React Hooks in Depth

### Introduction to Hooks

React Hooks allow function components to access features previously exclusive to class components. They simplify logic, reduce boilerplate, and promote cleaner, more readable code.

### The Seven Essential Hooks

#### 1. useState

* Creates and manages state in function components
* Returns the current state and a setter function
* Multiple `useState` hooks can exist in one component
* When updating objects, the previous state must be spread to preserve properties

#### 2. useEffect

Manages side effects such as:

* API calls
* DOM manipulation
* Timers and subscriptions

Key points:

* Runs after render
* Dependency array controls execution
* Empty dependency array runs once on mount
* Cleanup functions prevent memory leaks
* Async logic is handled inside the effect, not directly in the callback

#### 3. useRef

* Creates persistent references across renders
* Does not trigger re-renders when updated
* Commonly used for DOM access (e.g., focusing inputs)

#### 4. useCallback

* Memoizes functions
* Prevents unnecessary re-renders in child components
* Improves performance when passing callbacks as props

#### 5. useMemo

* Memoizes computed values
* Avoids expensive recalculations on every render
* Recomputes only when dependencies change

#### 6. useContext

* Eliminates prop drilling
* Shares global data across the component tree
* Useful for themes, authentication, and app-wide settings

#### 7. useReducer

* Alternative to `useState` for complex logic
* Uses a reducer function and action objects
* Ideal for intricate state transitions and related state values

---

## JavaScript DOM Manipulation

### Understanding the DOM

The **Document Object Model (DOM)** represents an HTML document as a tree of objects. The `document` object is the root and provides access to all elements on a page.

### Finding HTML Elements

JavaScript provides multiple methods for selecting DOM elements:

* **getElementById()**: Selects a single element by ID
* **getElementsByTagName()**: Returns elements by tag name as an HTMLCollection
* **getElementsByClassName()**: Selects elements by class name
* **querySelector() / querySelectorAll()**: Uses CSS selectors for flexible selection
* **HTML Object Collections**: Built-in collections like `document.forms`, `document.images`, and `document.links`

### Modifying HTML Elements

Once selected, elements can be modified using:

* `innerHTML` for content replacement
* Direct attribute assignment (e.g., `src`, `href`)
* `style.property` for dynamic styling
* `setAttribute()` for general attribute updates

### Creating and Managing Elements

* `createElement()` creates new elements
* `appendChild()` adds elements to the DOM
* `removeChild()` removes elements
* `replaceChild()` replaces existing elements

### Event Handling and Document Properties

Interactivity is achieved by attaching event handlers such as `onclick`.

The `document` object also provides access to metadata and structure through properties like:

* `document.body`
* `document.head`
* `document.title`
* `document.URL`

Deprecated properties should be avoided in modern development.

### Choosing the Right Approach

* Use `getElementById()` for unique elements
* Use class or tag selectors for groups
* Use `querySelectorAll()` for complex CSS-based queries
* Use HTML collections for standard document elements

---

## Conclusion

Mastering React and JavaScript DOM manipulation provides a strong foundation for modern frontend development. React’s component-based architecture and hooks enable the creation of scalable, maintainable user interfaces, while DOM manipulation skills enhance control over interactivity and dynamic content. Together, these technologies empower developers to build responsive, user-friendly web applications that meet modern standards.


# React Setup

## NPM?
NPM (Node Package Manager) allows developers to download, install, update, and manage the libraries or “packages” required for building websites and applications. NPM comes with Node.js, and all installed packages are listed and managed through a file called package.json.

## Package.json
package.json is an important file that defines and describes a Node.js project. It includes key details such as the project’s name, version, dependencies, scripts, and other metadata. 
This file is generated automatically when a Node.js project is created and it serves several purposes :
* It lists all installed packages
* It stores essential project information
* It provides scripts that can be executed (such as starting the development server)
*  It ensures that others can install the exact same dependencies using npm install.

## Vite
Vite is a modern frontend build tool designed to create fast and efficient web development projects. Developers prefer Vite because it offers an extremely fast development server, automatically refreshes the browser whenever code is updated, and has a simple, easy-to-set-up configuration. It is commonly used with frameworks such as React, Vue, and also works with plain JavaScript (Vanilla JS).





<!-- # React + Vite
# React * Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two offic    ial plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
 -->
