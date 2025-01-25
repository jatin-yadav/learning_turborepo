import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome To CHAT-APP Backend!");
});

app.post("/signin", (req, res) => {
  res.send("CHAT-APP SignIn!");
});

app.post("/signup", (req, res) => {
  res.send("CHAT-APP SignUp!");
});

app.post("/chat", (req, res) => {
  res.send("CHAT-HISTORY!");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001:http://localhost:3001");
});
