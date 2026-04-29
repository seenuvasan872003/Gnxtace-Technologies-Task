# Mini SaaS Template Store

A full-stack web application that allows users to browse premium SaaS templates, favorite them, and manage their personal collection.

## Tech Stack

- **Frontend**: React.js (Vite), TailwindCSS, Axios, React Router, Lucide Icons, Framer Motion
- **Backend**: Node.js, Express.js, JWT, Bcrypt
- **Database**: SQLite3
- **ORM / Query Builder**: Knex.js

## Features

- **Authentication**: Secure user registration and login with JWT.
- **Templates Directory**: Browse a curated list of templates with search and category filtering.
- **Favorites System**: Toggle templates as favorites (for logged-in users).
- **Personal Collection**: View all favorited templates in a dedicated section.
- **Responsive Design**: Premium UI/UX with glassmorphism and mobile-first approach.
- **Protected Routes**: Ensuring only authorized users can access personal sections.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fullstack-intern-task.git
   cd fullstack-intern-task
   ```

2. Setup Backend:
   ```bash
   cd server
   npm install
   # Create a .env file (optional, defaults provided in code)
   # Run migrations and seeds
   npx knex migrate:latest
   npx knex seed:run
   # Start server
   npm run dev (if nodemon installed) or node index.js
   ```

3. Setup Frontend:
   ```bash
   cd ../client
   npm install
   # Start development server
   npm run dev
   ```

### Database Schema

- **Users**: `id`, `email`, `password`, `name`, `timestamps`
- **Templates**: `id`, `name`, `description`, `thumbnail_url`, `category`, `timestamps`
- **Favorites**: `id`, `user_id`, `template_id`, `timestamps`

## Project Structure

```text
fullstack-intern-task/
├── client/              # React frontend
│   ├── src/
│   │   ├── api/         # Axios instance
│   │   ├── components/  # Reusable UI components
│   │   ├── context/     # Auth state management
│   │   └── pages/       # Page components
└── server/              # Express backend
    ├── db/              # Knex migrations, seeds, and SQLite
    ├── middleware/      # Auth middleware
    └── routes/          # API endpoints
```

## Name & Contact Info

**Name**: Antigravity
**Role**: AI Coding Assistant (representing the task completion)
