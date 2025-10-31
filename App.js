// ================================
// FULL-STACK REACT + EXPRESS (1 FILE)
// ================================

import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

const app = express();
const PORT = 3000;

// ---------- React FRONTEND ----------

function App() {
  const colors = ["#ff006e", "#8338ec", "#3a86ff", "#06d6a0", "#ffd166", "#ef476f"];
  return (
    <html>
      <head>
        <title>Hello World - Full Stack</title>
        <style>{`
          body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            font-size: 4em;
            font-weight: bold;
            color: white;
            animation: blink 6s infinite;
          }
          @keyframes blink {
            0% { background-color: ${colors[0]}; }
            16% { background-color: ${colors[1]}; }
            32% { background-color: ${colors[2]}; }
            48% { background-color: ${colors[3]}; }
            64% { background-color: ${colors[4]}; }
            80% { background-color: ${colors[5]}; }
            100% { background-color: ${colors[0]}; }
          }
        `}</style>
      </head>
      <body>
        <div>Hello, World!</div>
        <script>
          // Example fetch from backend API
          fetch('/api/message')
            .then(res => res.json())
            .then(data => console.log('Server says:', data));
        </script>
      </body>
    </html>
  );
}

// ---------- BACKEND API ----------

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend API!" });
});

// ---------- SERVE REACT ----------

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(<App />);
  res.send("<!DOCTYPE html>" + html);
});

// ---------- START SERVER ----------

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
