🔐 JWT Authentication Backend


📄 Description

A simple Node.js backend implementing JWT-based authentication with user registration, login, and protected routes using Express and MongoDB.

🛠️ Tech Stack
🟢 Node.js
⚡ Express.js
🍃 MongoDB (Mongoose)
🔑 JSON Web Token (JWT)
🔒 bcryptjs
📁 Project Structure
JWT-Authendication/
│
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── .env
├── index.js
├── package.json
⚙️ Installation
git clone <repo-url>
cd JWT-Authendication
npm install
🔑 Environment Variables

Create a .env file:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
▶️ Running the App
npm run dev

Server runs at:

http://localhost:3000
📬 API Endpoints
👤 Register
POST /api/users/register
🔐 Login
POST /api/users/login
📄 Get Users (Protected)
GET /api/users
❌ Delete User (Protected)
DELETE /api/users/:id
🔐 Authentication

Protected routes require a token in headers:

Authorization: <token>
✨ Features
👤 User registration and login
🔒 Password hashing
🔑 JWT authentication
🔐 Protected routes
👨‍💻 Author

Sathya
