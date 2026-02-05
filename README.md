# jray.me - Personal Web Space

A simple, clean starting point for your personal website or web projects.

## 🚀 Quick Start

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── index.tsx          # React entry point
├── App.tsx            # Main App component (start editing here!)
├── package.json       # Dependencies and scripts
├── vite.config.ts     # Vite configuration
└── tsconfig.json      # TypeScript configuration
```

## ✏️ How to Add Your Content

1. **Edit the main page**: Open `App.tsx` and modify the content
2. **Add new pages**: Create new `.tsx` files and import them in `App.tsx`
3. **Add static files**: Place images, fonts, etc. in the `public` folder (create it if needed)
4. **Add styles**: Use Tailwind CSS classes or add custom CSS

## 🛠️ Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) via CDN for easy styling. You can use any Tailwind classes in your components.

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

## 🌐 Deploy

You can deploy the `dist` folder to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

---

Made with ❤️ by [jray.me](https://jray.me)
