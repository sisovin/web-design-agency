# Web Design Agency

This repository contains the codebase for a web design agency application. The application is structured as a monorepo with both backend and frontend components.

## **Root Directory**
```
web-design-agency/
│
├── .github/                                # GitHub configuration
│   └── workflows/                          # CI/CD pipeline configurations
│       ├── deploy.yml
│       └── test.yml
│
├── packages/                               # Monorepo structure using workspaces
│   │
│   ├── backend/                            # Node.js backend
│   │   ├── src/
│   │   │   ├── config/                     # Configuration files
│   │   │   │   ├── database.ts             # Database configuration
│   │   │   │   ├── redis.ts                # Redis configuration
│   │   │   │   └── env.ts                  # Environment variables
│   │   │   │
│   │   │   ├── controllers/                # API controllers
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── projects.controller.ts
│   │   │   │   └── users.controller.ts
│   │   │   │
│   │   │   ├── db/                         # Database related code
│   │   │   │   ├── schema/                 # Drizzle schema definitions
│   │   │   │   │   ├── users.ts
│   │   │   │   │   ├── projects.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── migrations/             # Database migrations
│   │   │   │   └── index.ts                # DB connection handler
│   │   │   │
│   │   │   ├── middleware/                 # Express middleware
│   │   │   │   ├── auth.middleware.ts
│   │   │   │   ├── error.middleware.ts
│   │   │   │   └── logging.middleware.ts
│   │   │   │
│   │   │   ├── routes/                     # API routes
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── projects.routes.ts
│   │   │   │   ├── users.routes.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── services/                   # Business logic
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── projects.service.ts
│   │   │   │   ├── users.service.ts
│   │   │   │   └── email.service.ts
│   │   │   │
│   │   │   ├── utils/                      # Utility functions
│   │   │   │   ├── password.ts             # Argon2 password utilities
│   │   │   │   ├── tokens.ts               # JWT token utilities
│   │   │   │   └── validators.ts           # Input validation
│   │   │   │
│   │   │   ├── websockets/                 # WebSocket handlers
│   │   │   │   ├── socket.ts
│   │   │   │   └── handlers/
│   │   │   │
│   │   │   ├── payment/                    # Payment gateway integrations
│   │   │   │   ├── aba.gateway.ts
│   │   │   │   └── bakong.gateway.ts
│   │   │   │
│   │   │   ├── storage/                    # File storage handlers
│   │   │   │   ├── local.storage.ts
│   │   │   │   └── s3.storage.ts
│   │   │   │
│   │   │   ├── logging/                    # Logging and monitoring
│   │   │   │   ├── logger.ts
│   │   │   │   └── monitor.ts
│   │   │   │
│   │   │   ├── types/                      # Backend-only type definitions
│   │   │   │   └── express.d.ts
│   │   │   │
│   │   │   ├── app.ts                      # Express app setup
│   │   │   └── server.ts                   # Server entry point
│   │   │
│   │   ├── tests/                          # Backend tests
│   │   │   ├── unit/
│   │   │   ├── integration/
│   │   │   └── utils/
│   │   │
│   │   ├── .env.example                    # Example environment variables
│   │   ├── jest.config.js                  # Jest configuration
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── frontend/                           # React/Lynx.js frontend
│   │   ├── public/                         # Static assets
│   │   │   ├── locales/                    # i18n translation files
│   │   │   │   ├── en/
│   │   │   │   └── km/
│   │   │   ├── images/
│   │   │   └── favicon.ico
│   │   │
│   │   ├── src/
│   │   │   ├── components/                 # Shared UI components
│   │   │   │   ├── common/
│   │   │   │   │   ├── Button/
│   │   │   │   │   ├── Input/
│   │   │   │   │   └── Modal/
│   │   │   │   ├── layout/
│   │   │   │   │   ├── Header/
│   │   │   │   │   ├── Footer/
│   │   │   │   │   └── Sidebar/
│   │   │   │   └── forms/
│   │   │   │
│   │   │   ├── hooks/                      # Custom React hooks
│   │   │   │   ├── useAuth.ts
│   │   │   │   └── useApi.ts
│   │   │   │
│   │   │   ├── pages/                      # Page components
│   │   │   │   ├── Home/
│   │   │   │   ├── Auth/
│   │   │   │   │   ├── Login.tsx
│   │   │   │   │   └── Register.tsx
│   │   │   │   ├── Services/
│   │   │   │   └── Contact/
│   │   │   │
│   │   │   ├── features/                   # Feature-specific components
│   │   │   │   ├── admin/                  # Admin dashboard
│   │   │   │   │   ├── components/
│   │   │   │   │   ├── pages/
│   │   │   │   │   └── routes.tsx
│   │   │   │   │
│   │   │   │   └── user/                   # User dashboard
│   │   │   │       ├── components/
│   │   │   │       ├── pages/
│   │   │   │       └── routes.tsx
│   │   │   │
│   │   │   ├── services/                   # API service calls
│   │   │   │   ├── api.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── projects.service.ts
│   │   │   │
│   │   │   ├── store/                      # State management
│   │   │   │   ├── slices/
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── styles/                     # Lynx CSS styles
│   │   │   │   ├── global.css
│   │   │   │   ├── variables.css
│   │   │   │   └── components/
│   │   │   │
│   │   │   ├── utils/                      # Frontend utility functions
│   │   │   │   ├── formatting.ts
│   │   │   │   └── validation.ts
│   │   │   │
│   │   │   ├── i18n/                       # Internationalization setup
│   │   │   │   ├── config.ts
│   │   │   │   └── translations/
│   │   │   │
│   │   │   ├── App.tsx                     # Main application component
│   │   │   ├── main.tsx                    # Application entry point
│   │   │   └── routes.tsx                  # Main route definitions
│   │   │
│   │   ├── tests/                          # Frontend tests
│   │   │   ├── unit/
│   │   │   ├── integration/
│   │   │   └── utils/
│   │   │
│   │   ├── .storybook/                     # Storybook configuration
│   │   │   ├── main.js
│   │   │   └── preview.js
│   │   │
│   │   ├── jest.config.js                  # Jest configuration
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── shared/                             # Shared code between frontend and backend
│       ├── src/
│       │   ├── types/                      # Shared type definitions
│       │   │   ├── user.types.ts
│       │   │   ├── project.types.ts
│       │   │   └── index.ts
│       │   │
│       │   ├── constants/                  # Shared constants
│       │   │   ├── routes.ts
│       │   │   └── errors.ts
│       │   │
│       │   ├── utils/                      # Shared utility functions
│       │   │   ├── formatting.ts
│       │   │   └── validation.ts
│       │   │
│       │   └── global.d.ts                 # Global type declarations
│       │
│       ├── package.json
│       └── tsconfig.json
│
├── docker-compose.dev.yml                  # Development Docker setup (optional)
├── .eslintrc.js                            # ESLint configuration
├── .prettierrc                             # Prettier configuration
├── .gitignore
├── package.json                            # Root package.json for workspaces
├── tsconfig.base.json                      # Base TypeScript configuration
└── README.md                               # Project documentation
```

