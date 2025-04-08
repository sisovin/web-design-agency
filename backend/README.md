# Web Design Agency

This is a comprehensive Web Design Agency system designed to streamline the operations of an agency. The system is built using modern technologies and follows best practices in software development.

---

## **Backend Structure** (`/backend`)
```
backend/
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
```


