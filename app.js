// app.js
const employees = [
  { id: 1, name: "Alice Johnson", role: "Manager" },
  { id: 2, name: "Bob Smith", role: "Engineer" },
  { id: 3, name: "Charlie Davis", role: "HR" }
];

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

app.get("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find(emp => emp.id === id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`Employee with id ${id} not found`);
  }
});

export default app;
