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

### Development
```bash
npm run dev
```

### Build
```bash
npm run build:client
```

## 🚀 Netlify Deployment (Git Integration)

### Step 1: Push to GitHub

1. **Initialize Git repository** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Dharun S Portfolio"
```

2. **Create GitHub repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `dharun-s-portfolio`
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/dharun-s-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. **Go to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your GitHub account

2. **Import your project**:
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select `dharun-s-portfolio` repository

3. **Configure build settings**:
   - **Site name**: `dharun-s-portfolio` (or leave blank for auto-generated)
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build:client`
   - **Publish directory**: `dist/public`
   - **Node version**: `20` (set in Environment variables)

4. **Deploy**:
   - Click "Deploy site"
   - Your site will be live at `https://dharun-s-portfolio.netlify.app`

### Step 3: Automatic Deployments

✨ **That's it!** Now every time you push to GitHub:
1. Netlify automatically detects the changes
2. Runs `npm run build:client`
3. Deploys the updated site
4. Your live site updates automatically!

### Alternative Deployment Options

#### Option 1: Drag & Drop (Quick Test)

1. **Build the project**:
```bash
npm run build:client
```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/public` folder to Netlify
   - Your site will be live instantly!

#### Option 3: Netlify CLI (Advanced)

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build and deploy**:
```bash
npm run build:client
netlify deploy --prod --dir=dist/public
```

## 🔄 Development Workflow

1. **Make changes** to your code
2. **Test locally**:
```bash
npm run dev
```
3. **Commit and push**:
```bash
git add .
git commit -m "Update: description of changes"
git push
```
4. **Automatic deployment** - Netlify will automatically deploy your changes!

### Local Preview of Production Build
```bash
npm run preview
```

## 🌐 Live Site

Your portfolio will be available at:
- **Primary URL**: `https://dharun-s-portfolio.netlify.app`
- **Custom Domain**: You can add your own domain in Netlify settings

## 🔧 Netlify Features

Your project is configured with:
- Static file serving from `dist/public`
- SPA routing support with `_redirects`
- Optimized caching headers via `netlify.toml`
- Automatic builds from Git
- Custom domain support
- HTTPS enabled by default
- Form handling for contact form
- Deploy previews for pull requests

### Build Configuration

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