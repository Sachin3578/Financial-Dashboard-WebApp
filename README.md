# Financial-Dashboard-WebApp
💰 Financial Dashboard – Full Stack Project
A modern full-stack financial dashboard built with React (Vite + TypeScript), Node.js + Express, MongoDB Atlas, JWT authentication, and MUI.

📊 Features
🔐 Login with user_id (JWT-based, no password)

📈 Dashboard with interactive income vs expense graph

📦 All transactions table with filters & search

👤 Recent transactions with user avatars

📊 Stat cards for balance, revenue, expenses, and savings

🎨 Modern UI with MUI & responsive layout

🌐 Backend APIs secured using JWT

📬 Postman collection included for API testing

⚙️ Tech Stack
Layer	Technology
Frontend	React + Vite + TypeScript + MUI
Backend	Node.js + Express + TypeScript
Database	MongoDB Atlas
Auth	JWT (no password, just user_id)
Charts	Chart.js (via react-chartjs-2)
API Client	Axios

🚀 Getting Started
🖥️ Clone the Repository
bash
Copy
Edit
git clone 
cd financial-dashboard
🧩 Setup Environment Variables
Backend – backend/.env
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/transaction
JWT_SECRET=your_super_secret_key
🛠️ Project Structure
bash
Copy
Edit
financial-dashboard/
│
├── backend/               # Express backend with TypeScript
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.ts
│
├── frontend/              # React Vite frontend with MUI
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── main.tsx
│
└── README.md
🧪 Postman Collection
📁 Download: financial-dashboard.postman_collection.json
📤 Includes endpoints for:

POST /api/auth/register

POST /api/auth/login

GET /api/stats

GET /api/alltransactions

GET /api/chart?year=2024&month=January

🧑‍💻 Run the App
1️⃣ Backend
bash
Copy
Edit
cd backend
npm install
npm run dev
2️⃣ Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
🔗 Visit the app
bash
Copy
Edit
http://localhost:5173
🔐 Authentication Flow
🔓 Login with a user_id (e.g., user_001)

✅ JWT is saved in localStorage

🛡️ All protected routes verify the token

📥 Sample Login Payload
json
Copy
Edit
POST /api/auth/login

{
  "user_id": "user_001"
}
📌 Seeded Users
user_id	name
user_001	Riya Mehta
user_002	Aryan Sharma
user_003	Sneha Patil

Or use /api/auth/register to create your own.

🖼️ Screenshots
Add dashboard, login page, and table UI screenshots here.

📦 Deployment Ready
Backend: Node + TypeScript

Frontend: React + Vite + MUI

CORS, Axios, and JWT are pre-configured

