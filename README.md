# TaskArea

TaskArea is a full-stack MERN Task Management application that helps users organize and manage their daily tasks efficiently. It features secure user authentication, task management, priority levels, due dates, and a clean, responsive interface built with Bootstrap.

## 🚀 Features

* User Registration & Login (JWT Authentication)
* Secure Password Hashing with bcrypt
* Create, Read, Update, and Delete (CRUD) Tasks
* Mark Tasks as Completed
* Set Task Priority (Low, Medium, High)
* Add Due Dates
* Responsive Bootstrap UI
* Protected Routes
* RESTful API

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Bootstrap
* Axios
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt.js

## 📁 Project Structure

```text
TaskArea/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/TaskArea.git
```

### Install frontend dependencies

```bash
cd frontend
npm install
```

### Install backend dependencies

```bash
cd ../backend
npm install
```

### Configure Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the Backend

```bash
npm run dev
```

### Start the Frontend

```bash
npm run dev
```

The application will run at:

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:5000`


## 👩‍💻 Author

**Devyanshi Vyas**

* GitHub: https://github.com/devyanshi2o
* LinkedIn: https://www.linkedin.com/in/devyanshi-vyas-489468280


