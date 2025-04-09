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

## **Installation**

### Prerequisites
- Node.js (v16+)
- PostgreSQL
- Redis (for caching and session management)

### Setup Steps
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/web-design-agency.git
   cd web-design-agency/backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create an `.env` file based on `.env.example`
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in the `.env` file
   ```
   # Server
   PORT=3000
   NODE_ENV=development

   # Database
   DATABASE_URL=postgresql://username:password@localhost:5432/agency_db

   # Redis
   REDIS_URL=redis://localhost:6379

   # JWT
   JWT_SECRET=your-secret-key
   JWT_EXPIRY=24h
   ```

5. Run database migrations
   ```bash
   npm run db:migrate
   ```

6. Start the development server
   ```bash
   npm run dev
   ```

## **Usage**

### API Documentation

The API is organized around REST. All requests should be made to endpoints beginning with `/api/v1/`.

#### Authentication

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/v1/auth/register` | POST | Register a new user |
| `/api/v1/auth/login` | POST | Login and receive JWT token |
| `/api/v1/auth/logout` | POST | Logout and invalidate token |
| `/api/v1/auth/refresh` | POST | Refresh access token |

#### User Management

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/v1/user/profile` | GET | Get user profile |
| `/api/v1/user/profile` | PUT | Update user profile |
| `/api/v1/user/password` | PUT | Change password |

#### Services

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/v1/services` | GET | List all services |
| `/api/v1/services/:id` | GET | Get service details |
| `/api/v1/services/:id/request` | POST | Request a service |

#### Admin Operations

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/v1/admin/users` | GET | List all users |
| `/api/v1/admin/services` | POST | Create a service |
| `/api/v1/admin/services/:id` | PUT | Update a service |
| `/api/v1/admin/projects` | GET | List all projects |

## **Technologies Used**

- **Node.js & Express**: Fast, unopinionated, minimalist web framework for Node.js
- **TypeScript**: Static type-checking for enhanced code quality
- **PostgreSQL**: Advanced open-source relational database
- **Drizzle ORM**: Lightweight TypeScript ORM with migrations
- **Redis**: In-memory data structure store for caching and session management
- **JWT**: Secure authentication mechanism
- **Argon2**: Secure password hashing
- **Express Middleware**: For authentication, RBAC, and error handling

## **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.


