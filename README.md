# ByteSpace - Modern EdTech & Creative Learning Platform

ByteSpace is an ultra-modern, high-performance web platform designed for tech enthusiasts, creative professionals, and lifelong learners. It provides an intuitive, responsive interface for exploring cutting-edge courses, discovering top-tier creators, and mastering industry-demanded skills.

🔗 **Live Demo:** [https://bytespace-website.vercel.app](https://bytespace-website.vercel.app/)

---

## 🌟 Key Features

- **Dynamic Homepage**: High-impact hero section, partner logos, curated course categories, testimonials, and growth statistics.
- **Advanced Course Search & Filtering**: Real-time course exploration with multi-level filtering (category, skill level, rating) and smart sorting.
- **Creator Showcase & Profiles**: Dedicated creator portfolios with course listings, bio details, and follower stats.
- **Detailed Course Pages**: Comprehensive syllabus breakdown, curriculum accordion, instructor details, student reviews, and preview player.
- **Authentication Pages**: Sleek, modern Sign In and Sign Up pages with custom branded illustration graphics.
- **Responsive & Accessible**: Pixel-perfect layout across mobile, tablet, and widescreen desktop monitors.
- **Vercel-Ready SPA Routing**: Fully configured client-side routing with clean URL fallbacks.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons & Graphics**: Custom SVG illustrations & Phosphor/Lucide inspired vector icons
- **Fonts**: *Plus Jakarta Sans*, *Poppins*, and *Satoshi* via Google Fonts & Fontshare
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/asmaraf/bytespace-website.git
   cd bytespace-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Project Architecture

```
bytespace-website/
├── public/                 # Static assets, SVG icons, course illustrations
│   └── assets/
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, ByteSpaceLogo, etc.)
│   ├── data/               # Course catalog & categories data models
│   ├── pages/              # Primary route views (HomePage, SearchPage, CreatorPage, etc.)
│   ├── App.jsx             # Route definitions & scroll restoration
│   ├── index.css           # Global Tailwind and font styles
│   └── main.jsx            # Application entry point
├── vercel.json             # SPA routing rewrite configuration
└── vite.config.js          # Vite configuration with React & Tailwind plugins
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
