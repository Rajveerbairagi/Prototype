# RGPV AI Exam Assistant

## Overview

The RGPV AI Exam Assistant is a comprehensive educational platform designed specifically for RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya) university students. The platform provides AI-powered exam preparation tools including an interactive chat assistant, syllabus browser, previous year papers repository, and study resources. Built with modern web technologies, it offers a clean, accessible interface focused on student learning and exam success.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing instead of React Router
- Single Page Application (SPA) architecture with route-based code splitting

**UI Component System**
- Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system following "New York" style variant with educational focus
- Typography hierarchy using Inter font family for readability
- Generous whitespace and clear information hierarchy optimized for student learning

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- Local component state with React hooks for UI state
- Query client configured with infinite stale time and disabled refetching for static educational content

**Design Philosophy**
- Design System-Based approach inspired by Notion and educational platforms
- Clarity over decoration - every element serves student learning
- Consistent, predictable patterns to reduce cognitive load
- Professional yet approachable tone suitable for university students

### Backend Architecture

**Server Framework**
- Express.js with TypeScript running on Node.js
- ESM (ECMAScript Modules) throughout the codebase
- Custom middleware for request logging and JSON body parsing
- Development mode with Vite integration for SSR template handling

**API Structure**
- RESTful API endpoints under `/api` prefix
- `/api/chat` - POST endpoint for AI-powered chat interactions
- `/api/syllabus` - GET endpoint for retrieving all subjects
- `/api/syllabus/:id` - GET endpoint for specific subject details
- `/api/papers` - GET endpoint for previous year papers listing
- Zod schema validation for request/response type safety

**AI Integration**
- Google Generative AI (Gemini 2.5 Flash) for intelligent responses
- System prompts tailored for RGPV syllabus topics (Data Structures, DBMS, OS, Networks)
- Educational tone and exam-focused response formatting
- Error handling with fallback messages for API failures

**Data Layer**
- In-memory storage implementation (`MemStorage`) for syllabus and papers data
- Interface-based storage abstraction (`IStorage`) allowing future database integration
- Structured data models for subjects, topics, subtopics, and previous year papers

### Data Storage Solutions

**Current Implementation**
- In-memory data store using TypeScript classes and arrays
- Pre-populated with RGPV-specific syllabus content for Computer Science subjects
- No database persistence - data resets on server restart

**Database Configuration (Prepared but Unused)**
- Drizzle ORM configured for PostgreSQL integration
- Neon Database serverless connector prepared in dependencies
- Schema definitions in `shared/schema.ts` ready for migration
- Migration scripts configured via `drizzle-kit` with `db:push` command
- **Note:** While Drizzle is configured, the application currently uses in-memory storage and does not require PostgreSQL to run

**Session Management**
- Session store configured with `connect-pg-simple` for PostgreSQL-backed sessions (when database is added)
- Express session middleware ready for user authentication flows

### External Dependencies

**AI Services**
- **Google Generative AI (Gemini)**: Primary LLM for chat responses and exam assistance
  - API Key required via `GEMINI_API_KEY` environment variable
  - Model: `gemini-2.5-flash` optimized for educational content
  - System instructions configure assistant as RGPV exam specialist

**UI Component Libraries**
- **Radix UI**: Unstyled, accessible component primitives (26+ components)
  - Accordion, Dialog, Dropdown, Popover, Select, Tabs, Toast, Tooltip, etc.
  - Ensures WCAG compliance and keyboard navigation

**Styling & Design**
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Component variant management
- **clsx + tailwind-merge**: Conditional className composition
- **Google Fonts**: Inter (primary) and JetBrains Mono (code) typefaces

**Development Tools**
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner for Replit environment
- **TypeScript**: Strict type checking with path aliases for imports
- **ESBuild**: Production bundling for server code
- **TSX**: TypeScript execution for development server

**Future Database Integration**
- **Neon Database**: Serverless PostgreSQL (prepared via `@neondatabase/serverless`)
- **Drizzle ORM**: Type-safe SQL query builder and migration tool
- **connect-pg-simple**: PostgreSQL session store for Express sessions

**Data Validation**
- **Zod**: Runtime type validation for API requests and responses
- **drizzle-zod**: Integration between Drizzle schemas and Zod validators

**Utilities**
- **date-fns**: Date formatting and manipulation
- **nanoid**: Unique ID generation for sessions and entities
- **wouter**: Lightweight routing library (alternative to React Router)