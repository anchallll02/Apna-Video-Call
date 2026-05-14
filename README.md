# 🎥 Real-Time Video Calling App

A real-time video calling web application built using the MERN Stack, WebRTC, and Socket.IO.  
This project enables seamless peer-to-peer video communication with low latency and real-time media streaming.

---

## 🚀 Features

- Real-time one-to-one video calling
- Peer-to-peer communication using WebRTC
- Socket.IO signaling server
- Audio and video toggle controls
- Unique room ID system
- Responsive user interface
- Fast connection establishment
- Cross-browser support

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Socket.IO Client
- WebRTC APIs

### Backend
- Node.js
- Express.js
- Socket.IO

### Database
- MongoDB

---

## 📂 Folder Structure

```bash
video-calling-app/
│
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── socket/
│   ├── server.js
│   └── package.json
│
├── README.md
└── package.json
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/video-calling-app.git
cd video-calling-app
```

---

## Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the server folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## ▶️ Run the Application

### Start Backend Server

```bash
cd server
npm start
```

### Start Frontend

```bash
cd client
npm start
```

---

## 🌐 How It Works

1. Users join the same room using a Room ID.
2. Socket.IO handles signaling between users.
3. WebRTC establishes a peer-to-peer connection.
4. Media streams are exchanged directly between users.

---

## 📸 Screenshots

Add your project screenshots here.

```bash
screenshots/home.png
screenshots/video-call.png
```

---

## 🔥 Concepts Used

- WebRTC
- Socket.IO
- ICE Candidates
- SDP Offer/Answer
- Peer-to-Peer Communication
- MERN Stack
- Real-Time Communication

---

## 📈 Future Improvements

- Group video calling
- Real-time chat
- Authentication system
- Screen sharing
- Call recording
- Dark mode

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your branch
3. Commit changes
4. Push the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

Anchal Maurya  
MERN Stack Developer 🚀
