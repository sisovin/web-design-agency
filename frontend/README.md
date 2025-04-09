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

## Technology Stack

Our frontend is built with modern technologies to ensure optimal performance and developer experience:

- **React**: UI library for building component-based interfaces
- **TypeScript**: For type safety and better developer experience
- **React Router**: Client-side routing for single-page application
- **Axios**: For making HTTP requests to our backend API
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Query**: Data fetching and state management
- **Vite**: Fast build tool for modern web development

## Getting Started

### Prerequisites

- Node.js (v16.x or later)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/your-org/web-design-agency.git
   cd web-design-agency/frontend
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Development Practices

### Component Structure

- Components follow a functional approach with hooks
- Each component has its own folder with related styles and tests
- Shared components live in the `components` directory
- Feature-specific components live in their respective feature folders

### State Management

- React Context for global state (auth, theme)
- React Query for server state
- Local component state for UI-specific state

### Styling

- Tailwind CSS for utility-based styling
- Global styles defined in `styles/globals.css`
- Component-specific styles when needed

### Testing

- Jest for unit and integration tests
- React Testing Library for component tests
- Cypress for end-to-end tests

## Building for Production

```bash
npm run build
# or
yarn build
```

The build outputs will be in the `dist` directory.

## Contributing

Please see our [CONTRIBUTING.md](../CONTRIBUTING.md) file for details on our code of conduct and the process for submitting pull requests.
