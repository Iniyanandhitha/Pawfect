# Pawfect

Pawfect is a pet adoption platform dedicated to connecting loving families with animals in need. It features a modern, user-friendly interface for browsing available pets and facilitating the adoption process.

## Tech Stack

### Frontend
- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** MongoDB / MySQL (using `mongoose` and `mysql2`)
- **Authentication:** JWT (JSON Web Tokens)

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- MongoDB or MySQL database setup.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add necessary variables (PORT, DB_URI, JWT_SECRET, etc.).

4. Start the server:
   - For development (with nodemon):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features
- **Browse Pets:** Filter by species (dog, cat, etc.) to find your perfect match.
- **Pet Details:** View detailed information about each pet.
- **Adoption Process:** Simple steps to apply for adoption.
- **Responsive Design:** Optimized for mobile and desktop devices.
