const express = require("express");
const app = express();
const port = 3001;
const cors=require("cors")
app.use(cors());
const data = {
  Lecturers: [
    {
      id: "1",
      name: "Moshe",
      email: "moshe@moshe.com",
      languages: [1, 3],
    },
    {
      id: "20",
      name: "Avi",
      email: "avi@moshe.com",
      languages: [3],
    },
    {
      id: "300",
      name: "Gila",
      email: "gila@moshe.com",
      languages: [2, 4, 7],
    },
  ],
  Languages: [
    {
      id: 1,
      name: "Java",
    },
    {
      id: 2,
      name: ".NET",
    },
    {
      id: 3,
      name: "NodeJS",
    },
    {
      id: 4,
      name: "Advanced Vanilla JS",
    },
    {
      id: 5,
      name: "React",
    },
    {
      id: 5,
      name: "Angular",
    },
    {
      id: 7,
      name: "Kotlin",
    },
    {
      id: 7,
      name: "Dart",
    },
    {
      id: 8,
      name: "Flutter",
    },
  ],
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/Lecturer", (req, res) => {
  res.json(data)
});
app.post("/CreateLeturer", (req, res) => {});
