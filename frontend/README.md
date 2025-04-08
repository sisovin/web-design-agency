# Web Design Agency

This is a comprehensive Web Design Agency system designed to streamline the operations of an agency. The system is built using modern technologies and follows best practices in software development.

---

## **Frontend Structure** (`/frontend`)
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