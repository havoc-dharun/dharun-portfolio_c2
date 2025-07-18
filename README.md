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
- **Hosting**: Netlify

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

### Netlify Deployment

#### Option 1: Drag & Drop Deployment (Easiest)

1. **Build the project**:
```bash
npm run build:client
```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Drag and drop the `dist/public` folder to Netlify
   - Your site will be live instantly!

#### Option 2: Git-based Deployment (Recommended)

1. **Push your code to GitHub**
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build:client`
   - Set publish directory: `dist/public`
   - Deploy!

#### Option 3: Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build and deploy**:
```bash
npm run build:client
netlify deploy --prod --dir=dist/public
```

### Local Preview
```bash
npm run preview
```

## 🌐 Netlify Hosting Setup

The project is configured for Netlify hosting with:
- Static file serving from `dist/public`
- SPA routing support with `_redirects`
- Optimized caching headers via `netlify.toml`
- Automatic builds from Git
- Custom domain support
- HTTPS enabled by default

### Netlify Configuration

- **Site Name**: `dharun-s-portfolio` (will be available at `dharun-s-portfolio.netlify.app`)
- **Public Directory**: `dist/public`
- **Build Command**: `npm run build:client`
- **Node Version**: 20

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

## 🚀 Live Demo

Visit the live site: [dharun-s-portfolio.netlify.app](https://dharun-s-portfolio.netlify.app)

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