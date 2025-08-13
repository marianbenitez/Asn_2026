# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Asociación Sanjuanina de Nutrición platform - a web application for managing a nutrition professionals association. It consists of a PHP backend API and an Astro/React frontend.

## Architecture

**Monorepo Structure:**
- `Back_asn/` - CodeIgniter 4 REST API backend
- `Front_asn/` - Astro + React + TailwindCSS frontend

**Communication:** Frontend consumes REST API endpoints with token-based authentication.

## Development Commands

### Backend (Back_asn/)

**Setup and Dependencies:**
```bash
cd Back_asn
composer install
php spark shield:setup
php spark migrate
php spark db:seed SetupSeeder
php spark db:seed HonorariosSeeder
```

**Development Server:**
```bash
php spark serve --host=0.0.0.0 --port=8080
```

**Testing:**
```bash
composer test
# or
./vendor/bin/phpunit
```

**Database Operations:**
```bash
php spark migrate           # Run migrations
php spark migrate:rollback  # Rollback migrations
php spark db:seed [SeederName]  # Run specific seeder
```

### Frontend (Front_asn/)

**Setup and Dependencies:**
```bash
cd Front_asn
npm install
```

**Development:**
```bash
npm run dev     # Development server (usually port 4321)
npm run build   # Production build
npm run preview # Preview build
```

## Database Configuration

- **Database:** MySQL/MariaDB named `asn`
- **Default Port:** 3307 (configured in Back_asn/app/Config/Database.php)
- **Host:** 127.0.0.1
- **User:** root (modify per environment)

## Key API Endpoints

**Public Endpoints:**
- `POST /api/login` - User authentication
- `GET /api/honorarios` - Get all honorarios (minimum fees)
- `GET /api/honorarios/configuracion` - Get current ASMENUT configuration
- `GET /api/test` - Public test endpoint

**Protected Endpoints (require auth token):**
- `GET /api/users` - List users
- `POST /api/users` - Create user
- `GET /api/admin/users/*` - User management (admin only)
- `POST /api/admin/honorarios/*` - Honorarios management (admin only)

## Authentication System

Uses CodeIgniter Shield for authentication with token-based API access. Default admin credentials:
- Email: `admin@asn.com`
- Password: `Admin123!`

## Environment Configuration

**Backend:** Copy `env` to `.env` and configure database, baseURL, and other settings.

**Frontend:** Configure API URL in `src/config/env.ts`:
```typescript
API_URL: import.meta.env.PUBLIC_API_URL || 'http://localhost:8080/api'
```

## Core Features

1. **User Management** - Registration, authentication, role-based access
2. **Honorarios System** - Professional fees management with ASMENUT calculations
3. **Admin Panel** - User management, statistics, system configuration
4. **Association Pages** - Information, contact forms, membership

## Key Files to Understand

**Backend:**
- `app/Config/Routes.php` - API route definitions
- `app/Controllers/Api/` - API controllers
- `app/Models/` - Database models
- `app/Database/Migrations/` - Database schema
- `app/Database/Seeds/` - Initial data setup

**Frontend:**
- `src/pages/` - Astro page routes
- `src/components/` - React components
- `src/services/api.js` - API communication layer
- `src/config/env.ts` - Environment configuration

## Special Setup Files

- `ADMIN_SETUP.md` - Detailed admin user setup instructions
- `HONORARIOS_SETUP.md` - Honorarios system configuration guide

## Testing

Backend includes PHPUnit tests in `tests/` directory. Run with `composer test` or `./vendor/bin/phpunit`.

## Common Workflow

1. Start backend: `cd Back_asn && php spark serve --host=0.0.0.0 --port=8080`
2. Start frontend: `cd Front_asn && npm run dev`
3. Access application at frontend URL (typically http://localhost:4321)
4. API available at http://localhost:8080/api