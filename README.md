# Web Design Agency

This repository contains the codebase for a web design agency application. The application is structured as a monorepo with both backend and frontend components.

## **Root Directory**
```
web-design-agency/
├── backend/                  # Node.js + Express + Drizzle ORM (API server)
├── frontend/                 # Lynx.js (React-based) + TypeScript (Client app)
├── shared/                   # Shared types, constants (optional but recommended)
├── .gitignore
├── package.json              # Monorepo scripts (optional)
└── README.md
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
