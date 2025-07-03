# Helpdesk Ticketing System

A full-stack helpdesk ticketing system built with React (frontend), Express + Node.js (backend), using JWT-based authentication, Material-UI for styling, and hosted on **Render**.

---

## 📌 Features

### 🔒 User Authentication

* User Signup with secure password hashing
* Login with JWT authentication
* Protected dashboard routes

### 📝 Ticket Management

* Create new support tickets
* Auto-assigns creation date and creator's name
* Searchable tickets (by subject, ID, description)

### 📋 Ticket Listing

* List all tickets created by the user
* Search functionality
* Status chips with color indicators
* Modal popup for detailed ticket view

### 📧 Forgot Password (Simulated)

* Simulates sending a reset link to the email

### 🎨 UI/UX

* Clean, responsive design using Material-UI
* Styled inputs, buttons, and layout
* Sidebar dashboard layout

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Axios
* Material-UI (MUI)

### Backend

* Express.js
* Node.js
* JWT for authentication
* Bcrypt for password hashing
---

## 🖥️ Local Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/helpdesk.git
cd helpdesk

# Install backend dependencies
cd helpdesk-backend
npm install
node server.js

# Install frontend dependencies
cd ../helpdesk-frontend
npm install
npm start
```

## 📸 Screenshots

Add screenshots of:

* Login page
* Signup page
* Create Ticket form
* Ticket List view

---

## 🙋‍♀️ Author

**Tanya Kumari**

GitHub: [Tanyajha-2003](https://github.com/Tanyajha-2003)

---

## 📝 License

This project is licensed under the MIT License.
