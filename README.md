# Web Design Agency

This repository contains the codebase for a web design agency application. The application is divided into three main parts: backend, frontend, and shared components.

## Repository Structure

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

## Setting Up the Backend

1. Clone the repository:
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank/backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory and add the required environment variables. Refer to `src/config/env.ts` for the list of required variables.

4. Start the backend server:
   ```sh
   npm start
   ```

## Setting Up the Frontend

1. Navigate to the `frontend` directory:
   ```sh
   cd ../frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend app:
   ```sh
   npm start
   ```

## Running Tests

1. Navigate to the `backend` or `frontend` directory, depending on which tests you want to run.

2. Run the tests:
   ```sh
   npm test
   ```
