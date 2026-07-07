# 🎥 MERN Video Calling Application

A **real-time video calling web application** built using the **MERN Stack**, **WebRTC**, and **Socket.IO**. The application enables seamless peer-to-peer video communication with low latency through a modern and responsive interface.

Developed as a **college project**, this application demonstrates the implementation of real-time communication, WebRTC signaling, REST APIs, and full-stack web development.

---

## ✨ Features

- 🔐 User Authentication
- 📹 Real-Time One-to-One Video Calling
- 🔗 Peer-to-Peer Communication using WebRTC
- 🌐 Socket.IO Signaling Server
- 🎤 Mute / Unmute Audio
- 📷 Enable / Disable Camera
- 🆔 Room Creation & Room Joining
- ⚡ Fast Connection Establishment
- 📱 Responsive User Interface
- 💻 Dashboard for User Management

---

# 🛠️ Tech Stack

## Frontend

- React.js
- HTML5
- CSS3
- JavaScript (ES6+)
- Axios
- Socket.IO Client
- WebRTC APIs

## Backend

- Node.js
- Express.js
- Socket.IO
- REST APIs

## Database

- MongoDB
- Mongoose

---

# 📂 Project Structure

```text
MERN-Video-Calling/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── .env
│
├── backend/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── dashboard/
│   │
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── .env
│
├── screenshots/
│   ├── home.png
│   ├── dashboard.png
│   ├── room.png
│   └── video-call.png
│
├── README.md
├── package.json
└── .gitignore
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git

cd MERN-Video-Calling
```

---

## 2. Install Dependencies

### Backend

```bash
cd backend

npm install
```

### Frontend

```bash
cd ../frontend

npm install
```

### Dashboard

```bash
cd ../dashboard

npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

# ▶️ Run the Project

## Start Backend

```bash
cd backend

npm start
```

or

```bash
npm run dev
```

---

## Start Frontend

```bash
cd frontend

npm start
```

---

## Start Dashboard

```bash
cd dashboard

npm start
```

---

# 🌐 Application Workflow

```text
                 User
                   │
                   ▼
          React Frontend
                   │
                   ▼
          Socket.IO Server
                   │
         Signaling Process
                   │
                   ▼
          WebRTC Connection
                   │
        Audio / Video Stream
                   │
                   ▼
               Another User
```

---

# 📚 Key Concepts Used

- MERN Stack
- WebRTC
- Socket.IO
- Peer-to-Peer Communication
- SDP Offer & Answer
- ICE Candidate Exchange
- REST API Development
- Responsive Web Design

---

# 🚀 Future Enhancements

- 👥 Group Video Calling
- 💬 Real-Time Chat
- 🖥️ Screen Sharing
- 📁 File Sharing
- 📹 Call Recording
- 🌙 Dark Mode
- 🔔 Push Notifications

---

# 📄 License

This project was developed for **educational purposes** as part of a college project and is licensed under the **MIT License**.

---

# 👩‍💻 Author

**Anchallll02**
