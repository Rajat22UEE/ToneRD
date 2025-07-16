# toneRD ⚡️

> Effortlessly scaffold beautiful React UI components into your project — with a single command.

![NPM](https://img.shields.io/npm/v/tonerd?color=blue)  
🚀 Built for speed & simplicity · ✨ Pre-styled components · 🧩 Auto-installs `clsx`

---

## ✨ Features

- 📁 Auto-creates `components/ui/` folder
- 🎨 Prebuilt, ready-to-use React components
- 📦 Installs `clsx` if missing
- ✅ Designed for modern React projects (Next.js, Vite, CRA)

---

## 🚀 Quick Start

```bash
npm install tonerd
```

```bash
npx tonerd add Button
```

This will:
1. Check if you're in a valid React project
2. Install `clsx` if not already installed
3. Create a `components/ui/` folder if it doesn’t exist
4. Add `Button.jsx` from our component library

---

## 📂 Folder Structure

After running the command:

```
your-project/
├── components/
│   └── ui/
│       └── Button.jsx  ✅
├── package.json
└── ...
```

---