<div align="center">
  <h1>Siber UI</h1>
  <p><strong>A minimalist cyberpunk React UI kit designed for the next generation of web applications.</strong></p>

  [![npm version](https://img.shields.io/npm/v/@siberui/react.svg?style=flat-square)](https://www.npmjs.com/package/@siberui/react)
  [![License](https://img.shields.io/npm/l/@siberui/react.svg?style=flat-square)](https://github.com/siberui/siber-ui/blob/main/LICENSE)
</div>

## 🌌 Introduction

Siber UI is a modern, uncompromisingly minimalist React UI component library. It embraces a strict dark-mode cyberpunk aesthetic, utilizing sharp neon glows, terminal aesthetics, and smooth animations powered by Tailwind CSS and Framer Motion. 

Whether you're building a hacking simulator, a high-tech dashboard, or an immersive Web3 application, Siber UI provides the foundational components you need out of the box.

## ✨ Features

- **Cyberpunk Aesthetic**: Unapologetic dark mode with neon cyan, purple, and rose glow variations.
- **Premium Animations**: Built-in glitch effects, border beams, and radar sweeps.
- **Accessible & Robust**: Built on top of Radix UI primitives for full keyboard navigation and screen reader support.
- **Tailwind CSS v4**: Fully styled with Tailwind CSS, meaning it's lightweight and easy to override.
- **TypeScript**: Written in TS with comprehensive type definitions.

## 🚀 Installation

Install Siber UI and its peer dependencies via your preferred package manager:

```bash
npm install @siberui/react lucide-react
# or
pnpm add @siberui/react lucide-react
# or
yarn add @siberui/react lucide-react
```

### Setup Tailwind CSS

Siber UI includes a global CSS file with essential design tokens and custom animations. Import it at the root of your application (e.g., `layout.tsx` or `_app.tsx` in Next.js, or `main.tsx` in Vite):

```tsx
// app/layout.tsx
import "@siberui/react/globals.css";
```

## 💻 Usage

Import and use components effortlessly:

```tsx
import { Button, GlitchText, TerminalBlock } from "@siberui/react";

export default function App() {
  return (
    <div className="p-8 bg-[#06090e] min-h-screen text-white flex flex-col gap-6 items-start">
      <GlitchText as="h1" text="SYSTEM ONLINE" color="cyan" className="text-4xl" />
      
      <TerminalBlock 
        title="init.sh"
        code="sudo bypass_firewall --sector=7G"
        language="bash"
      />

      <Button variant="cyber">
        Initiate Sequence
      </Button>
    </div>
  );
}
```

## 📚 Documentation

For full component API documentation, examples, and detailed guides, please visit our documentation site:

👉 **[siberui.com](https://siberui.com)**

## 📦 Monorepo Structure

This repository is managed using Turborepo.

- `packages/react`: The core UI kit package published to npm (`@siberui/react`).
- `apps/docs`: The Next.js documentation website.

## 📄 License

MIT License © 2026 Siber UI
