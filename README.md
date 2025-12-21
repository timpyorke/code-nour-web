# Code Nour

A minimalist product showcase website inspired by Procreate's design philosophy. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎯 Design Philosophy

- **Minimal & Clean** - No unnecessary decorations, focused on content
- **Confident Copy** - Short, direct messaging
- **Product-First** - Showcasing apps, not services
- **Smooth Interactions** - Subtle hover effects and transitions

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Components**: Modular, reusable architecture

## 📁 Project Structure

```
code-nour-web/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── header.tsx          # Navigation component
│   ├── footer.tsx          # Footer component
│   ├── product-card.tsx    # Product card component
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── products.ts         # Product data & types
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🏗️ Architecture

### Data Layer

- Centralized product data in `lib/products.ts`
- TypeScript interfaces for type safety
- Easy to add/modify products

### Component Layer

- Reusable components in `components/`
- Shared Header and Footer across pages
- ProductCard component with dynamic rendering

### Page Layer

- Single homepage showcasing products
- Clean, declarative code structure
- Uses `.map()` for dynamic product rendering

## 🎨 Featured Products

1. **Find Parking** - Never circle for parking again
2. **Image Converter** - Convert any format instantly
3. **Cozy Sound** - Ambient sounds for focus
4. **Financial Planning** - Track spending, plan ahead
5. **Sunday Super League** - Organize your local league
6. **Travel Guide** - Explore cities like a local

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Key Features

- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **Type Safety** - Full TypeScript support
- **Performance** - Optimized Next.js with App Router
- **Clean Code** - DRY principles, modular components
- **Maintainable** - Easy to update products and content
- **Accessible** - Semantic HTML and proper focus states

## 🎯 Code Quality

- **84% code reduction** in main page (243 → 38 lines)
- **Zero duplication** - Reusable components
- **Type-safe** - Full TypeScript coverage
- **Production-ready** - Following React/Next.js best practices

## 📝 License

© 2025 Code Nour. All rights reserved.
