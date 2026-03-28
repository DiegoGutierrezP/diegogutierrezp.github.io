# 🚀 Diego Gutierrez - Portfolio

A modern, responsive portfolio website built with **Astro**, **React**, and **Tailwind CSS**. Showcasing projects, experience, skills, and certifications of a Full Stack Developer.

## ✨ Features

- **🌐 Multilingual Support** - English, Spanish, and Chinese language selector
- **📱 Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance** - Built with Astro for optimal speed and SEO
- **🎨 Modern UI/UX** - Clean, minimalist design with smooth animations
- **🔦 Dark Mode Ready** - Tailored for dark backgrounds
- **♿ Accessible** - WCAG compliant with proper semantic HTML
- **🎯 Interactive Components** - Smooth language switching and navigation

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generation
- **UI Components**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & CSS Modules
- **Icons**: [Astro Icon](https://www.astro-icon.dev/)
- **Language**: TypeScript
- **Package Manager**: npm

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.astro           # Navigation header with language selector
│   ├── Footer.astro           # Footer with social links
│   ├── ProfileCard.astro      # Main profile presentation
│   ├── Aboutme.astro          # About section with stats
│   ├── Experience.astro       # Work experience section
│   ├── Projects.astro         # Projects showcase
│   ├── Certificates.astro     # Certifications display
│   └── Skills.astro           # Technical skills
├── layouts/
│   └── Layout.astro           # Main layout wrapper
├── pages/
│   └── index.astro            # Home page
├── styles/
│   └── global.css             # Global styles
├── assets/
│   ├── fonts/                 # Custom fonts
│   ├── images/
│   │   ├── certificates/      # Certificate images
│   │   └── languages/         # Language flags (3 options)
│   └── profile.png            # Profile picture
└── i18n/
    └── ui.ts                  # Translation strings (EN, ES, ZH)
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 22.12.0
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portafolio-devdiego-2026.git
   cd portafolio-devdiego-2026
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🌍 Multilingual Setup

The portfolio supports three languages:
- **English (EN)** - Default language
- **Español (ES)** - Spanish
- **中文 (ZH)** - Chinese

Language preferences are stored in browser localStorage and persist across sessions.

### Adding New Translations

Edit [`src/i18n/ui.ts`](src/i18n/ui.ts):

```typescript
export const ui = {
  en: {
    "key.name": "English text",
  },
  es: {
    "key.name": "Texto en español",
  },
};
```

## 🎨 Customization

### Colors
Update CSS variables in component styles or global CSS:
- `--color-primary: #5a5cf3e0` - Primary accent color
- `--color-background-secondary` - Secondary background
- `--font-montserrat` - Main font family

### Images
Replace images in `src/assets/images/`:
- `profile.png` - Your profile picture (circular, 230x230px recommended)
- Language flags in `languages/` directory

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🚢 Deployment

### Deploy to Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Deploy to Vercel
```bash
# Connect your GitHub repository to Vercel
# Automatic deployments on push
```

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **SEO Optimized**: Meta tags, canonical URLs, structured data
- **Fast First Paint**: Optimized assets and lazy loading

## 📄 Sections

### About Me
Professional introduction with key statistics:
- Years of experience
- Projects completed
- Technologies mastered
- Certifications obtained

### Experience
Detailed work history and professional background

### Projects
Showcase of recent and notable projects with descriptions

### Skills
Display of technical competencies and expertise

### Certificates
Professional certifications and credentials

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **GitHub**: [DiegoGutierrezP](https://github.com/DiegoGutierrezP)
- **LinkedIn**: [Diego Gutierrez Pineda](https://www.linkedin.com/in/diego-gutierrez-pineda-82779322b/)
- **Email**: diego.gup.75@gmail.com

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ by Diego Gutierrez - 2026**

