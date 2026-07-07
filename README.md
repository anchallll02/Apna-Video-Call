# 🎥 Real-Time Video Calling Application

A **Real-Time Video Calling Web Application** built using the **MERN Stack**, **WebRTC**, and **Socket.IO**. This project enables secure and low-latency peer-to-peer video communication through real-time media streaming.

Developed as a **college project**, it demonstrates the implementation of modern real-time communication technologies, WebRTC signaling, and full-stack web development.

---

# ✨ Features

- 📹 Real-time One-to-One Video Calling
- 🔗 Peer-to-Peer Communication using WebRTC
- 🌐 Socket.IO Signaling Server
- 🎤 Audio Mute / Unmute
- 📷 Camera On / Off
- 🆔 Unique Room ID Generation & Joining
- ⚡ Fast Connection Establishment
- 📱 Responsive User Interface
- 🌍 Cross-Browser Compatibility
- 🔄 Real-Time Media Streaming

---

# 🛠️ Tech Stack

## Frontend

- React.js
- HTML5
- CSS3
- JavaScript (ES6+)
- Socket.IO Client
- WebRTC APIs

## Backend

- Node.js
- Express.js
- Socket.IO

## Database

- MongoDB
- Mongoose

---

# 📂 Project Structure

```text
video-calling-app/
│
├── client/
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── VideoPlayer.jsx
│   │   │   ├── Controls.jsx
│   │   │   ├── JoinRoom.jsx
│   │   │   └── Room.jsx
│   │   │
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── .env
│
├── server/
│   │
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   │   └── socket.js
│   │
│   ├── middleware/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── screenshots/
│   ├── home.png
│   ├── join-room.png
│   └── video-call.png
│
├── README.md
├── package.json
└── .gitignore
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/video-calling-app.git

cd video-calling-app
```

---

## 2️⃣ Install Dependencies

### Client

```bash
cd client
npm install
```

### Server

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a **.env** file inside the **server** directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

# ▶️ Run the Application

## Start Backend Server

```bash
cd server

npm start
```

or

```bash
npm run dev
```

---

## Start Frontend

```bash
cd client

npm start
```

The application will run on

```text
http://localhost:3000
```

---

# 🔄 Application Workflow

```text
               User A
                  │
                  ▼
          Join/Create Room
                  │
                  ▼
          Socket.IO Signaling
                  │
                  ▼
        WebRTC Offer / Answer
                  │
                  ▼
           ICE Candidate Exchange
                  │
                  ▼
      Peer-to-Peer Connection
                  │
                  ▼
     Audio & Video Streaming
                  │
                  ▼
               User B
```

---

# 🌐 How It Works

1. Users create or join a room using a unique Room ID.
2. Socket.IO establishes the signaling channel.
3. WebRTC exchanges SDP Offers and Answers.
4. ICE Candidates are shared between peers.
5. A secure peer-to-peer connection is established.
6. Audio and video streams are transmitted in real time.

---

# 📸 Screenshots

Add screenshots of your application inside the **screenshots/** folder.

```text
screenshots/
│
├── home.png
├── join-room.png
└── video-call.png
```

---

# 📚 Concepts Implemented

- WebRTC
- Socket.IO
- Peer-to-Peer Communication
- SDP Offer & Answer
- ICE Candidate Exchange
- Real-Time Media Streaming
- MERN Stack Architecture
- REST APIs
- Responsive Web Design

---

# 🚀 Future Enhancements

- 👥 Group Video Calling
- 💬 Real-Time Chat
- 🔐 User Authentication
- 🖥️ Screen Sharing
- 📹 Call Recording
- 🌙 Dark Mode
- 📁 File Sharing
- 📊 Call History

---

# 📄 License

This project is developed for **educational purposes** as part of a **college project** and is licensed under the **MIT License**.

---

# 👩‍💻 Author

**Anchallll02**



---

⭐ If you found this project useful, consider giving it a **Star** on GitHub.