### **Backend Structure** (`/backend`)

```
web-design-agency/
├── backend/                  # Node.js + Express + Drizzle ORM (API server)
├── src/
│   ├── config/               # Environment and third-party service configs
│   │   ├── env.ts            # Validate and export environment variables
│   │   ├── redis.ts          # Redis client setup
│   │   └── db.ts             # Drizzle ORM PostgreSQL connection
│   │
│   ├── schema/               # Drizzle ORM database schemas
│   │   ├── users.ts          # User table schema
│   │   ├── projects.ts       # Agency projects schema
│   │   └── services.ts       # Services offered schema
│   │
│   ├── controllers/          # Route handlers (business logic)
│   │   ├── auth.controller.ts
│   │   ├── user.controller.ts
│   │   ├── admin.controller.ts
│   │   └── services.controller.ts
│   │
│   ├── middleware/           # Express middleware
│   │   ├── auth.middleware.ts # JWT validation
│   │   ├── rbac.middleware.ts # Role-based access control
│   │   └── error.middleware.ts # Global error handler
│   │
│   ├── routes/               # Express routers
│   │   ├── auth.routes.ts    # /auth/*
│   │   ├── user.routes.ts    # /user/*
│   │   ├── admin.routes.ts   # /admin/*
│   │   └── services.routes.ts # /services/*
│   │
│   ├── utils/                # Reusable utility functions
│   │   ├── argon2.ts         # Password hashing
│   │   ├── jwt.ts            # JWT helpers (sign, verify)
│   │   └── cache.ts          # Redis cache wrappers
│   │
│   ├── jobs/                 # Background tasks (optional)
│   │   └── cleanup.job.ts    # Example: remove expired sessions
│   │
│   ├── app.ts                # Express app setup
│   └── server.ts             # App server entry point
│
├── package.json              # Backend dependencies and scripts
└── tsconfig.json             # Backend TypeScript configuration
├── frontend/                 # Lynx.js (React-based) + TypeScript (Client app)
├── shared/                   # Shared types, constants (optional but recommended)
├── .gitignore
├── package.json              # Monorepo scripts (optional)
└── README.md
```

