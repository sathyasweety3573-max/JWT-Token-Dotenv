# 🔐 JWT Authentication Backend

A simple authentication backend using Node.js, Express, MongoDB, and JWT.

---

## 🚀 Features
- User Registration
- User Login
- JWT Token Authentication
- Protected Routes
- Delete User

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv

---

## ⚙️ Setup Instructions

### 1. Clone Repository
git clone https://github.com/sathyasweety3573-max/JWT-Token-Dotenv.git  
cd JWT-Token-Dotenv

### 2. Install Dependencies
npm install

### 3. Create .env File
PORT=5000  
MONGO_URI=your_mongodb_url  
JWT_SECRET=your_secret_key  

### 4. Run Server
npm run dev  
or  
node server.js  

---

## 🌐 Base URL
http://localhost:5000

---

## 📌 API Endpoints

### 🔹 1. Register User
POST /api/auth/register

Body:
{
  "email": "sathya@gmail.com",
  "password": "123456"
}

Response:
{
  "msg": "User registered successfully"
}

---

### 🔹 2. Login User
POST /api/auth/login

Body:
{
  "email": "sathya@gmail.com",
  "password": "123456"
}

Response:
{
  "token": "your_jwt_token"
}

---

### 🔹 3. Get Profile (Protected)
GET /api/auth/profile

Headers:
Authorization: Bearer your_jwt_token

Response:
{
  "user": {
    "id": "user_id",
    "email": "sathya@gmail.com"
  }
}

---

### 🔹 4. Delete User
DELETE /api/auth/delete

Headers:
Authorization: Bearer your_jwt_token

Response:
{
  "msg": "User deleted successfully"
}

---

## 🧪 Postman Testing

### ✅ Step 1: Register
POST http://localhost:5000/api/auth/register  
Body → raw → JSON

### ✅ Step 2: Login
POST http://localhost:5000/api/auth/login  
Copy token from response

### ✅ Step 3: Set Token
Headers:
Authorization: Bearer <your_token>

OR  
Postman → Authorization → Bearer Token → paste token

### ✅ Step 4: Access Profile
GET http://localhost:5000/api/auth/profile

### ✅ Step 5: Delete User
DELETE http://localhost:5000/api/auth/delete

---

---

## 🧠 JWT Flow
1. User logs in  
2. Server generates token  
3. Client stores token  
4. Token sent in headers  
5. Server verifies token  

---

## 👨‍💻 Author
Sathya

---

