# Design Sections Library Guide

Welcome to the Design Sections Library! This library is structured to serve as an extensible repository of highly polished, modern, and interactive React components that you (or an AI agent) can pull from to construct stunning websites.

---

## 🏗️ Architecture Overview

The library follows a strict and organized structure:

1. **`/src/components/ui/`**: This is where the core, reusable components live. They contain the actual logic, styles, animations, and SVGs.
2. **`/src/components/sections/demo/`**: This folder contains lightweight wrappers around the UI components. These wrappers provide the necessary context (like padding, full-screen height, or specific data) to render the component correctly in isolation.
3. **`/src/lib/registry/index.ts`**: The central nervous system of the library. Every demo component is registered here with an ID, name, description, and dynamic Next.js import.
4. **`/src/app/preview/[sectionId]/page.tsx`**: A dynamic Next.js route that reads the registry and safely renders any component in complete isolation without styles bleeding into other components.

---

## 🛠️ How to Use a Section

If you want to use one of these sections in a real application page (like your actual homepage, about page, or a new project), follow these steps:

### 1. Identify the Component
Browse the library at `http://localhost:3000` to find a section you like (e.g., "Glowy Waves Hero"). Note the name and look for it in `/src/components/ui/`.

### 2. Import It
Import the core component directly from the UI folder into your new page. 

```tsx
import { GlowyWavesHero } from "@/components/ui/glowy-waves-hero-shadcnui";
```

### 3. Provide Context (If Needed)
Many components are designed to stretch to their container. Make sure you wrap them in an appropriately sized `div` or `<section>` tags:

```tsx
export default function MyNewPage() {
  return (
    <main>
      {/* Set a min-height and background color for the hero */}
      <section className="min-h-screen bg-black">
        <GlowyWavesHero />
      </section>

      {/* Other sections... */}
    </main>
  );
}
```

---

## 🤖 For AI Agents

When I (or another AI agent) am prompted to "build a new page using the library," I will:
1. Check `/src/lib/registry/index.ts` to see all available sections and read their descriptions.
2. Select the most appropriate components for the requested page (e.g., a Hero, followed by a Feature Carousel, followed by a Pricing card).
3. Import the underlying components from `/src/components/ui/`.
4. Compose them into a new route in the `/src/app/` directory!

---

## ➕ Adding New Sections

When you give a new prompt to add a section, the workflow is entirely automated:
1. A new `.tsx` file is created in `/components/ui/`.
2. A demo wrapper is created in `/components/sections/demo/`.
3. It is appended to the registry in `/lib/registry/index.ts`.
4. It instantly becomes available on the Homepage and at `/preview/[new-section-id]`!