## Setup Instructions

### Backend

1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```

2. Set up environment variables:
   - Create a `.env` file in the `backend` directory and add the required environment variables. Refer to `src/config/env.ts` for the variables needed.

3. Set up the database:
   - Ensure you have PostgreSQL installed and running.
   - Create a database and update the connection details in `src/config/db.ts`.

4. Set up Redis:
   - Ensure you have Redis installed and running.
   - Update the connection details in `src/config/redis.ts`.

## Frontend

### **Frontend Structure** (`/frontend`)
```
frontend/
├── public/                   # Static files
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   ├── assets/               # Images, icons, logos
│   │   └── logo.svg
│   │
│   ├── components/           # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ProjectCard.tsx
│   │
│   ├── features/             # Feature-based folders
│   │   ├── auth/             # Login/Register pages and logic
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── auth.api.ts   # API calls for auth
│   │   │
│   │   ├── dashboard/        # User dashboard (manage projects/services)
│   │   │   ├── Dashboard.tsx
│   │   │   └── dashboard.api.ts
│   │   │
│   │   ├── services/         # Public services listing
│   │   │   ├── ServicesPage.tsx
│   │   │   └── services.api.ts
│   │   │
│   │   └── admin/            # Admin panel
│   │       ├── AdminDashboard.tsx
│   │       └── admin.api.ts
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useServices.ts
│   │
│   ├── lib/                  # API clients, fetchers, utils
│   │   ├── apiClient.ts      # Fetch wrapper (e.g., Axios, Fetch API)
│   │   └── validators.ts     # Form validators
│   │
│   ├── pages/                # App pages (Next.js-like routing or Lynx routing)
│   │   ├── index.tsx         # Home page
│   │   ├── login.tsx         # Login page
│   │   ├── register.tsx      # Register page
│   │   ├── services.tsx      # List services
│   │   └── dashboard.tsx     # User dashboard
│   │
│   ├── providers/            # Context providers
│   │   ├── AuthProvider.tsx
│   │   └── ThemeProvider.tsx
│   │
│   ├── router/               # Routing configuration
│   │   └── index.tsx
│   │
│   ├── styles/               # Global and component-level styles (CSS, Tailwind, etc.)
│   │   └── globals.css
│   │
│   ├── types/                # TypeScript types/interfaces
│   │   └── index.ts
│   │
│   ├── App.tsx               # App root component
│   └── main.tsx              # Frontend entry point
│
├── package.json              # Frontend dependencies and scripts
└── tsconfig.json             # Frontend TypeScript configuration
```

---

2. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `frontend` directory and add the required environment variables.

---

## **Shared Structure** (`/shared`) (optional but good for consistency)
```
shared/
├── types/                    # Shared types between backend and frontend
│   ├── user.ts
│   ├── project.ts
│   └── service.ts
│
├── constants/                # Global constants (e.g., user roles, API endpoints)
│   └── roles.ts
│
└── utils/                    # Shared utilities (optional)
    └── formatDate.ts
```

## Running the Application

### Backend

1. Start the backend server:
   ```sh
   cd backend
   npm start
   ```

### Frontend

1. Start the frontend app:
   ```sh
   cd frontend
   npm start
   ```

## Running Tests

### Backend

1. Run backend tests:
   ```sh
   cd backend
   npm test
   ```

### Frontend

1. Run frontend tests:
   ```sh
   cd frontend
   npm test
   ```
