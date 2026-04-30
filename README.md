# Mini SaaS Template Store

A full-stack web application that allows users to browse premium SaaS templates, favorite them, and manage their personal collection.

## Tech Stack

- **Frontend**: React.js (Vite), TailwindCSS, Axios, React Router, Lucide Icons, Framer Motion
- **Backend**: Node.js, Express.js, JWT, Bcrypt
- **Database**: MongoDB
- **ORM / Query Builder**: Mongoose

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
   cd gnxtace-technologies-intern-task
   ```

2. Install dependencies (Root, Frontend, and Backend):
   ```bash
   # Install root dependencies (concurrently)
   npm install

   # Install frontend dependencies
   cd frontend && npm install

   # Install backend dependencies
   cd ../backend && npm install
   ```

3. Run the Project:
   To run both the frontend and backend servers simultaneously:
   ```bash
   # From the root directory
   npm run dev
   ```

   Alternatively, you can run them individually:
   ```bash
   # Run Frontend only
   npm run frontend

   # Run Backend only
   npm run backend
   ```

## Project Structure

```text
gnxtace-technologies-intern-task/
├── frontend/            # React frontend (Vite + TailwindCSS)
│   ├── src/
│   │   ├── api/         # Axios instance & API calls
│   │   ├── components/  # Reusable UI components
│   │   ├── context/     # Auth state management
│   │   └── pages/       # Page components
├── backend/             # Node.js + Express backend
│   ├── models/          # Mongoose schemas
│   ├── middleware/      # Auth middleware
│   └── routes/          # API endpoints
└── package.json         # Root scripts for concurrent execution
```

## Name & Contact Info

**Name**: SEENUVASAN
**Role**: MERN STACK DEVELOPER

