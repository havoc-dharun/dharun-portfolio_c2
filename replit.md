# Replit.md

## Overview

This is a modern full-stack web application built as a personal portfolio for Dharun S. The application showcases a professional portfolio with sections for home, about, projects, skills, resume, and contact information. It features a React-based frontend with a Node.js/Express backend, configured for PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: React Router for client-side navigation
- **UI Library**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite for fast development and building

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure (routes prefixed with `/api`)
- **Development**: Hot reload with Vite middleware integration
- **Error Handling**: Centralized error middleware

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migration**: Drizzle Kit for schema management
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`

## Key Components

### UI Components
- **Design System**: Shadcn/UI with New York style variant
- **Components**: Comprehensive set including forms, navigation, cards, dialogs
- **Theme**: Light/dark mode support with CSS variables
- **Responsive**: Mobile-first design with Tailwind breakpoints

### Application Pages
- **Home**: Hero section with social links and call-to-actions
- **About**: Education, certifications, and achievements
- **Projects**: Showcase of development projects with tech stacks
- **Skills**: Interactive skills display with proficiency levels
- **Resume**: Multiple resume versions for different roles
- **Contact**: Contact form with Formspree integration
- **Tool Detail**: Dynamic pages for individual skill/tool details

### Storage Interface
- **Abstraction**: IStorage interface for CRUD operations
- **Implementation**: MemStorage class for in-memory development storage
- **User Management**: Basic user creation and retrieval methods
- **Extensible**: Ready for database integration

## Data Flow

### Client-Server Communication
1. React frontend makes API calls to Express backend
2. Backend processes requests through route handlers
3. Storage layer handles data persistence operations
4. Responses sent back to frontend with JSON format
5. TanStack Query manages caching and synchronization

### Development Workflow
1. Vite serves React application in development
2. Express middleware handles API routes
3. Hot reload for both frontend and backend changes
4. TypeScript compilation for type safety
5. Shared types between frontend and backend

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-router-dom**: Client-side routing

### UI and Styling
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

### Form and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Static Assets**: Served from built frontend directory

### Environment Configuration
- **Development**: `NODE_ENV=development` with tsx for hot reload
- **Production**: `NODE_ENV=production` with compiled JavaScript
- **Database**: `DATABASE_URL` environment variable required
- **Replit Integration**: Cartographer plugin for development tools

### Deployment Commands
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build both frontend and backend for production
- `npm run start`: Start production server
- `npm run db:push`: Apply database schema changes

### Architecture Benefits
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Developer Experience**: Hot reload, error overlays, and fast builds
- **Scalability**: Modular architecture ready for database integration
- **Performance**: Optimized builds with tree shaking and code splitting
- **Maintainability**: Clear separation of concerns and consistent patterns