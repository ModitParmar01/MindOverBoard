# Chess Game

A full-stack chess game built using **TypeScript** with **Node.js** for the backend and **Vite + React** for the frontend. The project utilizes the `.chess` library for game logic and **React Router** for navigation.

## Features

- Play chess with interactive UI
- Move validation using `.chess` library
- Backend API for game state management
- Modern React frontend with Vite
- Routing with React Router

## Tech Stack

### Frontend:
- React (Vite)
- TypeScript
- React Router
- .chess library

### Backend:
- Node.js
- Express
- TypeScript
- .chess library

## Installation & Setup

### Prerequisites
Ensure you have **Node.js** and **npm** installed.

### Clone the Repository
```sh
git clone https://github.com/ModitParmar01/MindOverBoard.git
cd MindOverBoard
```

### Install Dependencies
#### Backend
```sh
cd backend
npm install
```

#### Frontend
```sh
cd ../frontend
npm install
```

### Running the Application
#### Start Backend Server
```sh
cd backend
tsc -b
node .\dist\index.js
```

#### Start Frontend Server
```sh
cd frontend
npm run dev
```

The application should now be running on `http://localhost:5173` (default Vite port).

