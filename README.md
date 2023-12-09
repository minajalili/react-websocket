# WebSocket Chat App with React

This is a simple WebSocket chat application implemented using React.

## Overview

The WebSocket Chat App allows users to communicate with each other in real-time through WebSocket connections. Users can send and receive messages instantly within the chat interface.

## Features

-   Real-time communication using WebSocket technology
-   Send and receive messages instantly
-   Basic UI for sending and displaying chat messages

## Prerequisites

Before running the application, ensure you have the following installed:

-   Node.js (v18 or later)
-   npm or yarn package manager

## Getting Started

1. **Clone the repository**

```bash
    git clone
    cd chat-app
    npm i  // install dependencies:
```

2. **runing the project**

create an env file with your own server url or online server addresses like socketsbay.com

run the bellow command and start typing in it:

```bash
     npm run dev
```

3. **Open the browser**
   Open your web browser and navigate to http://localhost:5173 to view the WebSocket Chat App.

**_Technologies Used_**

-   React.js
-   WebSocket (ws)
-   HTML/CSS

**_Directory Structure_**

```bash
chat-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Chat.jsx
│   │   └── ...
│   ├── context/
│   │   ├── MessagesContext.jsx
│   │   └── ...
│   ├── hook/
│   │   ├── useWebSocket.jsx
│   │   └── ...
│   │
│   ├── App.js
│   ├── index.jsx
│   └── ...
│
├── package.json
└── README.md
```
