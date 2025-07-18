# Dharun S - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with smooth animations and comprehensive sections for showcasing skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all device sizes
- **Dark/Light Mode**: Theme switching capability
- **Interactive Sections**: Home, About, Projects, Skills, Resume, Contact
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Shadcn/UI
- **Build Tool**: Vite
- **Hosting**: Firebase Hosting

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dharun-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## 🔧 Build & Deploy

### Local Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build:client
```

### Firebase Deployment

1. **First-time setup** (if not already configured):
```bash
firebase login
firebase init hosting
```

2. **Deploy to Firebase**:
```bash
npm run firebase:deploy
```

3. **Local Firebase testing**:
```bash
npm run firebase:serve
```

## 🌐 Firebase Hosting Setup

The project is configured for Firebase Hosting with:
- Static file serving from `dist/public`
- SPA routing support
- Optimized caching headers
- Clean URLs enabled

### Firebase Configuration

- **Project ID**: `dharun-portfolio`
- **Public Directory**: `dist/public`
- **Build Command**: `npm run build:client`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   └── lib/           # Utilities
│   └── public/            # Static assets
├── server/                # Backend (for development)
├── shared/               # Shared types and schemas
└── dist/                 # Build output
```

## 🎨 Customization

### Colors & Theme
- Edit `tailwind.config.ts` for color scheme
- Modify `client/src/index.css` for CSS variables

### Content
- Update personal information in page components
- Replace images in `client/public/lovable-uploads/`
- Modify project data in `client/src/pages/Projects.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with proper alt text
- Clean URLs and proper routing

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: dharunshanmugavel12@gmail.com
- **LinkedIn**: [Dharun Shanmugavel](https://www.linkedin.com/in/dharun-shanmugavel-bb7304315)
- **GitHub**: [havoc-dharun](https://github.com/havoc-dharun)

---

Built with ❤️ by Dharun S