# FJ-Elements

A professional, cyberpunk-themed React component library built with TypeScript, CSS Modules, and Storybook. This library serves as the core UI engine for the [findjosh.dev](https://findjosh.dev) ecosystem.

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://elements.findjosh.dev)
[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)

---

## Overview

**FJ-Elements** is a modular component library designed for high-performance, accessible, and themeable web applications. It implements a custom design system focused on "Cyber-Utility"—combining high-contrast aesthetics with strict architectural patterns.

### Why this exists:

- **Consistency:** Centralized design tokens for colors, spacing, and glow effects.
- **Architecture:** Separation of concerns using the Provider/Hook pattern for complex states (like Toasts).
- **Performance:** Optimized for minimal Layout Shift (CLS) using specialized Skeleton loaders.

---

## Tech Stack

- **React 18+** & **TypeScript** (Strict Mode)
- **CSS Modules** for encapsulated, collision-free styling
- **Storybook 8** for component isolation and documentation
- **GitHub Actions** for automated CI/CD and deployment

---

## 📦 Core Components & Status

This library is organized using Atomic Design principles. Here is the current roadmap and completion status:

| Category       | Component                  | Status      |
| :------------- | :------------------------- | :---------- |
| **Foundation** | Colours                    | ✅ Complete |
| **Atoms**      | Button                     | ✅ Complete |
| **Atoms**      | TextInput / TextArea       | ✅ Complete |
| **Atoms**      | Checkbox / Radio           | ✅ Complete |
| **Atoms**      | Toggle (Switch)            | ✅ Complete |
| **Atoms**      | Select                     | ✅ Complete |
| **Atoms**      | Badge / Tooltip            | ✅ Complete |
| **Atoms**      | Divider / Spinner          | ✅ Complete |
| **Molecules**  | Alert / Callout            | ✅ Complete |
| **Molecules**  | RadioGroup                 | ✅ Complete |
| **Organisms**  | Modal (Dialog)             | ✅ Complete |
| **Organisms**  | Toast Notification         | ✅ Complete |
| **Organisms**  | Navigation Bar             | ✅ Complete |
| **Organisms**  | Footer                     | 🚧 Planned  |
| **Layout**     | Grid / Container / Section | ✅ Complete |
| **Utility**    | Skeleton                   | ✅ Complete |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
git clone [https://github.com/joshhallan/FJ-Elements.git](https://github.com/joshhallan/FJ-Elements.git)
cd FJ-Elements
npm install
```
